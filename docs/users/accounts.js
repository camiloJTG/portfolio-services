/**
 * @swagger
 *
 * /accounts/:
 *  post:
 *      security:
 *          - bearerAuth: []
 *      tags:
 *          - users module
 *      description: create a new account with the requested parameters within the body
 *      summary: Create new account
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - mail
 *                          - password
 *                          - userId
 *                      properties:
 *                          mail:
 *                              type: string
 *                          password:
 *                              type: string
 *                          userId:
 *                              type: string
 *      responses:
 *          201:
 *              description: Correct response that return the object registered
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
 *                                      - $ref: '#/definitions/accounts'
 *          400:
 *              description: Response associated with data entry errors
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
 *              description: Response associated with internal server error
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
 * /accounts/{id}:
 *  put:
 *      tags:
 *          - users module
 *      security:
 *          - bearerAuth: []
 *      description: Update a accounts by id
 *      summary: Update a account
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required: 
 *                          - userId
 *                      properties:
 *                          mail:
 *                              type: string
 *                          password:
 *                              type: string
 *                          userId:
 *                              type: string
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            description: Unique account registration id
 *            schema:
 *              type: string
 *              example: QJJwkvDV2U6DBQ7ePTU8
 *      responses:
 *          200:
 *              description: Correct response that return the object
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
 *                                  type: string
 *          400:
 *              description: Response associated with data entry errors
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
 *              description: Response associated with internal server error
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
 * /accounts/getByUserId/{id}:
 *  get:
 *      get:
 *      tags:
 *          - users module
 *      description: Get by user id
 *      summary: Get account data
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            description: Unique user registration id
 *            schema:
 *              type: string
 *              example: QJJwkvDV2U6DBQ7ePTU8
 *      responses:
 *          200:
 *              description: Correct response that return the object
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
 *                                      - $ref: '#/definitions/accounts'
 *          400:
 *              description: Response associated with data entry errors
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
 *              description: Response associated with internal server error
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
 *      
 * /accounts/login:
 *  post:
 *      tags:
 *          - users module
 *      description: Get a token to access the other endpoint
 *      summary: Get token
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
 *              description: Correct response that return token
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
 *                                  type: string
 *          400:
 *              description: Response associated with data entry errors
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
 *              description: Response associated with internal server error
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
 *  accounts:
 *      type: object
 *      required:
 *          - mail
 *          - password
 *          - userId
 *      properties:
 *          mail:
 *              type: string
 *          password:
 *              type: string
 *          userId:
 *              type: string
 * components:
 *  securitySchemes:
 *      bearerAuth:
 *          type: http
 *          scheme: bearer
 *          bearerFormat: jwt
 */
