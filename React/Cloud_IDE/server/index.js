const express = require('express');
const bodyParser = require('body-parser');
const { ApolloClient, InMemoryCache, HttpLink, split, ApolloProvider, gql } = require('@apollo/client');
const { getMainDefinition } = require('@apollo/client/utilities');
const WebSocket = require('ws');
const WebSocketLink = require('@apollo/client/link/ws').WebSocketLink;

// Initialize Express app
const app = express();
app.use(bodyParser.json());

// Initialize Apollo Client
const httpLink = new HttpLink({
  uri: 'https://ib5dvypyarax5pzs34zb6zrmsy.appsync-api.ap-south-1.amazonaws.com/graphql',
  headers: {
    'x-api-key': 'da2-6l6e5yyrijbt5c6swzxc56gmu4'
  }
});

const wsLink = new WebSocketLink({
  uri: 'wss://ib5dvypyarax5pzs34zb6zrmsy.appsync-realtime-api.ap-south-1.amazonaws.com/graphql',
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        'x-api-key': 'da2-6l6e5yyrijbt5c6swzxc56gmu4'
      }
    }
  }
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
});

// Define GraphQL queries, mutations, and subscriptions
const GET_DOCUMENT = gql`
  query getDocument($id: ID!) {
    getDocument(id: $id) {
      id
      content
      title
    }
  }
`;

const UPDATE_DOCUMENT = gql`
  mutation updateDocument($id: ID!, $content: String!) {
    updateDocument(id: $id, content: $content) {
      id
      content
      title
    }
  }
`;

const SUBSCRIBE_TO_UPDATES = gql`
  subscription onUpdateDocument($id: ID!) {
    onUpdateDocument(id: $id) {
      id
      content
      title
    }
  }
`;

// Endpoint to fetch document
app.get('/document/:id', async (req, res) => {
  try {
    const result = await client.query({
      query: GET_DOCUMENT,
      variables: { id: req.params.id }
    });
    res.json(result.data.getDocument);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Endpoint to update document
app.post('/document/:id', async (req, res) => {
  try {
    const result = await client.mutate({
      mutation: UPDATE_DOCUMENT,
      variables: { id: req.params.id, content: req.body.content }
    });
    res.json(result.data.updateDocument);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Set up WebSocket server for subscriptions
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
  const subscription = client.subscribe({
    query: SUBSCRIBE_TO_UPDATES,
    variables: { id: "DOCUMENT_ID" }
  }).subscribe({
    next(data) {
      ws.send(JSON.stringify(data.data.onUpdateDocument));
    },
    error(err) {
      console.error('Subscription error:', err);
    }
  });

  ws.on('message', message => {
    console.log('Received message:', message);
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed');
    subscription.unsubscribe(); // Clean up subscription
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
