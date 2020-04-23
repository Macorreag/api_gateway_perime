export const context = {
    /* MULTIMEDIA MICROSERVICE CONNECTIONS VARS */
    MULTIMEDIA_URL: process.env.MULTIMEDIA_URL || "ec2-54-173-77-159.compute-1.amazonaws.com",
    MULTIMEDIA_PORT: process.env.MULTIMEDIA_PORT || "9000",
    MULTIMEDIA_BASE_ENDPOINT: process.env.MULTIMEDIA_BASE_ENDPOINT || "api/multimedia",

    /* SEARCH MICROSERVICE CONNECTIONS VARS ... */
    SEARCH_URL: process.env.SEARCH_URL,
    SEARCH_PORT: process.env.SEARCH_PORT,
    SEARCH_BASE_ENDPOINT: process.env.SEARCH_BASE_ENDPOINT,

    /* UBICATION MICROSERVICE CONNECTIONS VARS */
    UBICATION_URL: process.env.UBICATION_URL,
    UBICATION_PORT: process.env.UBICATION_PORT,
    UBICATION_BASE_ENDPOINT: process.env.UBICATION_BASE_ENDPOINT,
    
    /* COMMENTS MICROSERVICE CONNECTIONS VARS */
    COMMENTS_URL: process.env.COMMENTS_URL,
    COMMENTS_PORT: process.env.COMMENTS_PORT,

    /* losprecios EXTERNAL CONNECTIONS VARS */
    LOSPRECIOS_URL: process.env.LOSPRECIOS_URL

}
