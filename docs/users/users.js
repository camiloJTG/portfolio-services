/**
 * @swagger
 *
 * /users/:
 *  post:
 *      security:
 *          - bearerAuth: []
 *      tags:
 *          - users module
 *      description: create a new user with the requested parameters within the body
 *      summary: Create new user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - firstName
 *                          - secondName
 *                          - paternalSurname
 *                          - maternalSurname
 *                          - career
 *                          - phoneNumber
 *                          - aboutMe
 *                      properties:
 *                          firstName:
 *                              type: string
 *                          secondName:
 *                              type: string
 *                          paternalSurname:
 *                              type: string
 *                          maternalSurname:
 *                              type: string
 *                          career:
 *                              type: string
 *                          phoneNumber:
 *                              type: integer
 *                          aboutMe:
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
 *                                      - $ref: '#/definitions/users'
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
 * /users/{id}: 
 *  get:
 *      tags:
 *          - users module
 *      description: Get by user id
 *      summary: Get user data
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
 *                                      - $ref: '#/definitions/users'
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
 *  put:
 *      tags:
 *          - users module
 *      security:
 *          - bearerAuth: []
 *      description: Update a user by id
 *      summary: Update a user
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          firstName:
 *                              type: string
 *                          secondName:
 *                              type: string
 *                          paternalSurname:
 *                              type: string
 *                          maternalSurname:
 *                              type: string
 *                          career:
 *                              type: string
 *                          phoneNumber:
 *                              type: integer
 *                          aboutMe:
 *                              type: string
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
 *                                      - $ref: '#/definitions/users'
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
 *  users:
 *      type: object
 *      required:
 *          - firstName
 *          - secondName
 *          - paternalSurname
 *          - maternalSurname
 *          - career
 *          - phoneNumber
 *          - aboutMe
 *      properties:
 *          firstName:
 *              type: string
 *          secondName:
 *              type: string
 *          paternalSurname:
 *              type: string
 *          maternalSurname:
 *              type: string
 *          career:
 *              type: string
 *          phoneNumber:
 *              type: string
 *          aboutMe:
 *              type: string
 * components:
 *  securitySchemes:
 *      bearerAuth:
 *          type: http
 *          scheme: bearer
 *          bearerFormat: jwt
 */
