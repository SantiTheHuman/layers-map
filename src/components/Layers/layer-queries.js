import { gql } from "@apollo/client";

export const LAYERS_QUERY = gql`
  query MyQuery {
    layers {
      id
      icon
      name
      public
    }
  }
`;
export const CREATE_LAYER = gql`
  mutation($nameInput: String!) {
    insert_layers(objects: { name: $nameInput }) {
      returning {
        name
      }
    }
  }
`;
export const DELETE_LAYER = gql`
  mutation($id: uuid!) {
    delete_layers(where: { id: { _eq: $id } }) {
      returning {
        name
      }
    }
  }
`;
export const MAKE_PUBLIC = gql`
  mutation($id: uuid!, $public: Boolean!) {
    update_layers(where: { id: { _eq: $id } }, _set: { public: $public }) {
      returning {
        name
        public
      }
    }
  }
`;
