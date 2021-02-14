/**
 * @swagger
 *
 * /media/:
 *  post:
 *      security:
 *          - bearerAuth: []
 *      tags:
 *          - Módulo de imagenes
 *      description: Almacenar una nueva imagen
 *      requestBody:
 *          required: true
 *          content:
 *              multipart/form-data:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - images
 *                          - socialMediaId
 *                      properties:
 *                          images:
 *                              type: string
 *                              format: binary
 *                          socialMediaId:
 *                              type: string
 *      responses:
 *          200:
 *              description: Retorna la información de la imagen almacenada
 *              content:
 *                   multipart/form-data:
 *                      schema:
 *                          properties:
 *                              error:
 *                                  type: boolean
 *                                  example: False
 *                              status:
 *                                  type: integer
 *                                  example: 200
 *                              body:
 *                                  allOf:
 *                                  - $ref: '#/definitions/images'
 * /media/{id}:
 *  put:
 *      security:
 *          - bearerAuth: []
 *      tags:
 *          - Módulo de imagenes
 *      description: Actualizar imagenes
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Id de la imagen que se desea actualizar
 *      requestBody:
 *          required: true
 *          content:
 *              multipart/form-data:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - images
 *                      properties:
 *                          images:
 *                              type: string
 *                              format: binary
 *      responses:
 *          200:
 *              description: Retorna la información de la imagen almacenada
 *              content:
 *                   multipart/form-data:
 *                      schema:
 *                          properties:
 *                              error:
 *                                  type: boolean
 *                                  example: False
 *                              status:
 *                                  type: integer
 *                                  example: 200
 *                              body:
 *                                  allOf:
 *                                  - $ref: '#/definitions/updateImages'
 * definitions:
 *  updateImages:
 *      type: object
 *      properties:
 *          localUrl:
 *              type: string
 *          remoteUrl:
 *              type: string
 *          remoteId:
 *              type: string
 *  images:
 *      type: object
 *      properties:
 *          _id:
 *              type: string
 *          localUrl:
 *              type: string
 *          modelId:
 *              type: string
 *          remoteId:
 *              type: string
 *          remoteUrl:
 *              type: string
 */