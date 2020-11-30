/**
 * @swagger
 *
 * /languages/:
 *  post:
 *      security:
 *          - bearerAuth: []
 *      tags:
 *          - users module
 *      description: create a new languages with the requested parameters within the body
 *      summary: Create new languages
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - fullName
 *                          - abbreviation
 *                          - domainLevel
 *                          - userId
 *                      properties:
 *                          fullName:
 *                              type: string
 *                          abbreviation:
 *                              type: string
 *                          domainLevel:
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
 *                                      - $ref: '#/definitions/languages'
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
 * /languages/{id}: 
 *  get:
 *      tags:
 *          - users module
 *      description: Get by languages id
 *      summary: Get languages data
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
 *                                      - $ref: '#/definitions/languages'
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
 *      description: Update a languages by id
 *      summary: Update a languages
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          fullName:
 *                              type: string
 *                          abbreviation:
 *                              type: string
 *                          domainLevel:
 *                              type: string
 *                          userId:
 *                              type: string
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            description: Unique languages registration id
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
 *  delete:
 *      tags:
 *          - users module
 *      security:
 *          - bearerAuth: []
 *      description: Delete a languages by id
 *      summary: Delete a languages
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            description: Delete languages registration id
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
 * definitions:
 *  languages:
 *      type: object
 *      required:
 *          - fullName
 *          - abbreviation
 *          - domainLevel
 *          - userId
 *      properties:
 *          fullName:
 *              type: string
 *          abbreviation:
 *              type: string
 *          domainLevel:
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
