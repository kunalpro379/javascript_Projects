/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDrawing = /* GraphQL */ `
  query GetDrawing($drawingId: ID!) {
    getDrawing(drawingId: $drawingId) {
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
export const getCodeFile = /* GraphQL */ `
  query GetCodeFile($fileId: ID!, $version: Int!) {
    getCodeFile(fileId: $fileId, version: $version) {
      fileId
      version
      userId
      content
      __typename
    }
  }
`;
