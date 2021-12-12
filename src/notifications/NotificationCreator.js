import * as React from "react";
import {
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    DateTimeInput,
    BooleanInput,
    Create
} from 'react-admin';

export const NotificationCreator = props => {
    return (
        <Create {...props}>
            <SimpleForm>
                <ReferenceInput source="userId" reference="users">
                    <SelectInput optionText="username" />
                </ReferenceInput>
                <TextInput source="message" multiline />
                <TextInput source="type" defaultValue="lineNotify"/>
                <DateTimeInput source="scheduleAt" />
                <BooleanInput source="isPushed" options/>
            </SimpleForm>
        </Create>
    )
};