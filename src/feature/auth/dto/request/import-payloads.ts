import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber } from 'class-validator';

export class ImportUsersRequestDTO {
    @IsString()
    @ApiProperty({})
    apiKey: string;

    @IsOptional()
    @ApiPropertyOptional({})
    defaultPassword?: string;

    @IsString()
    @ApiProperty()
    csvUrl: string;

    // @IsString()
    // @ApiProperty()
    // role?: string;
}

export class ImportAdminUsersRequestDTO {

    @IsOptional()
    @ApiPropertyOptional({})
    defaultPassword?: string;

    @IsString()
    @ApiProperty()
    csvUrl: string;

}

export class ImportRequestDTO {

    @IsString()
    @ApiProperty()
    clinic_id: string;

    @IsString()
    @ApiProperty()
    csvUrl: string;

}

export class ImportVendorsRequestDTO {

    @IsString()
    @ApiProperty()
    phone: string;
    
    @IsString()
    @ApiProperty()
    name: string;
    
    @IsString()
    @ApiProperty()
    status: string;

    @IsOptional()
    @ApiPropertyOptional({})
    email: string;
    
    @IsOptional()
    @ApiPropertyOptional({})
    image: any;

    @IsOptional()
    @ApiPropertyOptional({})
    contact_person_name: string;

    @IsOptional()
    @ApiPropertyOptional({})
    contact_person_email: string;

    @IsOptional()
    @ApiPropertyOptional({})
    contact_person_phone: string;

}

export class ImportProductsRequestDTO {

    @IsString()
    @ApiProperty()
    unique_scan_id : string;
    
    @IsString()
    @ApiProperty()
    name: string;
    
    @IsString()
    @ApiProperty()
    status: string;

    @IsNumber()
    @ApiProperty()
    purchase_price: number;

    @IsNumber()
    @ApiProperty()
    sale_price : number;

    @IsNumber()
    @ApiProperty()
    current_stock: number;
    
    @IsString()
    @ApiProperty()
    manufacturer_name : string;

    @IsOptional()
    @ApiPropertyOptional({})
    quantity : string;
    
    @IsOptional()
    @ApiPropertyOptional({})
    image: any;

    @IsOptional()
    @ApiPropertyOptional({})
    quantity_type : string;

    @IsOptional()
    @ApiPropertyOptional({})
    internal_code : string;

    @IsOptional()
    @ApiPropertyOptional({})
    note : string;
    
}