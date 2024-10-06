/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDrawing = /* GraphQL */ `
  mutation CreateDrawing(
    $drawingId: ID!
    $timestamp: Int!
    $userId: String!
    $x: Float!
    $y: Float!
    $isDrawing: Boolean!
  ) {
    createDrawing(
      drawingId: $drawingId
      timestamp: $timestamp
      userId: $userId
      x: $x
      y: $y
      isDrawing: $isDrawing
    ) {
      drawingId
      timestamp
      userId
      x
      y
      isDrawing
      __typename
    }
  }
`;
export const updateDrawing = /* GraphQL */ `
  mutation UpdateDrawing(
    $drawingId: ID!
    $timestamp: Int!
    $userId: String!
    $x: Float!
    $y: Float!
    $isDrawing: Boolean!
  ) {
    updateDrawing(
      drawingId: $drawingId
      timestamp: $timestamp
      userId: $userId
      x: $x
      y: $y
      isDrawing: $isDrawing
    ) {
      drawingId
      timestamp
      userId
      x
      y
      isDrawing
      __typename
    }
  }
`;
export const createCodeFile = /* GraphQL */ `
  mutation CreateCodeFile(
    $fileId: ID!
    $version: Int!
    $userId: String!
    $content: String!
  ) {
    createCodeFile(
      fileId: $fileId
      version: $version
      userId: $userId
      content: $content
    ) {
      fileId
      version
      userId
      content
      __typename
    }
  }
`;
