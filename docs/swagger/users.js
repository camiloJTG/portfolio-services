/**
 * @swagger
 * 
 * /personal/:
 *  post:
 *      security:
 *          - bearerAuth: []
 *      tags:
 *          - Módulo de usuario
 *      description: Crear una cuenta de usuario para acceder a la información
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - mail
 *                          - password
 *                          - username
 *                      properties:
 *                          mail:
 *                              type: string
 *                          password:
 *                              type: string
 *                          username:
 *                              type: string
 *                          socialMedia:
 *                              type: array
 *                              items:
 *                                  allOf:
 *                                      - $ref: '#/definitions/social'
 *      responses:
 *          200:
 *              description: Crear una cuenta de usuario
 *              content:
 *                  application/json:
 *                      schema:
 *                          properties:
 *                              error:
 *                                  types: boolean
 *                                  example: false
 *                              status:
 *                                  type: integer
 *                                  example: 200
 *                              body:
 *                                  allOf:
 *                                      - $ref: '#/definitions/users'
 *          400:
 *              description: Respuestas asociadas a errores de ingreso de datos
 *              content:
 *                  application/json:
 *                      schema:
 *                          properties:
 *                              error:
 *                                  types: boolean
 *                                  example: True
 *                              status:
 *                                  type: integer
 *                                  example: 400 | 401 | 402 | 403
 *                              body:
 *                                  type: string
 *          500:
 *              description: Respuestas asociadas a errores interno del servicio
 *              content:
 *                  application/json:
 *                      schema:
 *                          properties:
 *                              error:
 *                                  types: boolean
 *                                  example: True
 *                              status:
 *                                  type: integer
 *                                  example: 500 | 501 | 502
 *                              body:
 *                                  type: string
 * /personal/{accountId}:
 *  get:
 *      tags:
 *          - Módulo de usuario
 *      description: Obtener todos los datos de un único usuario
 *      parameters:
 *          - in: path
 *            name: accountId
 *            schema:
 *              type: string
 *            required: true
 *            description: Id de cuenta que tiene asociada redes sociales
 *      responses:
 *          200:
 *              description: Retorna toda la información del usuario buscado
 *              content:
 *                  application/json:
 *                      schema:
 *                          properties:
 *                              error:
 *                                  types: boolean
 *                                  example: false
 *                              status:
 *                                  type: integer
 *                                  example: 200
 *                              body:
 *                                  allOf:
 *                                      - $ref: '#/definitions/fullUsers'
 *          400:
 *              description: Respuestas asociadas a errores de ingreso de datos
 *              content:
 *                  application/json:
 *                      schema:
 *                          properties:
 *                              error:
 *                                  types: boolean
 *                                  example: True
 *                              status:
 *                                  type: integer
 *                                  example: 400 | 401 | 402 | 403
 *                              body:
 *                                  type: string
 *          500:
 *              description: Respuestas asociadas a errores interno del servicio
 *              content:
 *                  application/json:
 *                      schema:
 *                          properties:
 *                              error:
 *                                  types: boolean
 *                                  example: True
 *                              status:
 *                                  type: integer
 *                                  example: 500 | 501 | 502
 *                              body:
 *                                  type: string            
 * definitions:
 *  users:
 *      type: object
 *      required:
 *          - _id
 *          - mail
 *          - password
 *          - username
 *      properties:
 *          _id:
 *              type: string
 *          mail:
 *              type: string
 *          password:
 *              type: string
 *          username: 
 *              type: string
 *          socialMedia:
 *              type: array
 *              items:
 *                  allOf:
 *                      - $ref: '#/definitions/social'
 *                      
 *  social:
 *      type: object
 *      required:
 *          - _id
 *          - fullName
 *          - priority
 *          - url
 *      properties:
 *          _id:
 *              type: string
 *          fullName:
 *              type: string
 *          priority:
 *              type: number
 *          url:
 *              type: string
 *  socialWithImage:
 *      type: object
 *      required:
 *          - _id
 *          - fullName
 *          - priority
 *          - url
 *      properties:
 *          _id:
 *              type: string
 *          fullName:
 *              type: string
 *          priority:
 *              type: number
 *          url:
 *              type: string
 *          images:
 *              type: object
 *              allOf:
 *                  - $ref: '#/definitions/images'
 *  fullUsers:
 *      type: object
 *      required:
 *          - _id
 *          - mail
 *          - password
 *          - username
 *      properties:
 *          _id:
 *              type: string
 *          mail:
 *              type: string
 *          password:
 *              type: string
 *          username: 
 *              type: string
 *          socialMedia:
 *              type: array
 *              items:
 *                  allOf:
 *                      - $ref: '#/definitions/socialWithImage'
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
 *           
 * components:
 *  securitySchemes:
 *      bearerAuth:
 *          type: http
 *          scheme: bearer
 *          bearerFormat: jwt
 */