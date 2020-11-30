/**
 * @swagger
 *
 * /socialsMedia/:
 *  post:
 *      security:
 *          - bearerAuth: []
 *      tags:
 *          - users module
 *      description: create a new social media with the requested parameters within the body
 *      summary: Create new social media
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - fullName
 *                          - abbreviation
 *                          - url
 *                          - userId
 *                      properties:
 *                          fullName:
 *                              type: string
 *                          abbreviation:
 *                              type: string
 *                          url:
 *                              type: string
 *                          userId:
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
 *                                      - $ref: '#/definitions/socialMedia'
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
 * /socialsMedia/getByUserId/{id}: 
 *  get:
 *      tags:
 *          - users module
 *      description: Get by user id
 *      summary: Get social mmedia data
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
 *                                      - $ref: '#/definitions/socialMedia'
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
 * /socialsMedia/getBySocialMediaAndUser/{socialMediaId}/{userId}: 
 *   get:
 *      tags:
 *          - users module
 *      description: Get by user id
 *      summary: Get social mmedia data
 *      parameters:
 *          - name: socialMediaId
 *            in: path
 *            required: true
 *            description: Unique social media registration id
 *            schema:
 *              type: string
 *              example: QJJwkvDV2U6DBQ7ePTU8
 *          - name: userId
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
 *                                      - $ref: '#/definitions/socialMedia'
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
 * /socialsMedia/{id}:
 *  put:
 *      tags:
 *          - users module
 *      security:
 *          - bearerAuth: []
 *      description: Update a social media by id
 *      summary: Update a social media
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
 *                          url:
 *                              type: string
 *                          userId:
 *                              type: string
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            description: Unique social media registration id
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
 *      description: Delete a social media by id
 *      summary: Delete a social media
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            description: Delete social media registration id
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
 *  socialMedia:
 *      type: object
 *      required:
 *          - fullName
 *          - abbreviation
 *          - url
 *          - userId
 *      properties:
 *          fullName:
 *              type: string
 *          abbreviation:
 *              type: string
 *          url:
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
