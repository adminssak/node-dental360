import { ApiProperty } from "@nestjs/swagger";

export interface SessionVariables {
    'x-hasura-role': string;
    'x-hasura-client-id': string;
}


export interface Action {
    name: string;
}

export interface HasuraActionSchema<T> {
    session_variables: SessionVariables;
    input: { details: T };
    action: Action;
}

export class HasuraActionSchema<T> {
    @ApiProperty({
        example: {}
    })
    session_variables: SessionVariables;
    @ApiProperty({
        example: {}
    })
    input: { details: T };
    @ApiProperty({
        example: {}
    })
    action: Action;
}