import * as React from "react";
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  TextField,
  TextInput,
  EditButton,
  ReferenceField,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RaRecord } from "ra-core";

interface PostListProps {
  basePath?: string;
  data?: any;
  ids?: any[];
  loaded?: boolean;
  loading?: boolean;
  onSelect?: (ids: any[]) => void;
  onToggleItem?: (id: any) => void;
  resource?: string;
  total?: number;
}

interface PostEditProps {
  basePath?: string;
  id?: string | number;
  record?: RaRecord;
  resource?: string;
  save?: (data: any, redirectTo: string) => void;
}

interface PostCreateProps {
  basePath?: string;
  resource?: string;
  save?: (data: any, redirectTo: string) => void;
}

export const PostList: React.FC<PostListProps> = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <EditButton />
    </Datagrid>
  </List>
);

export const PostEdit: React.FC<PostEditProps> = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" />
    </SimpleForm>
  </Edit>
);

export const PostCreate: React.FC<PostCreateProps> = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
    </SimpleForm>
  </Create>
);
