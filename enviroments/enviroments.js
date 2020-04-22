export const context = {
    /* MULTIMEDIA MICROSERVICE CONNECTIONS VARS */
    MULTIMEDIA_URL: process.env.MULTIMEDIA_URL || "ec2-54-173-77-159.compute-1.amazonaws.com",
    MULTIMEDIA_PORT: process.env.MULTIMEDIA_PORT || "9000",
    MULTIMEDIA_BASE_ENDPOINT: process.env.MULTIMEDIA_BASE_ENDPOINT || "api/multimedia",

    /* BUSQUEDA MICROSERVICE CONNECTIONS VARS ... */
    BUSQUEDA_URL: process.env.BUSQUEDA_URL,
    BUSQUEDA_PORT: process.env.BUSQUEDA_PORT,
    BUSQUEDA_BASE_ENDPOINT: process.env.BUSQUEDA_BASE_ENDPOINT
}