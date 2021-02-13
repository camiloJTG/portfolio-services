/**
 * @swagger
 *
 * /social/lastThree/{accountId}:
 *  get:
 *      tags:
 *          - Módulo de redes sociales
 *      description: Obtener los últimos tres registros de redes sociales
 *      parameters:
 *          - in: path
 *            name: accountId
 *            schema:
 *              type: string
 *            required: true
 *            description: Id de cuenta que tiene asociada redes sociales
 *      responses:
 *          200:
 *              description: Retorna los último tres registros de redes sociales
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
 *                                      - $ref: '#/definitions/social'
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
 * /social/{accountId}:
 *  get:
 *      tags:
 *          - Módulo de redes sociales
 *      description: Obtener todos los registro de redes sociales por account id
 *      parameters:
 *          - in: path
 *            name: accountId
 *            schema:
 *              type: string
 *            required: true
 *            description: Id de cuenta que tiene asociada redes sociales
 *      responses:
 *          200:
 *              description: Retorna todas las redes sociales asociadas a la cuenta
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
 *                                      - $ref: '#/definitions/social'
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
 *  social:
 *      type: object
 *      properties:
 *          _id:
 *              type: string
 *          priority:
 *              type: string
 *          url: 
 *              type: string
 *          fullName:
 *              type: string
 *          images:
 *              type: object
 *              allOf:
 *                  - $ref: '#/definitions/images'
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