import * as React from "react";
import { List, Datagrid, TextField, BooleanField, DateField } from 'react-admin';

const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="passwordHash" />
            <BooleanField source="isActive" />
            <TextField source="subscribedPath" />
            <DateField source="anniversaryDate" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
);

export default UserList;