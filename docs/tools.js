/**
 * @swagger
 * 
 * /tools/:
 *  post:
 *      security:
 *          - bearerAuth: []
 *      tags:
 *          - Módulo de herramientas
 *      description: Crear una herramienta que se implementa a un proyecto
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - name
 *                          - priority
 *                      properties:
 *                          name:
 *                              type: string
 *                          priority:
 *                              type: number
 *      responses:
 *          200:
 *              description: Crear una herramienta
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
 *                                      - $ref: '#/definitions/createTool'
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
 *  get:
 *      tags:
 *          - Módulo de herramientas
 *      description: Obtener todas las herramientas registradas
 *      responses:
 *          200:
 *              description: Obtener las herramientas
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
 *                                      - $ref: '#/definitions/getTools'
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
 * /tools/oneTool/{toolId}:
 *  get:
 *      tags:
 *          - Módulo de herramientas
 *      description: Conseguir una herramienta en específica
 *      parameters:
 *          - in: path
 *            name: toolId
 *            schema:
 *              type: string
 *            required: true
 *            description: Id de la herramienta
 *      responses:
 *          200:
 *              description: Retona la información específica de la herramienta
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
 *                                      - $ref: '#/definitions/getTools'
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
 * /tools/{toolId}:
 *  put:
 *      security:
 *          - bearerAuth: []
 *      tags:
 *          - Módulo de herramientas
 *      description: Actualizar una herramienta en específica
 *      parameters:
 *          - in: path
 *            name: toolId
 *            schema:
 *              type: string
 *            required: true
 *            description: Id de la herramienta
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          priority:
 *                              type: number
 *      responses:
 *          200:
 *              description: Actualizar herramienta en específica
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
 *                                      - $ref: '#/definitions/createTool'
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
 *  createTool: 
 *      type: object
 *      required:
 *          - name
 *          - priority
 *      properties:
 *          name:
 *              type: string
 *          priority:
 *              type: number
 *  getTools:
 *      type: object
 *      properties:
 *          name:
 *              type: string
 *          priority:
 *              type: number
 *          images:
 *              type: object
 *              allOf:
 *                  - $ref: '#/definitions/images'
 *  tools:
 *      type: object
 *      required:
 *          - name
 *          - priority
 *      properties:
 *          name:
 *              type: string
 *          priority:
 *              type: number 
 *          images:
 *              type: object
 *              allOf:
 *                  $ref: '#/definitions/images'
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