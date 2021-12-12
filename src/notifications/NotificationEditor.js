import * as React from "react";
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    DateTimeInput,
    BooleanInput
} from 'react-admin';

export const NotificationEditor = props => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <ReferenceInput source="userId" reference="users">
                    <SelectInput optionText="username" />
                </ReferenceInput>
                <TextInput source="message" multiline />
                <TextInput source="type" />
                <DateTimeInput source="scheduleAt" />
                <BooleanInput source="isPushed" />
            </SimpleForm>
        </Edit>
    )
};