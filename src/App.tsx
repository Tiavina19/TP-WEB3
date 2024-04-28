import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PostList, PostEdit, PostCreate } from "./posts";
import { CommentList, CommentEdit, CommentCreate } from "./comments";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    />
    <Resource
      name="comments"
      list={CommentList}
      edit={CommentEdit}
      create={CommentCreate}
    />
  </Admin>
);

export default App;
