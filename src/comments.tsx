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
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RaRecord } from "ra-core";

interface CommentListProps {
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

interface CommentEditProps {
  basePath?: string;
  id?: string | number;
  record?: RaRecord;
  resource?: string;
  save?: (data: any, redirectTo: string) => void;
}

interface CommentCreateProps {
  basePath?: string;
  resource?: string;
  save?: (data: any, redirectTo: string) => void;
}

export const CommentList: React.FC<CommentListProps> = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="email" />
      <EditButton />
    </Datagrid>
  </List>
);

export const CommentEdit: React.FC<CommentEditProps> = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
    </SimpleForm>
  </Edit>
);

export const CommentCreate: React.FC<CommentCreateProps> = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
    </SimpleForm>
  </Create>
);
