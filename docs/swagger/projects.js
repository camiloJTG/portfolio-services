/**
 * @swagger
 * /project/listall/:
 *  post:
 *      tags:
 *          - Módulo de proyectos
 *      description: Conseguir todos los proyectos
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - limit
 *                          - page
 *                      properties:
 *                          limit:
 *                              type: number
 *                          page:
 *                              type: number
 *      responses:
 *          200:
 *              description: Retorna el listado de proyectos
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
 *                                      - $ref: '#/definitions/getProjects'
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
 * /project/tools/:
 *  get:
 *      tags:
 *          - Módulo de proyectos
 *      description: Conseguir todas las herramientas
 *      responses:
 *          200:
 *              description: Retorna el listado de proyectos
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
 *                                      - $ref: '#/definitions/getProjects'
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
 * /project/filter/{name}:
 *  get:
 *      tags:
 *          - Módulo de proyectos
 *      description: Conseguir proyectos por herramienta
 *      parameters:
 *          - in: path
 *            name: name
 *            schema:
 *              type: string
 *            required: true
 *            description: Nombre de la herramienta
 *      responses:
 *          200:
 *              description: Retorna el último proyecto registrado
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
 *                                      - $ref: '#/definitions/getProjects'
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
 *
 * /project/{id}:
 *  get:
 *      tags:
 *          - Módulo de proyectos
 *      description: Conseguir un proyecto en específico
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Id del proyecto
 *      responses:
 *          200:
 *              description: Retorna el proyecto en específico
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
 *                                      - $ref: '#/definitions/getProjects'
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
 *  getProjects:
 *      type: object
 *      properties:
 *          allOf:
 *              - $ref '$/definitions/projects'
 *          applications:
 *              type: array
 *              items:
 *                  allOf:
 *                      - $ref: '#/definitions/applications'
 *          projectTool:
 *              type: object
 *              allOf:
 *                  - $ref: '#/definitions/projectTools'
 *  createProject:
 *      type: object
 *      properties:
 *          allOf:
 *              - $ref '$/definitions/projects'
 *          applications:
 *              type: array
 *              items:
 *                  allOf:
 *                      - $ref: '#/definitions/applications'
 *          projectTool:
 *              type: object
 *              allOf:
 *                  - $ref: '#/definitions/projectTools'
 *  projects:
 *      type: object
 *      required:
 *          - title
 *          - description
 *          - priority
 *          - publication
 *          - accountId
 *      properties:
 *          title:
 *              type: string
 *          description:
 *              type: string
 *          priority:
 *              type: number
 *          publication:
 *              type: string
 *              format: datetime
 *          accountId:
 *              type: string
 *  applications:
 *      type: object
 *      required:
 *          - name
 *          - abbreviation
 *          - urlApp
 *          - description
 *      properties:
 *          name:
 *              type: string
 *          abbreviation:
 *              type: string
 *          urlApp:
 *              type: string
 *          description:
 *              type: string
 *  projectTools:
 *      type: object
 *      required:
 *          - toolsId
 *      properties:
 *          toolsId:
 *              type: array
 *              items:
 *                  type: string
 *
 */
