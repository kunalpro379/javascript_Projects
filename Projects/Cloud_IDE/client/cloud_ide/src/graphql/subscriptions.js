/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onDrawingUpdated = /* GraphQL */ `
  subscription OnDrawingUpdated($drawingId: ID!) {
    onDrawingUpdated(drawingId: $drawingId) {
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
export const onCodeFileUpdated = /* GraphQL */ `
  subscription OnCodeFileUpdated($fileId: ID!) {
    onCodeFileUpdated(fileId: $fileId) {
      fileId
      version
      userId
      content
      __typename
    }
  }
`;
