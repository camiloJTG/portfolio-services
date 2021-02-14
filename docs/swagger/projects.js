/**
 * @swagger
 * /projects/:
 *  post:
 *      security:
 *          - bearerAuth: []
 *      tags:
 *          - Módulo de proyectos
 *      description: Registrar un nuevo proyecto
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - title
 *                          - description
 *                          - priority
 *                          - publication
 *                          - accountId
 *                          - applications
 *                          - projectTool
 *                      properties:
 *                          title:
 *                              type: string
 *                          description:
 *                              type: string
 *                          priority:
 *                              type: number
 *                          publication:
 *                              type: string
 *                              format: datetime
 *                          accountId:
 *                              type: string
 *                          applications:
 *                              type: array
 *                              items:
 *                                  allOf:
 *                                      - $ref: '#/definitions/applications'
 *                          projectTool:
 *                              type: object
 *                              allOf:
 *                                  - $ref: '#/definitions/projectTools'                
 *      responses:
 *          200:
 *              description: Retorna los datos del proyecto creado
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
 *                                      - $ref: '#/definitions/createProject'
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
 *          - Módulo de proyectos
 *      description: Conseguir todos los proyectos
 *      parameters:
 *          - in: query
 *            name: limit
 *            schema:
 *              type: string
 *            required: true
 *            description: Cantidad de datos ha retornar
 *          - in: query
 *            name: page
 *            schema:
 *              type: string
 *            required: true
 *            description: Página que se desea buscar
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
 * /projects/getLastProject/:
 *  get:
 *      tags:
 *          - Módulo de proyectos
 *      description: Conseguir el último proyecto registrado
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
 * /projects/getSixProject/:
 *  get:
 *      tags:
 *          - Módulo de proyectos
 *      description: Conseguir los últimos seis registros de proyectos
 *      responses:
 *          200:
 *              description: Retorna los últimos seis registros de proyectos
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
 * /projects/getByProjectId/{projectId}:
 *  get:
 *      tags:
 *          - Módulo de proyectos
 *      description: Conseguir un proyecto en específico
 *      parameters:
 *          - in: path
 *            name: projectId
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
 * /projects/getByToolId/{toolId}:
 *  get:
 *      tags:
 *          - Módulo de proyectos
 *      description: Conseguir un proyecto en específico
 *      parameters:
 *          - in: path
 *            name: toolId
 *            schema:
 *              type: string
 *            required: true
 *            description: Id de la herramienta para filtrar
 *          - in: query
 *            name: limit
 *            schema:
 *              type: string
 *            required: true
 *            description: Cantidad de datos ha retornar
 *          - in: query
 *            name: page
 *            schema:
 *              type: string
 *            required: true
 *            description: Página que se desea buscar
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
 * /projects/{projectId}:
 *  put:
 *      security:
 *          - bearerAuth: []
 *      tags:
 *          - Módulo de proyectos
 *      description: Actualizar un proyecto en específico
 *      parameters:
 *          - in: path
 *            name: projectId
 *            schema:
 *              type: string
 *            required: true
 *            description: Id del proyecto
 *      responses:
 *          200:
 *              description: Retorna lso datos del proyecto actualizado
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
 *                                      - $ref: '#/definitions/createProject'
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