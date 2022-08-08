export interface IProductConfig {
    TITLE: string
    IMAGE: string
    DESCRIPTION: string
    PRODUCTION_DATE: string
    ESTIMATE_DATE: string
    REST: string
    MEASUREMENT: string 
}

export interface IProductConfigArray extends Array<IProductConfig>{}

export const ProductsConfig:IProductConfigArray = [
    {
        TITLE: 'TITLE',
        IMAGE: 'IMAGE',
        DESCRIPTION: 'DESCRIPTION',
        PRODUCTION_DATE: 'PRODUCTION_DATE',
        ESTIMATE_DATE: 'ESTIMATE_DATE',
        REST: 'REST',
        MEASUREMENT: 'MEASUREMENT',
    }   
]

