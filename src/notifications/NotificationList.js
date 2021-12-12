import * as React from "react";
import { ReferenceField, List, Datagrid, TextField, BooleanField, DateField, EditButton } from 'react-admin';

export const NotificationList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users">
                <TextField source="username" />
            </ReferenceField>
            <TextField source="message" />
            <TextField source="type" />
            <DateField source="scheduleAt" showTime/>
            <BooleanField source="isPushed" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <EditButton />
        </Datagrid>
    </List>
);