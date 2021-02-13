/**
 * @swagger
 *
 * /access/:
 *  post:
 *      security:
 *          - bearerAuth: []
 *      tags:
 *          - Módulo de acceso
 *      description: Obtener un token para poder acceder a servicios con autorizador bearerAuth
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - mail
 *                          - password
 *                      properties:
 *                          mail:
 *                              type: string
 *                          password:
 *                              type: string
 *      responses:
 *          200:
 *              description: Retorna un token que permite acceder a servicios protejidos
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
 *                                      - $ref: '#/definitions/access'
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
 *  access:
 *      type: object
 *      required:
 *          - token
 *          - type
 *          - expireIn
 *      properties:
 *          token:
 *              type: string
 *          type:
 *              type: string
 *          expireIn: 
 *              type: string
 * components:
 *  securitySchemes:
 *      bearerAuth:
 *          type: http
 *          scheme: bearer
 *          bearerFormat: jwt
 */
