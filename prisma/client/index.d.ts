
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Worksite
 * 
 */
export type Worksite = $Result.DefaultSelection<Prisma.$WorksitePayload>
/**
 * Model Checkin
 * 
 */
export type Checkin = $Result.DefaultSelection<Prisma.$CheckinPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model ProjectMember
 * 
 */
export type ProjectMember = $Result.DefaultSelection<Prisma.$ProjectMemberPayload>
/**
 * Model ProjectPhase
 * 
 */
export type ProjectPhase = $Result.DefaultSelection<Prisma.$ProjectPhasePayload>
/**
 * Model EmailWhitelist
 * 
 */
export type EmailWhitelist = $Result.DefaultSelection<Prisma.$EmailWhitelistPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const CheckinType: {
  CHECK_IN: 'CHECK_IN',
  CHECK_OUT: 'CHECK_OUT',
  LEAVE: 'LEAVE',
  ABSENT: 'ABSENT',
  AUTO_CHECKOUT: 'AUTO_CHECKOUT'
};

export type CheckinType = (typeof CheckinType)[keyof typeof CheckinType]


export const LocationType: {
  ONSITE: 'ONSITE',
  OFFSITE: 'OFFSITE'
};

export type LocationType = (typeof LocationType)[keyof typeof LocationType]


export const LeaveType: {
  SICK_LEAVE: 'SICK_LEAVE',
  PERSONAL_LEAVE: 'PERSONAL_LEAVE',
  ANNUAL_LEAVE: 'ANNUAL_LEAVE',
  NONE: 'NONE'
};

export type LeaveType = (typeof LeaveType)[keyof typeof LeaveType]


export const ProjectStatus: {
  PLANNING: 'PLANNING',
  ACTIVE: 'ACTIVE',
  ON_HOLD: 'ON_HOLD',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]


export const TaskStatus: {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const TaskPriority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type TaskPriority = (typeof TaskPriority)[keyof typeof TaskPriority]


export const ProjectRole: {
  PROJECT_MANAGER: 'PROJECT_MANAGER',
  DEVELOPER: 'DEVELOPER',
  DESIGNER: 'DESIGNER',
  TESTER: 'TESTER',
  MEMBER: 'MEMBER'
};

export type ProjectRole = (typeof ProjectRole)[keyof typeof ProjectRole]


export const PhaseStatus: {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  REVIEW: 'REVIEW',
  DELIVERED: 'DELIVERED',
  COMPLETED: 'COMPLETED'
};

export type PhaseStatus = (typeof PhaseStatus)[keyof typeof PhaseStatus]


export const WhitelistStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type WhitelistStatus = (typeof WhitelistStatus)[keyof typeof WhitelistStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type CheckinType = $Enums.CheckinType

export const CheckinType: typeof $Enums.CheckinType

export type LocationType = $Enums.LocationType

export const LocationType: typeof $Enums.LocationType

export type LeaveType = $Enums.LeaveType

export const LeaveType: typeof $Enums.LeaveType

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type TaskPriority = $Enums.TaskPriority

export const TaskPriority: typeof $Enums.TaskPriority

export type ProjectRole = $Enums.ProjectRole

export const ProjectRole: typeof $Enums.ProjectRole

export type PhaseStatus = $Enums.PhaseStatus

export const PhaseStatus: typeof $Enums.PhaseStatus

export type WhitelistStatus = $Enums.WhitelistStatus

export const WhitelistStatus: typeof $Enums.WhitelistStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.worksite`: Exposes CRUD operations for the **Worksite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Worksites
    * const worksites = await prisma.worksite.findMany()
    * ```
    */
  get worksite(): Prisma.WorksiteDelegate<ExtArgs>;

  /**
   * `prisma.checkin`: Exposes CRUD operations for the **Checkin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Checkins
    * const checkins = await prisma.checkin.findMany()
    * ```
    */
  get checkin(): Prisma.CheckinDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs>;

  /**
   * `prisma.projectMember`: Exposes CRUD operations for the **ProjectMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectMembers
    * const projectMembers = await prisma.projectMember.findMany()
    * ```
    */
  get projectMember(): Prisma.ProjectMemberDelegate<ExtArgs>;

  /**
   * `prisma.projectPhase`: Exposes CRUD operations for the **ProjectPhase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectPhases
    * const projectPhases = await prisma.projectPhase.findMany()
    * ```
    */
  get projectPhase(): Prisma.ProjectPhaseDelegate<ExtArgs>;

  /**
   * `prisma.emailWhitelist`: Exposes CRUD operations for the **EmailWhitelist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailWhitelists
    * const emailWhitelists = await prisma.emailWhitelist.findMany()
    * ```
    */
  get emailWhitelist(): Prisma.EmailWhitelistDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Worksite: 'Worksite',
    Checkin: 'Checkin',
    Project: 'Project',
    Task: 'Task',
    ProjectMember: 'ProjectMember',
    ProjectPhase: 'ProjectPhase',
    EmailWhitelist: 'EmailWhitelist'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "worksite" | "checkin" | "project" | "task" | "projectMember" | "projectPhase" | "emailWhitelist"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Worksite: {
        payload: Prisma.$WorksitePayload<ExtArgs>
        fields: Prisma.WorksiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorksiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorksiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksitePayload>
          }
          findFirst: {
            args: Prisma.WorksiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorksiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksitePayload>
          }
          findMany: {
            args: Prisma.WorksiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksitePayload>[]
          }
          create: {
            args: Prisma.WorksiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksitePayload>
          }
          createMany: {
            args: Prisma.WorksiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorksiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksitePayload>[]
          }
          delete: {
            args: Prisma.WorksiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksitePayload>
          }
          update: {
            args: Prisma.WorksiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksitePayload>
          }
          deleteMany: {
            args: Prisma.WorksiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorksiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorksiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksitePayload>
          }
          aggregate: {
            args: Prisma.WorksiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorksite>
          }
          groupBy: {
            args: Prisma.WorksiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorksiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorksiteCountArgs<ExtArgs>
            result: $Utils.Optional<WorksiteCountAggregateOutputType> | number
          }
        }
      }
      Checkin: {
        payload: Prisma.$CheckinPayload<ExtArgs>
        fields: Prisma.CheckinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>
          }
          findFirst: {
            args: Prisma.CheckinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>
          }
          findMany: {
            args: Prisma.CheckinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>[]
          }
          create: {
            args: Prisma.CheckinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>
          }
          createMany: {
            args: Prisma.CheckinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CheckinCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>[]
          }
          delete: {
            args: Prisma.CheckinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>
          }
          update: {
            args: Prisma.CheckinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>
          }
          deleteMany: {
            args: Prisma.CheckinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CheckinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CheckinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>
          }
          aggregate: {
            args: Prisma.CheckinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheckin>
          }
          groupBy: {
            args: Prisma.CheckinGroupByArgs<ExtArgs>
            result: $Utils.Optional<CheckinGroupByOutputType>[]
          }
          count: {
            args: Prisma.CheckinCountArgs<ExtArgs>
            result: $Utils.Optional<CheckinCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      ProjectMember: {
        payload: Prisma.$ProjectMemberPayload<ExtArgs>
        fields: Prisma.ProjectMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          findFirst: {
            args: Prisma.ProjectMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          findMany: {
            args: Prisma.ProjectMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>[]
          }
          create: {
            args: Prisma.ProjectMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          createMany: {
            args: Prisma.ProjectMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>[]
          }
          delete: {
            args: Prisma.ProjectMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          update: {
            args: Prisma.ProjectMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          deleteMany: {
            args: Prisma.ProjectMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          aggregate: {
            args: Prisma.ProjectMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectMember>
          }
          groupBy: {
            args: Prisma.ProjectMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectMemberCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectMemberCountAggregateOutputType> | number
          }
        }
      }
      ProjectPhase: {
        payload: Prisma.$ProjectPhasePayload<ExtArgs>
        fields: Prisma.ProjectPhaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectPhaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectPhaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload>
          }
          findFirst: {
            args: Prisma.ProjectPhaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectPhaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload>
          }
          findMany: {
            args: Prisma.ProjectPhaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload>[]
          }
          create: {
            args: Prisma.ProjectPhaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload>
          }
          createMany: {
            args: Prisma.ProjectPhaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectPhaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload>[]
          }
          delete: {
            args: Prisma.ProjectPhaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload>
          }
          update: {
            args: Prisma.ProjectPhaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload>
          }
          deleteMany: {
            args: Prisma.ProjectPhaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectPhaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectPhaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPhasePayload>
          }
          aggregate: {
            args: Prisma.ProjectPhaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectPhase>
          }
          groupBy: {
            args: Prisma.ProjectPhaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectPhaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectPhaseCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectPhaseCountAggregateOutputType> | number
          }
        }
      }
      EmailWhitelist: {
        payload: Prisma.$EmailWhitelistPayload<ExtArgs>
        fields: Prisma.EmailWhitelistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailWhitelistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailWhitelistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailWhitelistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailWhitelistPayload>
          }
          findFirst: {
            args: Prisma.EmailWhitelistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailWhitelistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailWhitelistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailWhitelistPayload>
          }
          findMany: {
            args: Prisma.EmailWhitelistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailWhitelistPayload>[]
          }
          create: {
            args: Prisma.EmailWhitelistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailWhitelistPayload>
          }
          createMany: {
            args: Prisma.EmailWhitelistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailWhitelistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailWhitelistPayload>[]
          }
          delete: {
            args: Prisma.EmailWhitelistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailWhitelistPayload>
          }
          update: {
            args: Prisma.EmailWhitelistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailWhitelistPayload>
          }
          deleteMany: {
            args: Prisma.EmailWhitelistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailWhitelistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmailWhitelistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailWhitelistPayload>
          }
          aggregate: {
            args: Prisma.EmailWhitelistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailWhitelist>
          }
          groupBy: {
            args: Prisma.EmailWhitelistGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailWhitelistGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailWhitelistCountArgs<ExtArgs>
            result: $Utils.Optional<EmailWhitelistCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tasks: number
    checkins: number
    projectMembers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | UserCountOutputTypeCountTasksArgs
    checkins?: boolean | UserCountOutputTypeCountCheckinsArgs
    projectMembers?: boolean | UserCountOutputTypeCountProjectMembersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCheckinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckinWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMemberWhereInput
  }


  /**
   * Count Type WorksiteCountOutputType
   */

  export type WorksiteCountOutputType = {
    checkins: number
  }

  export type WorksiteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkins?: boolean | WorksiteCountOutputTypeCountCheckinsArgs
  }

  // Custom InputTypes
  /**
   * WorksiteCountOutputType without action
   */
  export type WorksiteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksiteCountOutputType
     */
    select?: WorksiteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorksiteCountOutputType without action
   */
  export type WorksiteCountOutputTypeCountCheckinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckinWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    tasks: number
    members: number
    phases: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | ProjectCountOutputTypeCountTasksArgs
    members?: boolean | ProjectCountOutputTypeCountMembersArgs
    phases?: boolean | ProjectCountOutputTypeCountPhasesArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMemberWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountPhasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectPhaseWhereInput
  }


  /**
   * Count Type ProjectPhaseCountOutputType
   */

  export type ProjectPhaseCountOutputType = {
    tasks: number
  }

  export type ProjectPhaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | ProjectPhaseCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * ProjectPhaseCountOutputType without action
   */
  export type ProjectPhaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhaseCountOutputType
     */
    select?: ProjectPhaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectPhaseCountOutputType without action
   */
  export type ProjectPhaseCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    auth0Id: string | null
    email: string | null
    name: string | null
    picture: string | null
    trelloMemberId: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    auth0Id: string | null
    email: string | null
    name: string | null
    picture: string | null
    trelloMemberId: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    auth0Id: number
    email: number
    name: number
    picture: number
    trelloMemberId: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    auth0Id?: true
    email?: true
    name?: true
    picture?: true
    trelloMemberId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    auth0Id?: true
    email?: true
    name?: true
    picture?: true
    trelloMemberId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    auth0Id?: true
    email?: true
    name?: true
    picture?: true
    trelloMemberId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    auth0Id: string
    email: string
    name: string | null
    picture: string | null
    trelloMemberId: string | null
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auth0Id?: boolean
    email?: boolean
    name?: boolean
    picture?: boolean
    trelloMemberId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tasks?: boolean | User$tasksArgs<ExtArgs>
    checkins?: boolean | User$checkinsArgs<ExtArgs>
    projectMembers?: boolean | User$projectMembersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auth0Id?: boolean
    email?: boolean
    name?: boolean
    picture?: boolean
    trelloMemberId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    auth0Id?: boolean
    email?: boolean
    name?: boolean
    picture?: boolean
    trelloMemberId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | User$tasksArgs<ExtArgs>
    checkins?: boolean | User$checkinsArgs<ExtArgs>
    projectMembers?: boolean | User$projectMembersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      checkins: Prisma.$CheckinPayload<ExtArgs>[]
      projectMembers: Prisma.$ProjectMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      auth0Id: string
      email: string
      name: string | null
      picture: string | null
      trelloMemberId: string | null
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends User$tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    checkins<T extends User$checkinsArgs<ExtArgs> = {}>(args?: Subset<T, User$checkinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "findMany"> | Null>
    projectMembers<T extends User$projectMembersArgs<ExtArgs> = {}>(args?: Subset<T, User$projectMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly auth0Id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly picture: FieldRef<"User", 'String'>
    readonly trelloMemberId: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.tasks
   */
  export type User$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.checkins
   */
  export type User$checkinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    where?: CheckinWhereInput
    orderBy?: CheckinOrderByWithRelationInput | CheckinOrderByWithRelationInput[]
    cursor?: CheckinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckinScalarFieldEnum | CheckinScalarFieldEnum[]
  }

  /**
   * User.projectMembers
   */
  export type User$projectMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    where?: ProjectMemberWhereInput
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    cursor?: ProjectMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Worksite
   */

  export type AggregateWorksite = {
    _count: WorksiteCountAggregateOutputType | null
    _avg: WorksiteAvgAggregateOutputType | null
    _sum: WorksiteSumAggregateOutputType | null
    _min: WorksiteMinAggregateOutputType | null
    _max: WorksiteMaxAggregateOutputType | null
  }

  export type WorksiteAvgAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
    radius: number | null
  }

  export type WorksiteSumAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
    radius: number | null
  }

  export type WorksiteMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    radius: number | null
    checkinStartTime: string | null
    checkinEndTime: string | null
    checkoutStartTime: string | null
    checkoutEndTime: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorksiteMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    radius: number | null
    checkinStartTime: string | null
    checkinEndTime: string | null
    checkoutStartTime: string | null
    checkoutEndTime: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorksiteCountAggregateOutputType = {
    id: number
    name: number
    description: number
    latitude: number
    longitude: number
    radius: number
    checkinStartTime: number
    checkinEndTime: number
    checkoutStartTime: number
    checkoutEndTime: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorksiteAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    radius?: true
  }

  export type WorksiteSumAggregateInputType = {
    latitude?: true
    longitude?: true
    radius?: true
  }

  export type WorksiteMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    latitude?: true
    longitude?: true
    radius?: true
    checkinStartTime?: true
    checkinEndTime?: true
    checkoutStartTime?: true
    checkoutEndTime?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorksiteMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    latitude?: true
    longitude?: true
    radius?: true
    checkinStartTime?: true
    checkinEndTime?: true
    checkoutStartTime?: true
    checkoutEndTime?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorksiteCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    latitude?: true
    longitude?: true
    radius?: true
    checkinStartTime?: true
    checkinEndTime?: true
    checkoutStartTime?: true
    checkoutEndTime?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorksiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Worksite to aggregate.
     */
    where?: WorksiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worksites to fetch.
     */
    orderBy?: WorksiteOrderByWithRelationInput | WorksiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorksiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worksites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worksites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Worksites
    **/
    _count?: true | WorksiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorksiteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorksiteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorksiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorksiteMaxAggregateInputType
  }

  export type GetWorksiteAggregateType<T extends WorksiteAggregateArgs> = {
        [P in keyof T & keyof AggregateWorksite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorksite[P]>
      : GetScalarType<T[P], AggregateWorksite[P]>
  }




  export type WorksiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorksiteWhereInput
    orderBy?: WorksiteOrderByWithAggregationInput | WorksiteOrderByWithAggregationInput[]
    by: WorksiteScalarFieldEnum[] | WorksiteScalarFieldEnum
    having?: WorksiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorksiteCountAggregateInputType | true
    _avg?: WorksiteAvgAggregateInputType
    _sum?: WorksiteSumAggregateInputType
    _min?: WorksiteMinAggregateInputType
    _max?: WorksiteMaxAggregateInputType
  }

  export type WorksiteGroupByOutputType = {
    id: string
    name: string
    description: string | null
    latitude: Decimal
    longitude: Decimal
    radius: number
    checkinStartTime: string | null
    checkinEndTime: string | null
    checkoutStartTime: string | null
    checkoutEndTime: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: WorksiteCountAggregateOutputType | null
    _avg: WorksiteAvgAggregateOutputType | null
    _sum: WorksiteSumAggregateOutputType | null
    _min: WorksiteMinAggregateOutputType | null
    _max: WorksiteMaxAggregateOutputType | null
  }

  type GetWorksiteGroupByPayload<T extends WorksiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorksiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorksiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorksiteGroupByOutputType[P]>
            : GetScalarType<T[P], WorksiteGroupByOutputType[P]>
        }
      >
    >


  export type WorksiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    radius?: boolean
    checkinStartTime?: boolean
    checkinEndTime?: boolean
    checkoutStartTime?: boolean
    checkoutEndTime?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    checkins?: boolean | Worksite$checkinsArgs<ExtArgs>
    _count?: boolean | WorksiteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worksite"]>

  export type WorksiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    radius?: boolean
    checkinStartTime?: boolean
    checkinEndTime?: boolean
    checkoutStartTime?: boolean
    checkoutEndTime?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["worksite"]>

  export type WorksiteSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    radius?: boolean
    checkinStartTime?: boolean
    checkinEndTime?: boolean
    checkoutStartTime?: boolean
    checkoutEndTime?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorksiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkins?: boolean | Worksite$checkinsArgs<ExtArgs>
    _count?: boolean | WorksiteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorksiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorksitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Worksite"
    objects: {
      checkins: Prisma.$CheckinPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      latitude: Prisma.Decimal
      longitude: Prisma.Decimal
      radius: number
      checkinStartTime: string | null
      checkinEndTime: string | null
      checkoutStartTime: string | null
      checkoutEndTime: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["worksite"]>
    composites: {}
  }

  type WorksiteGetPayload<S extends boolean | null | undefined | WorksiteDefaultArgs> = $Result.GetResult<Prisma.$WorksitePayload, S>

  type WorksiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorksiteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorksiteCountAggregateInputType | true
    }

  export interface WorksiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Worksite'], meta: { name: 'Worksite' } }
    /**
     * Find zero or one Worksite that matches the filter.
     * @param {WorksiteFindUniqueArgs} args - Arguments to find a Worksite
     * @example
     * // Get one Worksite
     * const worksite = await prisma.worksite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorksiteFindUniqueArgs>(args: SelectSubset<T, WorksiteFindUniqueArgs<ExtArgs>>): Prisma__WorksiteClient<$Result.GetResult<Prisma.$WorksitePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Worksite that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WorksiteFindUniqueOrThrowArgs} args - Arguments to find a Worksite
     * @example
     * // Get one Worksite
     * const worksite = await prisma.worksite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorksiteFindUniqueOrThrowArgs>(args: SelectSubset<T, WorksiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorksiteClient<$Result.GetResult<Prisma.$WorksitePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Worksite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteFindFirstArgs} args - Arguments to find a Worksite
     * @example
     * // Get one Worksite
     * const worksite = await prisma.worksite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorksiteFindFirstArgs>(args?: SelectSubset<T, WorksiteFindFirstArgs<ExtArgs>>): Prisma__WorksiteClient<$Result.GetResult<Prisma.$WorksitePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Worksite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteFindFirstOrThrowArgs} args - Arguments to find a Worksite
     * @example
     * // Get one Worksite
     * const worksite = await prisma.worksite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorksiteFindFirstOrThrowArgs>(args?: SelectSubset<T, WorksiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorksiteClient<$Result.GetResult<Prisma.$WorksitePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Worksites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Worksites
     * const worksites = await prisma.worksite.findMany()
     * 
     * // Get first 10 Worksites
     * const worksites = await prisma.worksite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const worksiteWithIdOnly = await prisma.worksite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorksiteFindManyArgs>(args?: SelectSubset<T, WorksiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksitePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Worksite.
     * @param {WorksiteCreateArgs} args - Arguments to create a Worksite.
     * @example
     * // Create one Worksite
     * const Worksite = await prisma.worksite.create({
     *   data: {
     *     // ... data to create a Worksite
     *   }
     * })
     * 
     */
    create<T extends WorksiteCreateArgs>(args: SelectSubset<T, WorksiteCreateArgs<ExtArgs>>): Prisma__WorksiteClient<$Result.GetResult<Prisma.$WorksitePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Worksites.
     * @param {WorksiteCreateManyArgs} args - Arguments to create many Worksites.
     * @example
     * // Create many Worksites
     * const worksite = await prisma.worksite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorksiteCreateManyArgs>(args?: SelectSubset<T, WorksiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Worksites and returns the data saved in the database.
     * @param {WorksiteCreateManyAndReturnArgs} args - Arguments to create many Worksites.
     * @example
     * // Create many Worksites
     * const worksite = await prisma.worksite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Worksites and only return the `id`
     * const worksiteWithIdOnly = await prisma.worksite.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorksiteCreateManyAndReturnArgs>(args?: SelectSubset<T, WorksiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksitePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Worksite.
     * @param {WorksiteDeleteArgs} args - Arguments to delete one Worksite.
     * @example
     * // Delete one Worksite
     * const Worksite = await prisma.worksite.delete({
     *   where: {
     *     // ... filter to delete one Worksite
     *   }
     * })
     * 
     */
    delete<T extends WorksiteDeleteArgs>(args: SelectSubset<T, WorksiteDeleteArgs<ExtArgs>>): Prisma__WorksiteClient<$Result.GetResult<Prisma.$WorksitePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Worksite.
     * @param {WorksiteUpdateArgs} args - Arguments to update one Worksite.
     * @example
     * // Update one Worksite
     * const worksite = await prisma.worksite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorksiteUpdateArgs>(args: SelectSubset<T, WorksiteUpdateArgs<ExtArgs>>): Prisma__WorksiteClient<$Result.GetResult<Prisma.$WorksitePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Worksites.
     * @param {WorksiteDeleteManyArgs} args - Arguments to filter Worksites to delete.
     * @example
     * // Delete a few Worksites
     * const { count } = await prisma.worksite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorksiteDeleteManyArgs>(args?: SelectSubset<T, WorksiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Worksites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Worksites
     * const worksite = await prisma.worksite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorksiteUpdateManyArgs>(args: SelectSubset<T, WorksiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Worksite.
     * @param {WorksiteUpsertArgs} args - Arguments to update or create a Worksite.
     * @example
     * // Update or create a Worksite
     * const worksite = await prisma.worksite.upsert({
     *   create: {
     *     // ... data to create a Worksite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Worksite we want to update
     *   }
     * })
     */
    upsert<T extends WorksiteUpsertArgs>(args: SelectSubset<T, WorksiteUpsertArgs<ExtArgs>>): Prisma__WorksiteClient<$Result.GetResult<Prisma.$WorksitePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Worksites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteCountArgs} args - Arguments to filter Worksites to count.
     * @example
     * // Count the number of Worksites
     * const count = await prisma.worksite.count({
     *   where: {
     *     // ... the filter for the Worksites we want to count
     *   }
     * })
    **/
    count<T extends WorksiteCountArgs>(
      args?: Subset<T, WorksiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorksiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Worksite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorksiteAggregateArgs>(args: Subset<T, WorksiteAggregateArgs>): Prisma.PrismaPromise<GetWorksiteAggregateType<T>>

    /**
     * Group by Worksite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksiteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorksiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorksiteGroupByArgs['orderBy'] }
        : { orderBy?: WorksiteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorksiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorksiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Worksite model
   */
  readonly fields: WorksiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Worksite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorksiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    checkins<T extends Worksite$checkinsArgs<ExtArgs> = {}>(args?: Subset<T, Worksite$checkinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Worksite model
   */ 
  interface WorksiteFieldRefs {
    readonly id: FieldRef<"Worksite", 'String'>
    readonly name: FieldRef<"Worksite", 'String'>
    readonly description: FieldRef<"Worksite", 'String'>
    readonly latitude: FieldRef<"Worksite", 'Decimal'>
    readonly longitude: FieldRef<"Worksite", 'Decimal'>
    readonly radius: FieldRef<"Worksite", 'Int'>
    readonly checkinStartTime: FieldRef<"Worksite", 'String'>
    readonly checkinEndTime: FieldRef<"Worksite", 'String'>
    readonly checkoutStartTime: FieldRef<"Worksite", 'String'>
    readonly checkoutEndTime: FieldRef<"Worksite", 'String'>
    readonly isActive: FieldRef<"Worksite", 'Boolean'>
    readonly createdAt: FieldRef<"Worksite", 'DateTime'>
    readonly updatedAt: FieldRef<"Worksite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Worksite findUnique
   */
  export type WorksiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksite
     */
    select?: WorksiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteInclude<ExtArgs> | null
    /**
     * Filter, which Worksite to fetch.
     */
    where: WorksiteWhereUniqueInput
  }

  /**
   * Worksite findUniqueOrThrow
   */
  export type WorksiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksite
     */
    select?: WorksiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteInclude<ExtArgs> | null
    /**
     * Filter, which Worksite to fetch.
     */
    where: WorksiteWhereUniqueInput
  }

  /**
   * Worksite findFirst
   */
  export type WorksiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksite
     */
    select?: WorksiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteInclude<ExtArgs> | null
    /**
     * Filter, which Worksite to fetch.
     */
    where?: WorksiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worksites to fetch.
     */
    orderBy?: WorksiteOrderByWithRelationInput | WorksiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Worksites.
     */
    cursor?: WorksiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worksites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worksites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Worksites.
     */
    distinct?: WorksiteScalarFieldEnum | WorksiteScalarFieldEnum[]
  }

  /**
   * Worksite findFirstOrThrow
   */
  export type WorksiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksite
     */
    select?: WorksiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteInclude<ExtArgs> | null
    /**
     * Filter, which Worksite to fetch.
     */
    where?: WorksiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worksites to fetch.
     */
    orderBy?: WorksiteOrderByWithRelationInput | WorksiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Worksites.
     */
    cursor?: WorksiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worksites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worksites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Worksites.
     */
    distinct?: WorksiteScalarFieldEnum | WorksiteScalarFieldEnum[]
  }

  /**
   * Worksite findMany
   */
  export type WorksiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksite
     */
    select?: WorksiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteInclude<ExtArgs> | null
    /**
     * Filter, which Worksites to fetch.
     */
    where?: WorksiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worksites to fetch.
     */
    orderBy?: WorksiteOrderByWithRelationInput | WorksiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Worksites.
     */
    cursor?: WorksiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worksites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worksites.
     */
    skip?: number
    distinct?: WorksiteScalarFieldEnum | WorksiteScalarFieldEnum[]
  }

  /**
   * Worksite create
   */
  export type WorksiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksite
     */
    select?: WorksiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Worksite.
     */
    data: XOR<WorksiteCreateInput, WorksiteUncheckedCreateInput>
  }

  /**
   * Worksite createMany
   */
  export type WorksiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Worksites.
     */
    data: WorksiteCreateManyInput | WorksiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Worksite createManyAndReturn
   */
  export type WorksiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksite
     */
    select?: WorksiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Worksites.
     */
    data: WorksiteCreateManyInput | WorksiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Worksite update
   */
  export type WorksiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksite
     */
    select?: WorksiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Worksite.
     */
    data: XOR<WorksiteUpdateInput, WorksiteUncheckedUpdateInput>
    /**
     * Choose, which Worksite to update.
     */
    where: WorksiteWhereUniqueInput
  }

  /**
   * Worksite updateMany
   */
  export type WorksiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Worksites.
     */
    data: XOR<WorksiteUpdateManyMutationInput, WorksiteUncheckedUpdateManyInput>
    /**
     * Filter which Worksites to update
     */
    where?: WorksiteWhereInput
  }

  /**
   * Worksite upsert
   */
  export type WorksiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksite
     */
    select?: WorksiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Worksite to update in case it exists.
     */
    where: WorksiteWhereUniqueInput
    /**
     * In case the Worksite found by the `where` argument doesn't exist, create a new Worksite with this data.
     */
    create: XOR<WorksiteCreateInput, WorksiteUncheckedCreateInput>
    /**
     * In case the Worksite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorksiteUpdateInput, WorksiteUncheckedUpdateInput>
  }

  /**
   * Worksite delete
   */
  export type WorksiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksite
     */
    select?: WorksiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteInclude<ExtArgs> | null
    /**
     * Filter which Worksite to delete.
     */
    where: WorksiteWhereUniqueInput
  }

  /**
   * Worksite deleteMany
   */
  export type WorksiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Worksites to delete
     */
    where?: WorksiteWhereInput
  }

  /**
   * Worksite.checkins
   */
  export type Worksite$checkinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    where?: CheckinWhereInput
    orderBy?: CheckinOrderByWithRelationInput | CheckinOrderByWithRelationInput[]
    cursor?: CheckinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckinScalarFieldEnum | CheckinScalarFieldEnum[]
  }

  /**
   * Worksite without action
   */
  export type WorksiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksite
     */
    select?: WorksiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteInclude<ExtArgs> | null
  }


  /**
   * Model Checkin
   */

  export type AggregateCheckin = {
    _count: CheckinCountAggregateOutputType | null
    _avg: CheckinAvgAggregateOutputType | null
    _sum: CheckinSumAggregateOutputType | null
    _min: CheckinMinAggregateOutputType | null
    _max: CheckinMaxAggregateOutputType | null
  }

  export type CheckinAvgAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
    distance: Decimal | null
  }

  export type CheckinSumAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
    distance: Decimal | null
  }

  export type CheckinMinAggregateOutputType = {
    id: string | null
    type: $Enums.CheckinType | null
    location: $Enums.LocationType | null
    leaveType: $Enums.LeaveType | null
    latitude: Decimal | null
    longitude: Decimal | null
    distance: Decimal | null
    photo: string | null
    reason: string | null
    notes: string | null
    isSystemGenerated: boolean | null
    createdAt: Date | null
    userId: string | null
    worksiteId: string | null
  }

  export type CheckinMaxAggregateOutputType = {
    id: string | null
    type: $Enums.CheckinType | null
    location: $Enums.LocationType | null
    leaveType: $Enums.LeaveType | null
    latitude: Decimal | null
    longitude: Decimal | null
    distance: Decimal | null
    photo: string | null
    reason: string | null
    notes: string | null
    isSystemGenerated: boolean | null
    createdAt: Date | null
    userId: string | null
    worksiteId: string | null
  }

  export type CheckinCountAggregateOutputType = {
    id: number
    type: number
    location: number
    leaveType: number
    latitude: number
    longitude: number
    distance: number
    photo: number
    reason: number
    notes: number
    isSystemGenerated: number
    createdAt: number
    userId: number
    worksiteId: number
    _all: number
  }


  export type CheckinAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    distance?: true
  }

  export type CheckinSumAggregateInputType = {
    latitude?: true
    longitude?: true
    distance?: true
  }

  export type CheckinMinAggregateInputType = {
    id?: true
    type?: true
    location?: true
    leaveType?: true
    latitude?: true
    longitude?: true
    distance?: true
    photo?: true
    reason?: true
    notes?: true
    isSystemGenerated?: true
    createdAt?: true
    userId?: true
    worksiteId?: true
  }

  export type CheckinMaxAggregateInputType = {
    id?: true
    type?: true
    location?: true
    leaveType?: true
    latitude?: true
    longitude?: true
    distance?: true
    photo?: true
    reason?: true
    notes?: true
    isSystemGenerated?: true
    createdAt?: true
    userId?: true
    worksiteId?: true
  }

  export type CheckinCountAggregateInputType = {
    id?: true
    type?: true
    location?: true
    leaveType?: true
    latitude?: true
    longitude?: true
    distance?: true
    photo?: true
    reason?: true
    notes?: true
    isSystemGenerated?: true
    createdAt?: true
    userId?: true
    worksiteId?: true
    _all?: true
  }

  export type CheckinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checkin to aggregate.
     */
    where?: CheckinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkins to fetch.
     */
    orderBy?: CheckinOrderByWithRelationInput | CheckinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Checkins
    **/
    _count?: true | CheckinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CheckinAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CheckinSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckinMaxAggregateInputType
  }

  export type GetCheckinAggregateType<T extends CheckinAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckin[P]>
      : GetScalarType<T[P], AggregateCheckin[P]>
  }




  export type CheckinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckinWhereInput
    orderBy?: CheckinOrderByWithAggregationInput | CheckinOrderByWithAggregationInput[]
    by: CheckinScalarFieldEnum[] | CheckinScalarFieldEnum
    having?: CheckinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckinCountAggregateInputType | true
    _avg?: CheckinAvgAggregateInputType
    _sum?: CheckinSumAggregateInputType
    _min?: CheckinMinAggregateInputType
    _max?: CheckinMaxAggregateInputType
  }

  export type CheckinGroupByOutputType = {
    id: string
    type: $Enums.CheckinType
    location: $Enums.LocationType
    leaveType: $Enums.LeaveType
    latitude: Decimal
    longitude: Decimal
    distance: Decimal
    photo: string | null
    reason: string | null
    notes: string | null
    isSystemGenerated: boolean
    createdAt: Date
    userId: string
    worksiteId: string | null
    _count: CheckinCountAggregateOutputType | null
    _avg: CheckinAvgAggregateOutputType | null
    _sum: CheckinSumAggregateOutputType | null
    _min: CheckinMinAggregateOutputType | null
    _max: CheckinMaxAggregateOutputType | null
  }

  type GetCheckinGroupByPayload<T extends CheckinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckinGroupByOutputType[P]>
            : GetScalarType<T[P], CheckinGroupByOutputType[P]>
        }
      >
    >


  export type CheckinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    location?: boolean
    leaveType?: boolean
    latitude?: boolean
    longitude?: boolean
    distance?: boolean
    photo?: boolean
    reason?: boolean
    notes?: boolean
    isSystemGenerated?: boolean
    createdAt?: boolean
    userId?: boolean
    worksiteId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    worksite?: boolean | Checkin$worksiteArgs<ExtArgs>
  }, ExtArgs["result"]["checkin"]>

  export type CheckinSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    location?: boolean
    leaveType?: boolean
    latitude?: boolean
    longitude?: boolean
    distance?: boolean
    photo?: boolean
    reason?: boolean
    notes?: boolean
    isSystemGenerated?: boolean
    createdAt?: boolean
    userId?: boolean
    worksiteId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    worksite?: boolean | Checkin$worksiteArgs<ExtArgs>
  }, ExtArgs["result"]["checkin"]>

  export type CheckinSelectScalar = {
    id?: boolean
    type?: boolean
    location?: boolean
    leaveType?: boolean
    latitude?: boolean
    longitude?: boolean
    distance?: boolean
    photo?: boolean
    reason?: boolean
    notes?: boolean
    isSystemGenerated?: boolean
    createdAt?: boolean
    userId?: boolean
    worksiteId?: boolean
  }

  export type CheckinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    worksite?: boolean | Checkin$worksiteArgs<ExtArgs>
  }
  export type CheckinIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    worksite?: boolean | Checkin$worksiteArgs<ExtArgs>
  }

  export type $CheckinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Checkin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      worksite: Prisma.$WorksitePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.CheckinType
      location: $Enums.LocationType
      leaveType: $Enums.LeaveType
      latitude: Prisma.Decimal
      longitude: Prisma.Decimal
      distance: Prisma.Decimal
      photo: string | null
      reason: string | null
      notes: string | null
      isSystemGenerated: boolean
      createdAt: Date
      userId: string
      worksiteId: string | null
    }, ExtArgs["result"]["checkin"]>
    composites: {}
  }

  type CheckinGetPayload<S extends boolean | null | undefined | CheckinDefaultArgs> = $Result.GetResult<Prisma.$CheckinPayload, S>

  type CheckinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CheckinFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CheckinCountAggregateInputType | true
    }

  export interface CheckinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Checkin'], meta: { name: 'Checkin' } }
    /**
     * Find zero or one Checkin that matches the filter.
     * @param {CheckinFindUniqueArgs} args - Arguments to find a Checkin
     * @example
     * // Get one Checkin
     * const checkin = await prisma.checkin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CheckinFindUniqueArgs>(args: SelectSubset<T, CheckinFindUniqueArgs<ExtArgs>>): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Checkin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CheckinFindUniqueOrThrowArgs} args - Arguments to find a Checkin
     * @example
     * // Get one Checkin
     * const checkin = await prisma.checkin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CheckinFindUniqueOrThrowArgs>(args: SelectSubset<T, CheckinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Checkin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinFindFirstArgs} args - Arguments to find a Checkin
     * @example
     * // Get one Checkin
     * const checkin = await prisma.checkin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CheckinFindFirstArgs>(args?: SelectSubset<T, CheckinFindFirstArgs<ExtArgs>>): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Checkin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinFindFirstOrThrowArgs} args - Arguments to find a Checkin
     * @example
     * // Get one Checkin
     * const checkin = await prisma.checkin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CheckinFindFirstOrThrowArgs>(args?: SelectSubset<T, CheckinFindFirstOrThrowArgs<ExtArgs>>): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Checkins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Checkins
     * const checkins = await prisma.checkin.findMany()
     * 
     * // Get first 10 Checkins
     * const checkins = await prisma.checkin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checkinWithIdOnly = await prisma.checkin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CheckinFindManyArgs>(args?: SelectSubset<T, CheckinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Checkin.
     * @param {CheckinCreateArgs} args - Arguments to create a Checkin.
     * @example
     * // Create one Checkin
     * const Checkin = await prisma.checkin.create({
     *   data: {
     *     // ... data to create a Checkin
     *   }
     * })
     * 
     */
    create<T extends CheckinCreateArgs>(args: SelectSubset<T, CheckinCreateArgs<ExtArgs>>): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Checkins.
     * @param {CheckinCreateManyArgs} args - Arguments to create many Checkins.
     * @example
     * // Create many Checkins
     * const checkin = await prisma.checkin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CheckinCreateManyArgs>(args?: SelectSubset<T, CheckinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Checkins and returns the data saved in the database.
     * @param {CheckinCreateManyAndReturnArgs} args - Arguments to create many Checkins.
     * @example
     * // Create many Checkins
     * const checkin = await prisma.checkin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Checkins and only return the `id`
     * const checkinWithIdOnly = await prisma.checkin.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CheckinCreateManyAndReturnArgs>(args?: SelectSubset<T, CheckinCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Checkin.
     * @param {CheckinDeleteArgs} args - Arguments to delete one Checkin.
     * @example
     * // Delete one Checkin
     * const Checkin = await prisma.checkin.delete({
     *   where: {
     *     // ... filter to delete one Checkin
     *   }
     * })
     * 
     */
    delete<T extends CheckinDeleteArgs>(args: SelectSubset<T, CheckinDeleteArgs<ExtArgs>>): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Checkin.
     * @param {CheckinUpdateArgs} args - Arguments to update one Checkin.
     * @example
     * // Update one Checkin
     * const checkin = await prisma.checkin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CheckinUpdateArgs>(args: SelectSubset<T, CheckinUpdateArgs<ExtArgs>>): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Checkins.
     * @param {CheckinDeleteManyArgs} args - Arguments to filter Checkins to delete.
     * @example
     * // Delete a few Checkins
     * const { count } = await prisma.checkin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CheckinDeleteManyArgs>(args?: SelectSubset<T, CheckinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checkins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Checkins
     * const checkin = await prisma.checkin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CheckinUpdateManyArgs>(args: SelectSubset<T, CheckinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Checkin.
     * @param {CheckinUpsertArgs} args - Arguments to update or create a Checkin.
     * @example
     * // Update or create a Checkin
     * const checkin = await prisma.checkin.upsert({
     *   create: {
     *     // ... data to create a Checkin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Checkin we want to update
     *   }
     * })
     */
    upsert<T extends CheckinUpsertArgs>(args: SelectSubset<T, CheckinUpsertArgs<ExtArgs>>): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Checkins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinCountArgs} args - Arguments to filter Checkins to count.
     * @example
     * // Count the number of Checkins
     * const count = await prisma.checkin.count({
     *   where: {
     *     // ... the filter for the Checkins we want to count
     *   }
     * })
    **/
    count<T extends CheckinCountArgs>(
      args?: Subset<T, CheckinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Checkin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CheckinAggregateArgs>(args: Subset<T, CheckinAggregateArgs>): Prisma.PrismaPromise<GetCheckinAggregateType<T>>

    /**
     * Group by Checkin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CheckinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckinGroupByArgs['orderBy'] }
        : { orderBy?: CheckinGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CheckinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Checkin model
   */
  readonly fields: CheckinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Checkin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    worksite<T extends Checkin$worksiteArgs<ExtArgs> = {}>(args?: Subset<T, Checkin$worksiteArgs<ExtArgs>>): Prisma__WorksiteClient<$Result.GetResult<Prisma.$WorksitePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Checkin model
   */ 
  interface CheckinFieldRefs {
    readonly id: FieldRef<"Checkin", 'String'>
    readonly type: FieldRef<"Checkin", 'CheckinType'>
    readonly location: FieldRef<"Checkin", 'LocationType'>
    readonly leaveType: FieldRef<"Checkin", 'LeaveType'>
    readonly latitude: FieldRef<"Checkin", 'Decimal'>
    readonly longitude: FieldRef<"Checkin", 'Decimal'>
    readonly distance: FieldRef<"Checkin", 'Decimal'>
    readonly photo: FieldRef<"Checkin", 'String'>
    readonly reason: FieldRef<"Checkin", 'String'>
    readonly notes: FieldRef<"Checkin", 'String'>
    readonly isSystemGenerated: FieldRef<"Checkin", 'Boolean'>
    readonly createdAt: FieldRef<"Checkin", 'DateTime'>
    readonly userId: FieldRef<"Checkin", 'String'>
    readonly worksiteId: FieldRef<"Checkin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Checkin findUnique
   */
  export type CheckinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * Filter, which Checkin to fetch.
     */
    where: CheckinWhereUniqueInput
  }

  /**
   * Checkin findUniqueOrThrow
   */
  export type CheckinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * Filter, which Checkin to fetch.
     */
    where: CheckinWhereUniqueInput
  }

  /**
   * Checkin findFirst
   */
  export type CheckinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * Filter, which Checkin to fetch.
     */
    where?: CheckinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkins to fetch.
     */
    orderBy?: CheckinOrderByWithRelationInput | CheckinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checkins.
     */
    cursor?: CheckinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checkins.
     */
    distinct?: CheckinScalarFieldEnum | CheckinScalarFieldEnum[]
  }

  /**
   * Checkin findFirstOrThrow
   */
  export type CheckinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * Filter, which Checkin to fetch.
     */
    where?: CheckinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkins to fetch.
     */
    orderBy?: CheckinOrderByWithRelationInput | CheckinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checkins.
     */
    cursor?: CheckinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checkins.
     */
    distinct?: CheckinScalarFieldEnum | CheckinScalarFieldEnum[]
  }

  /**
   * Checkin findMany
   */
  export type CheckinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * Filter, which Checkins to fetch.
     */
    where?: CheckinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkins to fetch.
     */
    orderBy?: CheckinOrderByWithRelationInput | CheckinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Checkins.
     */
    cursor?: CheckinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkins.
     */
    skip?: number
    distinct?: CheckinScalarFieldEnum | CheckinScalarFieldEnum[]
  }

  /**
   * Checkin create
   */
  export type CheckinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * The data needed to create a Checkin.
     */
    data: XOR<CheckinCreateInput, CheckinUncheckedCreateInput>
  }

  /**
   * Checkin createMany
   */
  export type CheckinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Checkins.
     */
    data: CheckinCreateManyInput | CheckinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Checkin createManyAndReturn
   */
  export type CheckinCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Checkins.
     */
    data: CheckinCreateManyInput | CheckinCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Checkin update
   */
  export type CheckinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * The data needed to update a Checkin.
     */
    data: XOR<CheckinUpdateInput, CheckinUncheckedUpdateInput>
    /**
     * Choose, which Checkin to update.
     */
    where: CheckinWhereUniqueInput
  }

  /**
   * Checkin updateMany
   */
  export type CheckinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Checkins.
     */
    data: XOR<CheckinUpdateManyMutationInput, CheckinUncheckedUpdateManyInput>
    /**
     * Filter which Checkins to update
     */
    where?: CheckinWhereInput
  }

  /**
   * Checkin upsert
   */
  export type CheckinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * The filter to search for the Checkin to update in case it exists.
     */
    where: CheckinWhereUniqueInput
    /**
     * In case the Checkin found by the `where` argument doesn't exist, create a new Checkin with this data.
     */
    create: XOR<CheckinCreateInput, CheckinUncheckedCreateInput>
    /**
     * In case the Checkin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckinUpdateInput, CheckinUncheckedUpdateInput>
  }

  /**
   * Checkin delete
   */
  export type CheckinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * Filter which Checkin to delete.
     */
    where: CheckinWhereUniqueInput
  }

  /**
   * Checkin deleteMany
   */
  export type CheckinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checkins to delete
     */
    where?: CheckinWhereInput
  }

  /**
   * Checkin.worksite
   */
  export type Checkin$worksiteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksite
     */
    select?: WorksiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksiteInclude<ExtArgs> | null
    where?: WorksiteWhereInput
  }

  /**
   * Checkin without action
   */
  export type CheckinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    key: string | null
    trelloBoardId: string | null
    trelloTag: string | null
    status: $Enums.ProjectStatus | null
    startDate: Date | null
    dueDate: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    key: string | null
    trelloBoardId: string | null
    trelloTag: string | null
    status: $Enums.ProjectStatus | null
    startDate: Date | null
    dueDate: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    key: number
    trelloBoardId: number
    trelloTag: number
    status: number
    startDate: number
    dueDate: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    key?: true
    trelloBoardId?: true
    trelloTag?: true
    status?: true
    startDate?: true
    dueDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    key?: true
    trelloBoardId?: true
    trelloTag?: true
    status?: true
    startDate?: true
    dueDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    key?: true
    trelloBoardId?: true
    trelloTag?: true
    status?: true
    startDate?: true
    dueDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    description: string | null
    key: string
    trelloBoardId: string
    trelloTag: string
    status: $Enums.ProjectStatus
    startDate: Date | null
    dueDate: Date | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    key?: boolean
    trelloBoardId?: boolean
    trelloTag?: boolean
    status?: boolean
    startDate?: boolean
    dueDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    members?: boolean | Project$membersArgs<ExtArgs>
    phases?: boolean | Project$phasesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    key?: boolean
    trelloBoardId?: boolean
    trelloTag?: boolean
    status?: boolean
    startDate?: boolean
    dueDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    key?: boolean
    trelloBoardId?: boolean
    trelloTag?: boolean
    status?: boolean
    startDate?: boolean
    dueDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    members?: boolean | Project$membersArgs<ExtArgs>
    phases?: boolean | Project$phasesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      members: Prisma.$ProjectMemberPayload<ExtArgs>[]
      phases: Prisma.$ProjectPhasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      key: string
      trelloBoardId: string
      trelloTag: string
      status: $Enums.ProjectStatus
      startDate: Date | null
      dueDate: Date | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends Project$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Project$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    members<T extends Project$membersArgs<ExtArgs> = {}>(args?: Subset<T, Project$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findMany"> | Null>
    phases<T extends Project$phasesArgs<ExtArgs> = {}>(args?: Subset<T, Project$phasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly key: FieldRef<"Project", 'String'>
    readonly trelloBoardId: FieldRef<"Project", 'String'>
    readonly trelloTag: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'ProjectStatus'>
    readonly startDate: FieldRef<"Project", 'DateTime'>
    readonly dueDate: FieldRef<"Project", 'DateTime'>
    readonly isActive: FieldRef<"Project", 'Boolean'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
  }

  /**
   * Project.tasks
   */
  export type Project$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Project.members
   */
  export type Project$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    where?: ProjectMemberWhereInput
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    cursor?: ProjectMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * Project.phases
   */
  export type Project$phasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    where?: ProjectPhaseWhereInput
    orderBy?: ProjectPhaseOrderByWithRelationInput | ProjectPhaseOrderByWithRelationInput[]
    cursor?: ProjectPhaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectPhaseScalarFieldEnum | ProjectPhaseScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    trelloCardId: string | null
    title: string | null
    description: string | null
    status: $Enums.TaskStatus | null
    priority: $Enums.TaskPriority | null
    assignedUserId: string | null
    worksiteId: string | null
    projectId: string | null
    phaseId: string | null
    startDate: Date | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    trelloCardId: string | null
    title: string | null
    description: string | null
    status: $Enums.TaskStatus | null
    priority: $Enums.TaskPriority | null
    assignedUserId: string | null
    worksiteId: string | null
    projectId: string | null
    phaseId: string | null
    startDate: Date | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    trelloCardId: number
    title: number
    description: number
    status: number
    priority: number
    assignedUserId: number
    worksiteId: number
    projectId: number
    phaseId: number
    startDate: number
    dueDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    trelloCardId?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    assignedUserId?: true
    worksiteId?: true
    projectId?: true
    phaseId?: true
    startDate?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    trelloCardId?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    assignedUserId?: true
    worksiteId?: true
    projectId?: true
    phaseId?: true
    startDate?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    trelloCardId?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    assignedUserId?: true
    worksiteId?: true
    projectId?: true
    phaseId?: true
    startDate?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    trelloCardId: string
    title: string
    description: string | null
    status: $Enums.TaskStatus
    priority: $Enums.TaskPriority
    assignedUserId: string | null
    worksiteId: string | null
    projectId: string | null
    phaseId: string | null
    startDate: Date | null
    dueDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trelloCardId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    assignedUserId?: boolean
    worksiteId?: boolean
    projectId?: boolean
    phaseId?: boolean
    startDate?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignedUser?: boolean | Task$assignedUserArgs<ExtArgs>
    project?: boolean | Task$projectArgs<ExtArgs>
    phase?: boolean | Task$phaseArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trelloCardId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    assignedUserId?: boolean
    worksiteId?: boolean
    projectId?: boolean
    phaseId?: boolean
    startDate?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignedUser?: boolean | Task$assignedUserArgs<ExtArgs>
    project?: boolean | Task$projectArgs<ExtArgs>
    phase?: boolean | Task$phaseArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    trelloCardId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    assignedUserId?: boolean
    worksiteId?: boolean
    projectId?: boolean
    phaseId?: boolean
    startDate?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedUser?: boolean | Task$assignedUserArgs<ExtArgs>
    project?: boolean | Task$projectArgs<ExtArgs>
    phase?: boolean | Task$phaseArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedUser?: boolean | Task$assignedUserArgs<ExtArgs>
    project?: boolean | Task$projectArgs<ExtArgs>
    phase?: boolean | Task$phaseArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      assignedUser: Prisma.$UserPayload<ExtArgs> | null
      project: Prisma.$ProjectPayload<ExtArgs> | null
      phase: Prisma.$ProjectPhasePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      trelloCardId: string
      title: string
      description: string | null
      status: $Enums.TaskStatus
      priority: $Enums.TaskPriority
      assignedUserId: string | null
      worksiteId: string | null
      projectId: string | null
      phaseId: string | null
      startDate: Date | null
      dueDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignedUser<T extends Task$assignedUserArgs<ExtArgs> = {}>(args?: Subset<T, Task$assignedUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    project<T extends Task$projectArgs<ExtArgs> = {}>(args?: Subset<T, Task$projectArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    phase<T extends Task$phaseArgs<ExtArgs> = {}>(args?: Subset<T, Task$phaseArgs<ExtArgs>>): Prisma__ProjectPhaseClient<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */ 
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly trelloCardId: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly status: FieldRef<"Task", 'TaskStatus'>
    readonly priority: FieldRef<"Task", 'TaskPriority'>
    readonly assignedUserId: FieldRef<"Task", 'String'>
    readonly worksiteId: FieldRef<"Task", 'String'>
    readonly projectId: FieldRef<"Task", 'String'>
    readonly phaseId: FieldRef<"Task", 'String'>
    readonly startDate: FieldRef<"Task", 'DateTime'>
    readonly dueDate: FieldRef<"Task", 'DateTime'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
  }

  /**
   * Task.assignedUser
   */
  export type Task$assignedUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Task.project
   */
  export type Task$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
  }

  /**
   * Task.phase
   */
  export type Task$phaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    where?: ProjectPhaseWhereInput
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model ProjectMember
   */

  export type AggregateProjectMember = {
    _count: ProjectMemberCountAggregateOutputType | null
    _min: ProjectMemberMinAggregateOutputType | null
    _max: ProjectMemberMaxAggregateOutputType | null
  }

  export type ProjectMemberMinAggregateOutputType = {
    id: string | null
    role: $Enums.ProjectRole | null
    joinedAt: Date | null
    leftAt: Date | null
    isActive: boolean | null
    userId: string | null
    projectId: string | null
  }

  export type ProjectMemberMaxAggregateOutputType = {
    id: string | null
    role: $Enums.ProjectRole | null
    joinedAt: Date | null
    leftAt: Date | null
    isActive: boolean | null
    userId: string | null
    projectId: string | null
  }

  export type ProjectMemberCountAggregateOutputType = {
    id: number
    role: number
    joinedAt: number
    leftAt: number
    isActive: number
    userId: number
    projectId: number
    _all: number
  }


  export type ProjectMemberMinAggregateInputType = {
    id?: true
    role?: true
    joinedAt?: true
    leftAt?: true
    isActive?: true
    userId?: true
    projectId?: true
  }

  export type ProjectMemberMaxAggregateInputType = {
    id?: true
    role?: true
    joinedAt?: true
    leftAt?: true
    isActive?: true
    userId?: true
    projectId?: true
  }

  export type ProjectMemberCountAggregateInputType = {
    id?: true
    role?: true
    joinedAt?: true
    leftAt?: true
    isActive?: true
    userId?: true
    projectId?: true
    _all?: true
  }

  export type ProjectMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMember to aggregate.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectMembers
    **/
    _count?: true | ProjectMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMemberMaxAggregateInputType
  }

  export type GetProjectMemberAggregateType<T extends ProjectMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectMember[P]>
      : GetScalarType<T[P], AggregateProjectMember[P]>
  }




  export type ProjectMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMemberWhereInput
    orderBy?: ProjectMemberOrderByWithAggregationInput | ProjectMemberOrderByWithAggregationInput[]
    by: ProjectMemberScalarFieldEnum[] | ProjectMemberScalarFieldEnum
    having?: ProjectMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectMemberCountAggregateInputType | true
    _min?: ProjectMemberMinAggregateInputType
    _max?: ProjectMemberMaxAggregateInputType
  }

  export type ProjectMemberGroupByOutputType = {
    id: string
    role: $Enums.ProjectRole
    joinedAt: Date
    leftAt: Date | null
    isActive: boolean
    userId: string
    projectId: string
    _count: ProjectMemberCountAggregateOutputType | null
    _min: ProjectMemberMinAggregateOutputType | null
    _max: ProjectMemberMaxAggregateOutputType | null
  }

  type GetProjectMemberGroupByPayload<T extends ProjectMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectMemberGroupByOutputType[P]>
        }
      >
    >


  export type ProjectMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    isActive?: boolean
    userId?: boolean
    projectId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMember"]>

  export type ProjectMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    isActive?: boolean
    userId?: boolean
    projectId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMember"]>

  export type ProjectMemberSelectScalar = {
    id?: boolean
    role?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    isActive?: boolean
    userId?: boolean
    projectId?: boolean
  }

  export type ProjectMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectMember"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: $Enums.ProjectRole
      joinedAt: Date
      leftAt: Date | null
      isActive: boolean
      userId: string
      projectId: string
    }, ExtArgs["result"]["projectMember"]>
    composites: {}
  }

  type ProjectMemberGetPayload<S extends boolean | null | undefined | ProjectMemberDefaultArgs> = $Result.GetResult<Prisma.$ProjectMemberPayload, S>

  type ProjectMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectMemberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectMemberCountAggregateInputType | true
    }

  export interface ProjectMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectMember'], meta: { name: 'ProjectMember' } }
    /**
     * Find zero or one ProjectMember that matches the filter.
     * @param {ProjectMemberFindUniqueArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectMemberFindUniqueArgs>(args: SelectSubset<T, ProjectMemberFindUniqueArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProjectMember that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectMemberFindUniqueOrThrowArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProjectMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberFindFirstArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectMemberFindFirstArgs>(args?: SelectSubset<T, ProjectMemberFindFirstArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProjectMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberFindFirstOrThrowArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProjectMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectMembers
     * const projectMembers = await prisma.projectMember.findMany()
     * 
     * // Get first 10 ProjectMembers
     * const projectMembers = await prisma.projectMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectMemberWithIdOnly = await prisma.projectMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectMemberFindManyArgs>(args?: SelectSubset<T, ProjectMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProjectMember.
     * @param {ProjectMemberCreateArgs} args - Arguments to create a ProjectMember.
     * @example
     * // Create one ProjectMember
     * const ProjectMember = await prisma.projectMember.create({
     *   data: {
     *     // ... data to create a ProjectMember
     *   }
     * })
     * 
     */
    create<T extends ProjectMemberCreateArgs>(args: SelectSubset<T, ProjectMemberCreateArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProjectMembers.
     * @param {ProjectMemberCreateManyArgs} args - Arguments to create many ProjectMembers.
     * @example
     * // Create many ProjectMembers
     * const projectMember = await prisma.projectMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectMemberCreateManyArgs>(args?: SelectSubset<T, ProjectMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectMembers and returns the data saved in the database.
     * @param {ProjectMemberCreateManyAndReturnArgs} args - Arguments to create many ProjectMembers.
     * @example
     * // Create many ProjectMembers
     * const projectMember = await prisma.projectMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectMembers and only return the `id`
     * const projectMemberWithIdOnly = await prisma.projectMember.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProjectMember.
     * @param {ProjectMemberDeleteArgs} args - Arguments to delete one ProjectMember.
     * @example
     * // Delete one ProjectMember
     * const ProjectMember = await prisma.projectMember.delete({
     *   where: {
     *     // ... filter to delete one ProjectMember
     *   }
     * })
     * 
     */
    delete<T extends ProjectMemberDeleteArgs>(args: SelectSubset<T, ProjectMemberDeleteArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProjectMember.
     * @param {ProjectMemberUpdateArgs} args - Arguments to update one ProjectMember.
     * @example
     * // Update one ProjectMember
     * const projectMember = await prisma.projectMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectMemberUpdateArgs>(args: SelectSubset<T, ProjectMemberUpdateArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProjectMembers.
     * @param {ProjectMemberDeleteManyArgs} args - Arguments to filter ProjectMembers to delete.
     * @example
     * // Delete a few ProjectMembers
     * const { count } = await prisma.projectMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectMemberDeleteManyArgs>(args?: SelectSubset<T, ProjectMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectMembers
     * const projectMember = await prisma.projectMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectMemberUpdateManyArgs>(args: SelectSubset<T, ProjectMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectMember.
     * @param {ProjectMemberUpsertArgs} args - Arguments to update or create a ProjectMember.
     * @example
     * // Update or create a ProjectMember
     * const projectMember = await prisma.projectMember.upsert({
     *   create: {
     *     // ... data to create a ProjectMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectMember we want to update
     *   }
     * })
     */
    upsert<T extends ProjectMemberUpsertArgs>(args: SelectSubset<T, ProjectMemberUpsertArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProjectMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberCountArgs} args - Arguments to filter ProjectMembers to count.
     * @example
     * // Count the number of ProjectMembers
     * const count = await prisma.projectMember.count({
     *   where: {
     *     // ... the filter for the ProjectMembers we want to count
     *   }
     * })
    **/
    count<T extends ProjectMemberCountArgs>(
      args?: Subset<T, ProjectMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectMemberAggregateArgs>(args: Subset<T, ProjectMemberAggregateArgs>): Prisma.PrismaPromise<GetProjectMemberAggregateType<T>>

    /**
     * Group by ProjectMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectMemberGroupByArgs['orderBy'] }
        : { orderBy?: ProjectMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectMember model
   */
  readonly fields: ProjectMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectMember model
   */ 
  interface ProjectMemberFieldRefs {
    readonly id: FieldRef<"ProjectMember", 'String'>
    readonly role: FieldRef<"ProjectMember", 'ProjectRole'>
    readonly joinedAt: FieldRef<"ProjectMember", 'DateTime'>
    readonly leftAt: FieldRef<"ProjectMember", 'DateTime'>
    readonly isActive: FieldRef<"ProjectMember", 'Boolean'>
    readonly userId: FieldRef<"ProjectMember", 'String'>
    readonly projectId: FieldRef<"ProjectMember", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectMember findUnique
   */
  export type ProjectMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where: ProjectMemberWhereUniqueInput
  }

  /**
   * ProjectMember findUniqueOrThrow
   */
  export type ProjectMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where: ProjectMemberWhereUniqueInput
  }

  /**
   * ProjectMember findFirst
   */
  export type ProjectMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMembers.
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMembers.
     */
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * ProjectMember findFirstOrThrow
   */
  export type ProjectMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMembers.
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMembers.
     */
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * ProjectMember findMany
   */
  export type ProjectMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMembers to fetch.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectMembers.
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * ProjectMember create
   */
  export type ProjectMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectMember.
     */
    data: XOR<ProjectMemberCreateInput, ProjectMemberUncheckedCreateInput>
  }

  /**
   * ProjectMember createMany
   */
  export type ProjectMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectMembers.
     */
    data: ProjectMemberCreateManyInput | ProjectMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectMember createManyAndReturn
   */
  export type ProjectMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProjectMembers.
     */
    data: ProjectMemberCreateManyInput | ProjectMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectMember update
   */
  export type ProjectMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectMember.
     */
    data: XOR<ProjectMemberUpdateInput, ProjectMemberUncheckedUpdateInput>
    /**
     * Choose, which ProjectMember to update.
     */
    where: ProjectMemberWhereUniqueInput
  }

  /**
   * ProjectMember updateMany
   */
  export type ProjectMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectMembers.
     */
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyInput>
    /**
     * Filter which ProjectMembers to update
     */
    where?: ProjectMemberWhereInput
  }

  /**
   * ProjectMember upsert
   */
  export type ProjectMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectMember to update in case it exists.
     */
    where: ProjectMemberWhereUniqueInput
    /**
     * In case the ProjectMember found by the `where` argument doesn't exist, create a new ProjectMember with this data.
     */
    create: XOR<ProjectMemberCreateInput, ProjectMemberUncheckedCreateInput>
    /**
     * In case the ProjectMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectMemberUpdateInput, ProjectMemberUncheckedUpdateInput>
  }

  /**
   * ProjectMember delete
   */
  export type ProjectMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter which ProjectMember to delete.
     */
    where: ProjectMemberWhereUniqueInput
  }

  /**
   * ProjectMember deleteMany
   */
  export type ProjectMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMembers to delete
     */
    where?: ProjectMemberWhereInput
  }

  /**
   * ProjectMember without action
   */
  export type ProjectMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
  }


  /**
   * Model ProjectPhase
   */

  export type AggregateProjectPhase = {
    _count: ProjectPhaseCountAggregateOutputType | null
    _avg: ProjectPhaseAvgAggregateOutputType | null
    _sum: ProjectPhaseSumAggregateOutputType | null
    _min: ProjectPhaseMinAggregateOutputType | null
    _max: ProjectPhaseMaxAggregateOutputType | null
  }

  export type ProjectPhaseAvgAggregateOutputType = {
    orderIndex: number | null
  }

  export type ProjectPhaseSumAggregateOutputType = {
    orderIndex: number | null
  }

  export type ProjectPhaseMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    orderIndex: number | null
    status: $Enums.PhaseStatus | null
    startDate: Date | null
    dueDate: Date | null
    deliverDate: Date | null
    trelloListId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
  }

  export type ProjectPhaseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    orderIndex: number | null
    status: $Enums.PhaseStatus | null
    startDate: Date | null
    dueDate: Date | null
    deliverDate: Date | null
    trelloListId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
  }

  export type ProjectPhaseCountAggregateOutputType = {
    id: number
    name: number
    description: number
    orderIndex: number
    status: number
    startDate: number
    dueDate: number
    deliverDate: number
    trelloListId: number
    createdAt: number
    updatedAt: number
    projectId: number
    _all: number
  }


  export type ProjectPhaseAvgAggregateInputType = {
    orderIndex?: true
  }

  export type ProjectPhaseSumAggregateInputType = {
    orderIndex?: true
  }

  export type ProjectPhaseMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    orderIndex?: true
    status?: true
    startDate?: true
    dueDate?: true
    deliverDate?: true
    trelloListId?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
  }

  export type ProjectPhaseMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    orderIndex?: true
    status?: true
    startDate?: true
    dueDate?: true
    deliverDate?: true
    trelloListId?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
  }

  export type ProjectPhaseCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    orderIndex?: true
    status?: true
    startDate?: true
    dueDate?: true
    deliverDate?: true
    trelloListId?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    _all?: true
  }

  export type ProjectPhaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectPhase to aggregate.
     */
    where?: ProjectPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectPhases to fetch.
     */
    orderBy?: ProjectPhaseOrderByWithRelationInput | ProjectPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectPhases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectPhases
    **/
    _count?: true | ProjectPhaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectPhaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectPhaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectPhaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectPhaseMaxAggregateInputType
  }

  export type GetProjectPhaseAggregateType<T extends ProjectPhaseAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectPhase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectPhase[P]>
      : GetScalarType<T[P], AggregateProjectPhase[P]>
  }




  export type ProjectPhaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectPhaseWhereInput
    orderBy?: ProjectPhaseOrderByWithAggregationInput | ProjectPhaseOrderByWithAggregationInput[]
    by: ProjectPhaseScalarFieldEnum[] | ProjectPhaseScalarFieldEnum
    having?: ProjectPhaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectPhaseCountAggregateInputType | true
    _avg?: ProjectPhaseAvgAggregateInputType
    _sum?: ProjectPhaseSumAggregateInputType
    _min?: ProjectPhaseMinAggregateInputType
    _max?: ProjectPhaseMaxAggregateInputType
  }

  export type ProjectPhaseGroupByOutputType = {
    id: string
    name: string
    description: string | null
    orderIndex: number
    status: $Enums.PhaseStatus
    startDate: Date | null
    dueDate: Date | null
    deliverDate: Date | null
    trelloListId: string | null
    createdAt: Date
    updatedAt: Date
    projectId: string
    _count: ProjectPhaseCountAggregateOutputType | null
    _avg: ProjectPhaseAvgAggregateOutputType | null
    _sum: ProjectPhaseSumAggregateOutputType | null
    _min: ProjectPhaseMinAggregateOutputType | null
    _max: ProjectPhaseMaxAggregateOutputType | null
  }

  type GetProjectPhaseGroupByPayload<T extends ProjectPhaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectPhaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectPhaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectPhaseGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectPhaseGroupByOutputType[P]>
        }
      >
    >


  export type ProjectPhaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    orderIndex?: boolean
    status?: boolean
    startDate?: boolean
    dueDate?: boolean
    deliverDate?: boolean
    trelloListId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    tasks?: boolean | ProjectPhase$tasksArgs<ExtArgs>
    _count?: boolean | ProjectPhaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectPhase"]>

  export type ProjectPhaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    orderIndex?: boolean
    status?: boolean
    startDate?: boolean
    dueDate?: boolean
    deliverDate?: boolean
    trelloListId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectPhase"]>

  export type ProjectPhaseSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    orderIndex?: boolean
    status?: boolean
    startDate?: boolean
    dueDate?: boolean
    deliverDate?: boolean
    trelloListId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
  }

  export type ProjectPhaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    tasks?: boolean | ProjectPhase$tasksArgs<ExtArgs>
    _count?: boolean | ProjectPhaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectPhaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectPhasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectPhase"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      orderIndex: number
      status: $Enums.PhaseStatus
      startDate: Date | null
      dueDate: Date | null
      deliverDate: Date | null
      trelloListId: string | null
      createdAt: Date
      updatedAt: Date
      projectId: string
    }, ExtArgs["result"]["projectPhase"]>
    composites: {}
  }

  type ProjectPhaseGetPayload<S extends boolean | null | undefined | ProjectPhaseDefaultArgs> = $Result.GetResult<Prisma.$ProjectPhasePayload, S>

  type ProjectPhaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectPhaseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectPhaseCountAggregateInputType | true
    }

  export interface ProjectPhaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectPhase'], meta: { name: 'ProjectPhase' } }
    /**
     * Find zero or one ProjectPhase that matches the filter.
     * @param {ProjectPhaseFindUniqueArgs} args - Arguments to find a ProjectPhase
     * @example
     * // Get one ProjectPhase
     * const projectPhase = await prisma.projectPhase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectPhaseFindUniqueArgs>(args: SelectSubset<T, ProjectPhaseFindUniqueArgs<ExtArgs>>): Prisma__ProjectPhaseClient<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProjectPhase that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectPhaseFindUniqueOrThrowArgs} args - Arguments to find a ProjectPhase
     * @example
     * // Get one ProjectPhase
     * const projectPhase = await prisma.projectPhase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectPhaseFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectPhaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectPhaseClient<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProjectPhase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPhaseFindFirstArgs} args - Arguments to find a ProjectPhase
     * @example
     * // Get one ProjectPhase
     * const projectPhase = await prisma.projectPhase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectPhaseFindFirstArgs>(args?: SelectSubset<T, ProjectPhaseFindFirstArgs<ExtArgs>>): Prisma__ProjectPhaseClient<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProjectPhase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPhaseFindFirstOrThrowArgs} args - Arguments to find a ProjectPhase
     * @example
     * // Get one ProjectPhase
     * const projectPhase = await prisma.projectPhase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectPhaseFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectPhaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectPhaseClient<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProjectPhases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPhaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectPhases
     * const projectPhases = await prisma.projectPhase.findMany()
     * 
     * // Get first 10 ProjectPhases
     * const projectPhases = await prisma.projectPhase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectPhaseWithIdOnly = await prisma.projectPhase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectPhaseFindManyArgs>(args?: SelectSubset<T, ProjectPhaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProjectPhase.
     * @param {ProjectPhaseCreateArgs} args - Arguments to create a ProjectPhase.
     * @example
     * // Create one ProjectPhase
     * const ProjectPhase = await prisma.projectPhase.create({
     *   data: {
     *     // ... data to create a ProjectPhase
     *   }
     * })
     * 
     */
    create<T extends ProjectPhaseCreateArgs>(args: SelectSubset<T, ProjectPhaseCreateArgs<ExtArgs>>): Prisma__ProjectPhaseClient<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProjectPhases.
     * @param {ProjectPhaseCreateManyArgs} args - Arguments to create many ProjectPhases.
     * @example
     * // Create many ProjectPhases
     * const projectPhase = await prisma.projectPhase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectPhaseCreateManyArgs>(args?: SelectSubset<T, ProjectPhaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectPhases and returns the data saved in the database.
     * @param {ProjectPhaseCreateManyAndReturnArgs} args - Arguments to create many ProjectPhases.
     * @example
     * // Create many ProjectPhases
     * const projectPhase = await prisma.projectPhase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectPhases and only return the `id`
     * const projectPhaseWithIdOnly = await prisma.projectPhase.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectPhaseCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectPhaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProjectPhase.
     * @param {ProjectPhaseDeleteArgs} args - Arguments to delete one ProjectPhase.
     * @example
     * // Delete one ProjectPhase
     * const ProjectPhase = await prisma.projectPhase.delete({
     *   where: {
     *     // ... filter to delete one ProjectPhase
     *   }
     * })
     * 
     */
    delete<T extends ProjectPhaseDeleteArgs>(args: SelectSubset<T, ProjectPhaseDeleteArgs<ExtArgs>>): Prisma__ProjectPhaseClient<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProjectPhase.
     * @param {ProjectPhaseUpdateArgs} args - Arguments to update one ProjectPhase.
     * @example
     * // Update one ProjectPhase
     * const projectPhase = await prisma.projectPhase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectPhaseUpdateArgs>(args: SelectSubset<T, ProjectPhaseUpdateArgs<ExtArgs>>): Prisma__ProjectPhaseClient<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProjectPhases.
     * @param {ProjectPhaseDeleteManyArgs} args - Arguments to filter ProjectPhases to delete.
     * @example
     * // Delete a few ProjectPhases
     * const { count } = await prisma.projectPhase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectPhaseDeleteManyArgs>(args?: SelectSubset<T, ProjectPhaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectPhases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPhaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectPhases
     * const projectPhase = await prisma.projectPhase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectPhaseUpdateManyArgs>(args: SelectSubset<T, ProjectPhaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectPhase.
     * @param {ProjectPhaseUpsertArgs} args - Arguments to update or create a ProjectPhase.
     * @example
     * // Update or create a ProjectPhase
     * const projectPhase = await prisma.projectPhase.upsert({
     *   create: {
     *     // ... data to create a ProjectPhase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectPhase we want to update
     *   }
     * })
     */
    upsert<T extends ProjectPhaseUpsertArgs>(args: SelectSubset<T, ProjectPhaseUpsertArgs<ExtArgs>>): Prisma__ProjectPhaseClient<$Result.GetResult<Prisma.$ProjectPhasePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProjectPhases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPhaseCountArgs} args - Arguments to filter ProjectPhases to count.
     * @example
     * // Count the number of ProjectPhases
     * const count = await prisma.projectPhase.count({
     *   where: {
     *     // ... the filter for the ProjectPhases we want to count
     *   }
     * })
    **/
    count<T extends ProjectPhaseCountArgs>(
      args?: Subset<T, ProjectPhaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectPhaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectPhase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPhaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectPhaseAggregateArgs>(args: Subset<T, ProjectPhaseAggregateArgs>): Prisma.PrismaPromise<GetProjectPhaseAggregateType<T>>

    /**
     * Group by ProjectPhase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPhaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectPhaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectPhaseGroupByArgs['orderBy'] }
        : { orderBy?: ProjectPhaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectPhaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectPhaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectPhase model
   */
  readonly fields: ProjectPhaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectPhase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectPhaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tasks<T extends ProjectPhase$tasksArgs<ExtArgs> = {}>(args?: Subset<T, ProjectPhase$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectPhase model
   */ 
  interface ProjectPhaseFieldRefs {
    readonly id: FieldRef<"ProjectPhase", 'String'>
    readonly name: FieldRef<"ProjectPhase", 'String'>
    readonly description: FieldRef<"ProjectPhase", 'String'>
    readonly orderIndex: FieldRef<"ProjectPhase", 'Int'>
    readonly status: FieldRef<"ProjectPhase", 'PhaseStatus'>
    readonly startDate: FieldRef<"ProjectPhase", 'DateTime'>
    readonly dueDate: FieldRef<"ProjectPhase", 'DateTime'>
    readonly deliverDate: FieldRef<"ProjectPhase", 'DateTime'>
    readonly trelloListId: FieldRef<"ProjectPhase", 'String'>
    readonly createdAt: FieldRef<"ProjectPhase", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectPhase", 'DateTime'>
    readonly projectId: FieldRef<"ProjectPhase", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectPhase findUnique
   */
  export type ProjectPhaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPhase to fetch.
     */
    where: ProjectPhaseWhereUniqueInput
  }

  /**
   * ProjectPhase findUniqueOrThrow
   */
  export type ProjectPhaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPhase to fetch.
     */
    where: ProjectPhaseWhereUniqueInput
  }

  /**
   * ProjectPhase findFirst
   */
  export type ProjectPhaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPhase to fetch.
     */
    where?: ProjectPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectPhases to fetch.
     */
    orderBy?: ProjectPhaseOrderByWithRelationInput | ProjectPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectPhases.
     */
    cursor?: ProjectPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectPhases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectPhases.
     */
    distinct?: ProjectPhaseScalarFieldEnum | ProjectPhaseScalarFieldEnum[]
  }

  /**
   * ProjectPhase findFirstOrThrow
   */
  export type ProjectPhaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPhase to fetch.
     */
    where?: ProjectPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectPhases to fetch.
     */
    orderBy?: ProjectPhaseOrderByWithRelationInput | ProjectPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectPhases.
     */
    cursor?: ProjectPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectPhases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectPhases.
     */
    distinct?: ProjectPhaseScalarFieldEnum | ProjectPhaseScalarFieldEnum[]
  }

  /**
   * ProjectPhase findMany
   */
  export type ProjectPhaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPhases to fetch.
     */
    where?: ProjectPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectPhases to fetch.
     */
    orderBy?: ProjectPhaseOrderByWithRelationInput | ProjectPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectPhases.
     */
    cursor?: ProjectPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectPhases.
     */
    skip?: number
    distinct?: ProjectPhaseScalarFieldEnum | ProjectPhaseScalarFieldEnum[]
  }

  /**
   * ProjectPhase create
   */
  export type ProjectPhaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectPhase.
     */
    data: XOR<ProjectPhaseCreateInput, ProjectPhaseUncheckedCreateInput>
  }

  /**
   * ProjectPhase createMany
   */
  export type ProjectPhaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectPhases.
     */
    data: ProjectPhaseCreateManyInput | ProjectPhaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectPhase createManyAndReturn
   */
  export type ProjectPhaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProjectPhases.
     */
    data: ProjectPhaseCreateManyInput | ProjectPhaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectPhase update
   */
  export type ProjectPhaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectPhase.
     */
    data: XOR<ProjectPhaseUpdateInput, ProjectPhaseUncheckedUpdateInput>
    /**
     * Choose, which ProjectPhase to update.
     */
    where: ProjectPhaseWhereUniqueInput
  }

  /**
   * ProjectPhase updateMany
   */
  export type ProjectPhaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectPhases.
     */
    data: XOR<ProjectPhaseUpdateManyMutationInput, ProjectPhaseUncheckedUpdateManyInput>
    /**
     * Filter which ProjectPhases to update
     */
    where?: ProjectPhaseWhereInput
  }

  /**
   * ProjectPhase upsert
   */
  export type ProjectPhaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectPhase to update in case it exists.
     */
    where: ProjectPhaseWhereUniqueInput
    /**
     * In case the ProjectPhase found by the `where` argument doesn't exist, create a new ProjectPhase with this data.
     */
    create: XOR<ProjectPhaseCreateInput, ProjectPhaseUncheckedCreateInput>
    /**
     * In case the ProjectPhase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectPhaseUpdateInput, ProjectPhaseUncheckedUpdateInput>
  }

  /**
   * ProjectPhase delete
   */
  export type ProjectPhaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
    /**
     * Filter which ProjectPhase to delete.
     */
    where: ProjectPhaseWhereUniqueInput
  }

  /**
   * ProjectPhase deleteMany
   */
  export type ProjectPhaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectPhases to delete
     */
    where?: ProjectPhaseWhereInput
  }

  /**
   * ProjectPhase.tasks
   */
  export type ProjectPhase$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * ProjectPhase without action
   */
  export type ProjectPhaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPhase
     */
    select?: ProjectPhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPhaseInclude<ExtArgs> | null
  }


  /**
   * Model EmailWhitelist
   */

  export type AggregateEmailWhitelist = {
    _count: EmailWhitelistCountAggregateOutputType | null
    _min: EmailWhitelistMinAggregateOutputType | null
    _max: EmailWhitelistMaxAggregateOutputType | null
  }

  export type EmailWhitelistMinAggregateOutputType = {
    id: string | null
    email: string | null
    status: $Enums.WhitelistStatus | null
    role: $Enums.UserRole | null
    addedBy: string | null
    reason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmailWhitelistMaxAggregateOutputType = {
    id: string | null
    email: string | null
    status: $Enums.WhitelistStatus | null
    role: $Enums.UserRole | null
    addedBy: string | null
    reason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmailWhitelistCountAggregateOutputType = {
    id: number
    email: number
    status: number
    role: number
    addedBy: number
    reason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmailWhitelistMinAggregateInputType = {
    id?: true
    email?: true
    status?: true
    role?: true
    addedBy?: true
    reason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmailWhitelistMaxAggregateInputType = {
    id?: true
    email?: true
    status?: true
    role?: true
    addedBy?: true
    reason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmailWhitelistCountAggregateInputType = {
    id?: true
    email?: true
    status?: true
    role?: true
    addedBy?: true
    reason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmailWhitelistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailWhitelist to aggregate.
     */
    where?: EmailWhitelistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailWhitelists to fetch.
     */
    orderBy?: EmailWhitelistOrderByWithRelationInput | EmailWhitelistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailWhitelistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailWhitelists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailWhitelists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailWhitelists
    **/
    _count?: true | EmailWhitelistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailWhitelistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailWhitelistMaxAggregateInputType
  }

  export type GetEmailWhitelistAggregateType<T extends EmailWhitelistAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailWhitelist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailWhitelist[P]>
      : GetScalarType<T[P], AggregateEmailWhitelist[P]>
  }




  export type EmailWhitelistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailWhitelistWhereInput
    orderBy?: EmailWhitelistOrderByWithAggregationInput | EmailWhitelistOrderByWithAggregationInput[]
    by: EmailWhitelistScalarFieldEnum[] | EmailWhitelistScalarFieldEnum
    having?: EmailWhitelistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailWhitelistCountAggregateInputType | true
    _min?: EmailWhitelistMinAggregateInputType
    _max?: EmailWhitelistMaxAggregateInputType
  }

  export type EmailWhitelistGroupByOutputType = {
    id: string
    email: string
    status: $Enums.WhitelistStatus
    role: $Enums.UserRole
    addedBy: string | null
    reason: string | null
    createdAt: Date
    updatedAt: Date
    _count: EmailWhitelistCountAggregateOutputType | null
    _min: EmailWhitelistMinAggregateOutputType | null
    _max: EmailWhitelistMaxAggregateOutputType | null
  }

  type GetEmailWhitelistGroupByPayload<T extends EmailWhitelistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailWhitelistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailWhitelistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailWhitelistGroupByOutputType[P]>
            : GetScalarType<T[P], EmailWhitelistGroupByOutputType[P]>
        }
      >
    >


  export type EmailWhitelistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    status?: boolean
    role?: boolean
    addedBy?: boolean
    reason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["emailWhitelist"]>

  export type EmailWhitelistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    status?: boolean
    role?: boolean
    addedBy?: boolean
    reason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["emailWhitelist"]>

  export type EmailWhitelistSelectScalar = {
    id?: boolean
    email?: boolean
    status?: boolean
    role?: boolean
    addedBy?: boolean
    reason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $EmailWhitelistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailWhitelist"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      status: $Enums.WhitelistStatus
      role: $Enums.UserRole
      addedBy: string | null
      reason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["emailWhitelist"]>
    composites: {}
  }

  type EmailWhitelistGetPayload<S extends boolean | null | undefined | EmailWhitelistDefaultArgs> = $Result.GetResult<Prisma.$EmailWhitelistPayload, S>

  type EmailWhitelistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmailWhitelistFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmailWhitelistCountAggregateInputType | true
    }

  export interface EmailWhitelistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailWhitelist'], meta: { name: 'EmailWhitelist' } }
    /**
     * Find zero or one EmailWhitelist that matches the filter.
     * @param {EmailWhitelistFindUniqueArgs} args - Arguments to find a EmailWhitelist
     * @example
     * // Get one EmailWhitelist
     * const emailWhitelist = await prisma.emailWhitelist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailWhitelistFindUniqueArgs>(args: SelectSubset<T, EmailWhitelistFindUniqueArgs<ExtArgs>>): Prisma__EmailWhitelistClient<$Result.GetResult<Prisma.$EmailWhitelistPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EmailWhitelist that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EmailWhitelistFindUniqueOrThrowArgs} args - Arguments to find a EmailWhitelist
     * @example
     * // Get one EmailWhitelist
     * const emailWhitelist = await prisma.emailWhitelist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailWhitelistFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailWhitelistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailWhitelistClient<$Result.GetResult<Prisma.$EmailWhitelistPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EmailWhitelist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailWhitelistFindFirstArgs} args - Arguments to find a EmailWhitelist
     * @example
     * // Get one EmailWhitelist
     * const emailWhitelist = await prisma.emailWhitelist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailWhitelistFindFirstArgs>(args?: SelectSubset<T, EmailWhitelistFindFirstArgs<ExtArgs>>): Prisma__EmailWhitelistClient<$Result.GetResult<Prisma.$EmailWhitelistPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EmailWhitelist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailWhitelistFindFirstOrThrowArgs} args - Arguments to find a EmailWhitelist
     * @example
     * // Get one EmailWhitelist
     * const emailWhitelist = await prisma.emailWhitelist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailWhitelistFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailWhitelistFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailWhitelistClient<$Result.GetResult<Prisma.$EmailWhitelistPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EmailWhitelists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailWhitelistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailWhitelists
     * const emailWhitelists = await prisma.emailWhitelist.findMany()
     * 
     * // Get first 10 EmailWhitelists
     * const emailWhitelists = await prisma.emailWhitelist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailWhitelistWithIdOnly = await prisma.emailWhitelist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailWhitelistFindManyArgs>(args?: SelectSubset<T, EmailWhitelistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailWhitelistPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EmailWhitelist.
     * @param {EmailWhitelistCreateArgs} args - Arguments to create a EmailWhitelist.
     * @example
     * // Create one EmailWhitelist
     * const EmailWhitelist = await prisma.emailWhitelist.create({
     *   data: {
     *     // ... data to create a EmailWhitelist
     *   }
     * })
     * 
     */
    create<T extends EmailWhitelistCreateArgs>(args: SelectSubset<T, EmailWhitelistCreateArgs<ExtArgs>>): Prisma__EmailWhitelistClient<$Result.GetResult<Prisma.$EmailWhitelistPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EmailWhitelists.
     * @param {EmailWhitelistCreateManyArgs} args - Arguments to create many EmailWhitelists.
     * @example
     * // Create many EmailWhitelists
     * const emailWhitelist = await prisma.emailWhitelist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailWhitelistCreateManyArgs>(args?: SelectSubset<T, EmailWhitelistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailWhitelists and returns the data saved in the database.
     * @param {EmailWhitelistCreateManyAndReturnArgs} args - Arguments to create many EmailWhitelists.
     * @example
     * // Create many EmailWhitelists
     * const emailWhitelist = await prisma.emailWhitelist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailWhitelists and only return the `id`
     * const emailWhitelistWithIdOnly = await prisma.emailWhitelist.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailWhitelistCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailWhitelistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailWhitelistPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EmailWhitelist.
     * @param {EmailWhitelistDeleteArgs} args - Arguments to delete one EmailWhitelist.
     * @example
     * // Delete one EmailWhitelist
     * const EmailWhitelist = await prisma.emailWhitelist.delete({
     *   where: {
     *     // ... filter to delete one EmailWhitelist
     *   }
     * })
     * 
     */
    delete<T extends EmailWhitelistDeleteArgs>(args: SelectSubset<T, EmailWhitelistDeleteArgs<ExtArgs>>): Prisma__EmailWhitelistClient<$Result.GetResult<Prisma.$EmailWhitelistPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EmailWhitelist.
     * @param {EmailWhitelistUpdateArgs} args - Arguments to update one EmailWhitelist.
     * @example
     * // Update one EmailWhitelist
     * const emailWhitelist = await prisma.emailWhitelist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailWhitelistUpdateArgs>(args: SelectSubset<T, EmailWhitelistUpdateArgs<ExtArgs>>): Prisma__EmailWhitelistClient<$Result.GetResult<Prisma.$EmailWhitelistPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EmailWhitelists.
     * @param {EmailWhitelistDeleteManyArgs} args - Arguments to filter EmailWhitelists to delete.
     * @example
     * // Delete a few EmailWhitelists
     * const { count } = await prisma.emailWhitelist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailWhitelistDeleteManyArgs>(args?: SelectSubset<T, EmailWhitelistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailWhitelists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailWhitelistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailWhitelists
     * const emailWhitelist = await prisma.emailWhitelist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailWhitelistUpdateManyArgs>(args: SelectSubset<T, EmailWhitelistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EmailWhitelist.
     * @param {EmailWhitelistUpsertArgs} args - Arguments to update or create a EmailWhitelist.
     * @example
     * // Update or create a EmailWhitelist
     * const emailWhitelist = await prisma.emailWhitelist.upsert({
     *   create: {
     *     // ... data to create a EmailWhitelist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailWhitelist we want to update
     *   }
     * })
     */
    upsert<T extends EmailWhitelistUpsertArgs>(args: SelectSubset<T, EmailWhitelistUpsertArgs<ExtArgs>>): Prisma__EmailWhitelistClient<$Result.GetResult<Prisma.$EmailWhitelistPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EmailWhitelists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailWhitelistCountArgs} args - Arguments to filter EmailWhitelists to count.
     * @example
     * // Count the number of EmailWhitelists
     * const count = await prisma.emailWhitelist.count({
     *   where: {
     *     // ... the filter for the EmailWhitelists we want to count
     *   }
     * })
    **/
    count<T extends EmailWhitelistCountArgs>(
      args?: Subset<T, EmailWhitelistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailWhitelistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailWhitelist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailWhitelistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmailWhitelistAggregateArgs>(args: Subset<T, EmailWhitelistAggregateArgs>): Prisma.PrismaPromise<GetEmailWhitelistAggregateType<T>>

    /**
     * Group by EmailWhitelist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailWhitelistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmailWhitelistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailWhitelistGroupByArgs['orderBy'] }
        : { orderBy?: EmailWhitelistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailWhitelistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailWhitelistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailWhitelist model
   */
  readonly fields: EmailWhitelistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailWhitelist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailWhitelistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailWhitelist model
   */ 
  interface EmailWhitelistFieldRefs {
    readonly id: FieldRef<"EmailWhitelist", 'String'>
    readonly email: FieldRef<"EmailWhitelist", 'String'>
    readonly status: FieldRef<"EmailWhitelist", 'WhitelistStatus'>
    readonly role: FieldRef<"EmailWhitelist", 'UserRole'>
    readonly addedBy: FieldRef<"EmailWhitelist", 'String'>
    readonly reason: FieldRef<"EmailWhitelist", 'String'>
    readonly createdAt: FieldRef<"EmailWhitelist", 'DateTime'>
    readonly updatedAt: FieldRef<"EmailWhitelist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailWhitelist findUnique
   */
  export type EmailWhitelistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailWhitelist
     */
    select?: EmailWhitelistSelect<ExtArgs> | null
    /**
     * Filter, which EmailWhitelist to fetch.
     */
    where: EmailWhitelistWhereUniqueInput
  }

  /**
   * EmailWhitelist findUniqueOrThrow
   */
  export type EmailWhitelistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailWhitelist
     */
    select?: EmailWhitelistSelect<ExtArgs> | null
    /**
     * Filter, which EmailWhitelist to fetch.
     */
    where: EmailWhitelistWhereUniqueInput
  }

  /**
   * EmailWhitelist findFirst
   */
  export type EmailWhitelistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailWhitelist
     */
    select?: EmailWhitelistSelect<ExtArgs> | null
    /**
     * Filter, which EmailWhitelist to fetch.
     */
    where?: EmailWhitelistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailWhitelists to fetch.
     */
    orderBy?: EmailWhitelistOrderByWithRelationInput | EmailWhitelistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailWhitelists.
     */
    cursor?: EmailWhitelistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailWhitelists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailWhitelists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailWhitelists.
     */
    distinct?: EmailWhitelistScalarFieldEnum | EmailWhitelistScalarFieldEnum[]
  }

  /**
   * EmailWhitelist findFirstOrThrow
   */
  export type EmailWhitelistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailWhitelist
     */
    select?: EmailWhitelistSelect<ExtArgs> | null
    /**
     * Filter, which EmailWhitelist to fetch.
     */
    where?: EmailWhitelistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailWhitelists to fetch.
     */
    orderBy?: EmailWhitelistOrderByWithRelationInput | EmailWhitelistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailWhitelists.
     */
    cursor?: EmailWhitelistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailWhitelists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailWhitelists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailWhitelists.
     */
    distinct?: EmailWhitelistScalarFieldEnum | EmailWhitelistScalarFieldEnum[]
  }

  /**
   * EmailWhitelist findMany
   */
  export type EmailWhitelistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailWhitelist
     */
    select?: EmailWhitelistSelect<ExtArgs> | null
    /**
     * Filter, which EmailWhitelists to fetch.
     */
    where?: EmailWhitelistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailWhitelists to fetch.
     */
    orderBy?: EmailWhitelistOrderByWithRelationInput | EmailWhitelistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailWhitelists.
     */
    cursor?: EmailWhitelistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailWhitelists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailWhitelists.
     */
    skip?: number
    distinct?: EmailWhitelistScalarFieldEnum | EmailWhitelistScalarFieldEnum[]
  }

  /**
   * EmailWhitelist create
   */
  export type EmailWhitelistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailWhitelist
     */
    select?: EmailWhitelistSelect<ExtArgs> | null
    /**
     * The data needed to create a EmailWhitelist.
     */
    data: XOR<EmailWhitelistCreateInput, EmailWhitelistUncheckedCreateInput>
  }

  /**
   * EmailWhitelist createMany
   */
  export type EmailWhitelistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailWhitelists.
     */
    data: EmailWhitelistCreateManyInput | EmailWhitelistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailWhitelist createManyAndReturn
   */
  export type EmailWhitelistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailWhitelist
     */
    select?: EmailWhitelistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EmailWhitelists.
     */
    data: EmailWhitelistCreateManyInput | EmailWhitelistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailWhitelist update
   */
  export type EmailWhitelistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailWhitelist
     */
    select?: EmailWhitelistSelect<ExtArgs> | null
    /**
     * The data needed to update a EmailWhitelist.
     */
    data: XOR<EmailWhitelistUpdateInput, EmailWhitelistUncheckedUpdateInput>
    /**
     * Choose, which EmailWhitelist to update.
     */
    where: EmailWhitelistWhereUniqueInput
  }

  /**
   * EmailWhitelist updateMany
   */
  export type EmailWhitelistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailWhitelists.
     */
    data: XOR<EmailWhitelistUpdateManyMutationInput, EmailWhitelistUncheckedUpdateManyInput>
    /**
     * Filter which EmailWhitelists to update
     */
    where?: EmailWhitelistWhereInput
  }

  /**
   * EmailWhitelist upsert
   */
  export type EmailWhitelistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailWhitelist
     */
    select?: EmailWhitelistSelect<ExtArgs> | null
    /**
     * The filter to search for the EmailWhitelist to update in case it exists.
     */
    where: EmailWhitelistWhereUniqueInput
    /**
     * In case the EmailWhitelist found by the `where` argument doesn't exist, create a new EmailWhitelist with this data.
     */
    create: XOR<EmailWhitelistCreateInput, EmailWhitelistUncheckedCreateInput>
    /**
     * In case the EmailWhitelist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailWhitelistUpdateInput, EmailWhitelistUncheckedUpdateInput>
  }

  /**
   * EmailWhitelist delete
   */
  export type EmailWhitelistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailWhitelist
     */
    select?: EmailWhitelistSelect<ExtArgs> | null
    /**
     * Filter which EmailWhitelist to delete.
     */
    where: EmailWhitelistWhereUniqueInput
  }

  /**
   * EmailWhitelist deleteMany
   */
  export type EmailWhitelistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailWhitelists to delete
     */
    where?: EmailWhitelistWhereInput
  }

  /**
   * EmailWhitelist without action
   */
  export type EmailWhitelistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailWhitelist
     */
    select?: EmailWhitelistSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    auth0Id: 'auth0Id',
    email: 'email',
    name: 'name',
    picture: 'picture',
    trelloMemberId: 'trelloMemberId',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WorksiteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    latitude: 'latitude',
    longitude: 'longitude',
    radius: 'radius',
    checkinStartTime: 'checkinStartTime',
    checkinEndTime: 'checkinEndTime',
    checkoutStartTime: 'checkoutStartTime',
    checkoutEndTime: 'checkoutEndTime',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorksiteScalarFieldEnum = (typeof WorksiteScalarFieldEnum)[keyof typeof WorksiteScalarFieldEnum]


  export const CheckinScalarFieldEnum: {
    id: 'id',
    type: 'type',
    location: 'location',
    leaveType: 'leaveType',
    latitude: 'latitude',
    longitude: 'longitude',
    distance: 'distance',
    photo: 'photo',
    reason: 'reason',
    notes: 'notes',
    isSystemGenerated: 'isSystemGenerated',
    createdAt: 'createdAt',
    userId: 'userId',
    worksiteId: 'worksiteId'
  };

  export type CheckinScalarFieldEnum = (typeof CheckinScalarFieldEnum)[keyof typeof CheckinScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    key: 'key',
    trelloBoardId: 'trelloBoardId',
    trelloTag: 'trelloTag',
    status: 'status',
    startDate: 'startDate',
    dueDate: 'dueDate',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    trelloCardId: 'trelloCardId',
    title: 'title',
    description: 'description',
    status: 'status',
    priority: 'priority',
    assignedUserId: 'assignedUserId',
    worksiteId: 'worksiteId',
    projectId: 'projectId',
    phaseId: 'phaseId',
    startDate: 'startDate',
    dueDate: 'dueDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const ProjectMemberScalarFieldEnum: {
    id: 'id',
    role: 'role',
    joinedAt: 'joinedAt',
    leftAt: 'leftAt',
    isActive: 'isActive',
    userId: 'userId',
    projectId: 'projectId'
  };

  export type ProjectMemberScalarFieldEnum = (typeof ProjectMemberScalarFieldEnum)[keyof typeof ProjectMemberScalarFieldEnum]


  export const ProjectPhaseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    orderIndex: 'orderIndex',
    status: 'status',
    startDate: 'startDate',
    dueDate: 'dueDate',
    deliverDate: 'deliverDate',
    trelloListId: 'trelloListId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    projectId: 'projectId'
  };

  export type ProjectPhaseScalarFieldEnum = (typeof ProjectPhaseScalarFieldEnum)[keyof typeof ProjectPhaseScalarFieldEnum]


  export const EmailWhitelistScalarFieldEnum: {
    id: 'id',
    email: 'email',
    status: 'status',
    role: 'role',
    addedBy: 'addedBy',
    reason: 'reason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmailWhitelistScalarFieldEnum = (typeof EmailWhitelistScalarFieldEnum)[keyof typeof EmailWhitelistScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'CheckinType'
   */
  export type EnumCheckinTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CheckinType'>
    


  /**
   * Reference to a field of type 'CheckinType[]'
   */
  export type ListEnumCheckinTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CheckinType[]'>
    


  /**
   * Reference to a field of type 'LocationType'
   */
  export type EnumLocationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LocationType'>
    


  /**
   * Reference to a field of type 'LocationType[]'
   */
  export type ListEnumLocationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LocationType[]'>
    


  /**
   * Reference to a field of type 'LeaveType'
   */
  export type EnumLeaveTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveType'>
    


  /**
   * Reference to a field of type 'LeaveType[]'
   */
  export type ListEnumLeaveTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveType[]'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'ProjectStatus[]'
   */
  export type ListEnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus[]'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'TaskPriority'
   */
  export type EnumTaskPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskPriority'>
    


  /**
   * Reference to a field of type 'TaskPriority[]'
   */
  export type ListEnumTaskPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskPriority[]'>
    


  /**
   * Reference to a field of type 'ProjectRole'
   */
  export type EnumProjectRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectRole'>
    


  /**
   * Reference to a field of type 'ProjectRole[]'
   */
  export type ListEnumProjectRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectRole[]'>
    


  /**
   * Reference to a field of type 'PhaseStatus'
   */
  export type EnumPhaseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PhaseStatus'>
    


  /**
   * Reference to a field of type 'PhaseStatus[]'
   */
  export type ListEnumPhaseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PhaseStatus[]'>
    


  /**
   * Reference to a field of type 'WhitelistStatus'
   */
  export type EnumWhitelistStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WhitelistStatus'>
    


  /**
   * Reference to a field of type 'WhitelistStatus[]'
   */
  export type ListEnumWhitelistStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WhitelistStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    auth0Id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    picture?: StringNullableFilter<"User"> | string | null
    trelloMemberId?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tasks?: TaskListRelationFilter
    checkins?: CheckinListRelationFilter
    projectMembers?: ProjectMemberListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    auth0Id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    trelloMemberId?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tasks?: TaskOrderByRelationAggregateInput
    checkins?: CheckinOrderByRelationAggregateInput
    projectMembers?: ProjectMemberOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    auth0Id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    picture?: StringNullableFilter<"User"> | string | null
    trelloMemberId?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tasks?: TaskListRelationFilter
    checkins?: CheckinListRelationFilter
    projectMembers?: ProjectMemberListRelationFilter
  }, "id" | "auth0Id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    auth0Id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    trelloMemberId?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    auth0Id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    picture?: StringNullableWithAggregatesFilter<"User"> | string | null
    trelloMemberId?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WorksiteWhereInput = {
    AND?: WorksiteWhereInput | WorksiteWhereInput[]
    OR?: WorksiteWhereInput[]
    NOT?: WorksiteWhereInput | WorksiteWhereInput[]
    id?: StringFilter<"Worksite"> | string
    name?: StringFilter<"Worksite"> | string
    description?: StringNullableFilter<"Worksite"> | string | null
    latitude?: DecimalFilter<"Worksite"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Worksite"> | Decimal | DecimalJsLike | number | string
    radius?: IntFilter<"Worksite"> | number
    checkinStartTime?: StringNullableFilter<"Worksite"> | string | null
    checkinEndTime?: StringNullableFilter<"Worksite"> | string | null
    checkoutStartTime?: StringNullableFilter<"Worksite"> | string | null
    checkoutEndTime?: StringNullableFilter<"Worksite"> | string | null
    isActive?: BoolFilter<"Worksite"> | boolean
    createdAt?: DateTimeFilter<"Worksite"> | Date | string
    updatedAt?: DateTimeFilter<"Worksite"> | Date | string
    checkins?: CheckinListRelationFilter
  }

  export type WorksiteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    checkinStartTime?: SortOrderInput | SortOrder
    checkinEndTime?: SortOrderInput | SortOrder
    checkoutStartTime?: SortOrderInput | SortOrder
    checkoutEndTime?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    checkins?: CheckinOrderByRelationAggregateInput
  }

  export type WorksiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorksiteWhereInput | WorksiteWhereInput[]
    OR?: WorksiteWhereInput[]
    NOT?: WorksiteWhereInput | WorksiteWhereInput[]
    name?: StringFilter<"Worksite"> | string
    description?: StringNullableFilter<"Worksite"> | string | null
    latitude?: DecimalFilter<"Worksite"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Worksite"> | Decimal | DecimalJsLike | number | string
    radius?: IntFilter<"Worksite"> | number
    checkinStartTime?: StringNullableFilter<"Worksite"> | string | null
    checkinEndTime?: StringNullableFilter<"Worksite"> | string | null
    checkoutStartTime?: StringNullableFilter<"Worksite"> | string | null
    checkoutEndTime?: StringNullableFilter<"Worksite"> | string | null
    isActive?: BoolFilter<"Worksite"> | boolean
    createdAt?: DateTimeFilter<"Worksite"> | Date | string
    updatedAt?: DateTimeFilter<"Worksite"> | Date | string
    checkins?: CheckinListRelationFilter
  }, "id">

  export type WorksiteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    checkinStartTime?: SortOrderInput | SortOrder
    checkinEndTime?: SortOrderInput | SortOrder
    checkoutStartTime?: SortOrderInput | SortOrder
    checkoutEndTime?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorksiteCountOrderByAggregateInput
    _avg?: WorksiteAvgOrderByAggregateInput
    _max?: WorksiteMaxOrderByAggregateInput
    _min?: WorksiteMinOrderByAggregateInput
    _sum?: WorksiteSumOrderByAggregateInput
  }

  export type WorksiteScalarWhereWithAggregatesInput = {
    AND?: WorksiteScalarWhereWithAggregatesInput | WorksiteScalarWhereWithAggregatesInput[]
    OR?: WorksiteScalarWhereWithAggregatesInput[]
    NOT?: WorksiteScalarWhereWithAggregatesInput | WorksiteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Worksite"> | string
    name?: StringWithAggregatesFilter<"Worksite"> | string
    description?: StringNullableWithAggregatesFilter<"Worksite"> | string | null
    latitude?: DecimalWithAggregatesFilter<"Worksite"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter<"Worksite"> | Decimal | DecimalJsLike | number | string
    radius?: IntWithAggregatesFilter<"Worksite"> | number
    checkinStartTime?: StringNullableWithAggregatesFilter<"Worksite"> | string | null
    checkinEndTime?: StringNullableWithAggregatesFilter<"Worksite"> | string | null
    checkoutStartTime?: StringNullableWithAggregatesFilter<"Worksite"> | string | null
    checkoutEndTime?: StringNullableWithAggregatesFilter<"Worksite"> | string | null
    isActive?: BoolWithAggregatesFilter<"Worksite"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Worksite"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Worksite"> | Date | string
  }

  export type CheckinWhereInput = {
    AND?: CheckinWhereInput | CheckinWhereInput[]
    OR?: CheckinWhereInput[]
    NOT?: CheckinWhereInput | CheckinWhereInput[]
    id?: StringFilter<"Checkin"> | string
    type?: EnumCheckinTypeFilter<"Checkin"> | $Enums.CheckinType
    location?: EnumLocationTypeFilter<"Checkin"> | $Enums.LocationType
    leaveType?: EnumLeaveTypeFilter<"Checkin"> | $Enums.LeaveType
    latitude?: DecimalFilter<"Checkin"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Checkin"> | Decimal | DecimalJsLike | number | string
    distance?: DecimalFilter<"Checkin"> | Decimal | DecimalJsLike | number | string
    photo?: StringNullableFilter<"Checkin"> | string | null
    reason?: StringNullableFilter<"Checkin"> | string | null
    notes?: StringNullableFilter<"Checkin"> | string | null
    isSystemGenerated?: BoolFilter<"Checkin"> | boolean
    createdAt?: DateTimeFilter<"Checkin"> | Date | string
    userId?: StringFilter<"Checkin"> | string
    worksiteId?: StringNullableFilter<"Checkin"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    worksite?: XOR<WorksiteNullableRelationFilter, WorksiteWhereInput> | null
  }

  export type CheckinOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    location?: SortOrder
    leaveType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    distance?: SortOrder
    photo?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    isSystemGenerated?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    worksiteId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    worksite?: WorksiteOrderByWithRelationInput
  }

  export type CheckinWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CheckinWhereInput | CheckinWhereInput[]
    OR?: CheckinWhereInput[]
    NOT?: CheckinWhereInput | CheckinWhereInput[]
    type?: EnumCheckinTypeFilter<"Checkin"> | $Enums.CheckinType
    location?: EnumLocationTypeFilter<"Checkin"> | $Enums.LocationType
    leaveType?: EnumLeaveTypeFilter<"Checkin"> | $Enums.LeaveType
    latitude?: DecimalFilter<"Checkin"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Checkin"> | Decimal | DecimalJsLike | number | string
    distance?: DecimalFilter<"Checkin"> | Decimal | DecimalJsLike | number | string
    photo?: StringNullableFilter<"Checkin"> | string | null
    reason?: StringNullableFilter<"Checkin"> | string | null
    notes?: StringNullableFilter<"Checkin"> | string | null
    isSystemGenerated?: BoolFilter<"Checkin"> | boolean
    createdAt?: DateTimeFilter<"Checkin"> | Date | string
    userId?: StringFilter<"Checkin"> | string
    worksiteId?: StringNullableFilter<"Checkin"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    worksite?: XOR<WorksiteNullableRelationFilter, WorksiteWhereInput> | null
  }, "id">

  export type CheckinOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    location?: SortOrder
    leaveType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    distance?: SortOrder
    photo?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    isSystemGenerated?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    worksiteId?: SortOrderInput | SortOrder
    _count?: CheckinCountOrderByAggregateInput
    _avg?: CheckinAvgOrderByAggregateInput
    _max?: CheckinMaxOrderByAggregateInput
    _min?: CheckinMinOrderByAggregateInput
    _sum?: CheckinSumOrderByAggregateInput
  }

  export type CheckinScalarWhereWithAggregatesInput = {
    AND?: CheckinScalarWhereWithAggregatesInput | CheckinScalarWhereWithAggregatesInput[]
    OR?: CheckinScalarWhereWithAggregatesInput[]
    NOT?: CheckinScalarWhereWithAggregatesInput | CheckinScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Checkin"> | string
    type?: EnumCheckinTypeWithAggregatesFilter<"Checkin"> | $Enums.CheckinType
    location?: EnumLocationTypeWithAggregatesFilter<"Checkin"> | $Enums.LocationType
    leaveType?: EnumLeaveTypeWithAggregatesFilter<"Checkin"> | $Enums.LeaveType
    latitude?: DecimalWithAggregatesFilter<"Checkin"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter<"Checkin"> | Decimal | DecimalJsLike | number | string
    distance?: DecimalWithAggregatesFilter<"Checkin"> | Decimal | DecimalJsLike | number | string
    photo?: StringNullableWithAggregatesFilter<"Checkin"> | string | null
    reason?: StringNullableWithAggregatesFilter<"Checkin"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Checkin"> | string | null
    isSystemGenerated?: BoolWithAggregatesFilter<"Checkin"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Checkin"> | Date | string
    userId?: StringWithAggregatesFilter<"Checkin"> | string
    worksiteId?: StringNullableWithAggregatesFilter<"Checkin"> | string | null
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    key?: StringFilter<"Project"> | string
    trelloBoardId?: StringFilter<"Project"> | string
    trelloTag?: StringFilter<"Project"> | string
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    dueDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    isActive?: BoolFilter<"Project"> | boolean
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    tasks?: TaskListRelationFilter
    members?: ProjectMemberListRelationFilter
    phases?: ProjectPhaseListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    key?: SortOrder
    trelloBoardId?: SortOrder
    trelloTag?: SortOrder
    status?: SortOrder
    startDate?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tasks?: TaskOrderByRelationAggregateInput
    members?: ProjectMemberOrderByRelationAggregateInput
    phases?: ProjectPhaseOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    trelloBoardId?: StringFilter<"Project"> | string
    trelloTag?: StringFilter<"Project"> | string
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    dueDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    isActive?: BoolFilter<"Project"> | boolean
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    tasks?: TaskListRelationFilter
    members?: ProjectMemberListRelationFilter
    phases?: ProjectPhaseListRelationFilter
  }, "id" | "key">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    key?: SortOrder
    trelloBoardId?: SortOrder
    trelloTag?: SortOrder
    status?: SortOrder
    startDate?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    key?: StringWithAggregatesFilter<"Project"> | string
    trelloBoardId?: StringWithAggregatesFilter<"Project"> | string
    trelloTag?: StringWithAggregatesFilter<"Project"> | string
    status?: EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus
    startDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    dueDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"Project"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    trelloCardId?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    assignedUserId?: StringNullableFilter<"Task"> | string | null
    worksiteId?: StringNullableFilter<"Task"> | string | null
    projectId?: StringNullableFilter<"Task"> | string | null
    phaseId?: StringNullableFilter<"Task"> | string | null
    startDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    assignedUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    project?: XOR<ProjectNullableRelationFilter, ProjectWhereInput> | null
    phase?: XOR<ProjectPhaseNullableRelationFilter, ProjectPhaseWhereInput> | null
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    trelloCardId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    assignedUserId?: SortOrderInput | SortOrder
    worksiteId?: SortOrderInput | SortOrder
    projectId?: SortOrderInput | SortOrder
    phaseId?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignedUser?: UserOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
    phase?: ProjectPhaseOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    trelloCardId?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    assignedUserId?: StringNullableFilter<"Task"> | string | null
    worksiteId?: StringNullableFilter<"Task"> | string | null
    projectId?: StringNullableFilter<"Task"> | string | null
    phaseId?: StringNullableFilter<"Task"> | string | null
    startDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    assignedUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    project?: XOR<ProjectNullableRelationFilter, ProjectWhereInput> | null
    phase?: XOR<ProjectPhaseNullableRelationFilter, ProjectPhaseWhereInput> | null
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    trelloCardId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    assignedUserId?: SortOrderInput | SortOrder
    worksiteId?: SortOrderInput | SortOrder
    projectId?: SortOrderInput | SortOrder
    phaseId?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    trelloCardId?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumTaskPriorityWithAggregatesFilter<"Task"> | $Enums.TaskPriority
    assignedUserId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    worksiteId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    projectId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    phaseId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    dueDate?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type ProjectMemberWhereInput = {
    AND?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    OR?: ProjectMemberWhereInput[]
    NOT?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    id?: StringFilter<"ProjectMember"> | string
    role?: EnumProjectRoleFilter<"ProjectMember"> | $Enums.ProjectRole
    joinedAt?: DateTimeFilter<"ProjectMember"> | Date | string
    leftAt?: DateTimeNullableFilter<"ProjectMember"> | Date | string | null
    isActive?: BoolFilter<"ProjectMember"> | boolean
    userId?: StringFilter<"ProjectMember"> | string
    projectId?: StringFilter<"ProjectMember"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }

  export type ProjectMemberOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    user?: UserOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_projectId?: ProjectMemberUserIdProjectIdCompoundUniqueInput
    AND?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    OR?: ProjectMemberWhereInput[]
    NOT?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    role?: EnumProjectRoleFilter<"ProjectMember"> | $Enums.ProjectRole
    joinedAt?: DateTimeFilter<"ProjectMember"> | Date | string
    leftAt?: DateTimeNullableFilter<"ProjectMember"> | Date | string | null
    isActive?: BoolFilter<"ProjectMember"> | boolean
    userId?: StringFilter<"ProjectMember"> | string
    projectId?: StringFilter<"ProjectMember"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }, "id" | "userId_projectId">

  export type ProjectMemberOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    _count?: ProjectMemberCountOrderByAggregateInput
    _max?: ProjectMemberMaxOrderByAggregateInput
    _min?: ProjectMemberMinOrderByAggregateInput
  }

  export type ProjectMemberScalarWhereWithAggregatesInput = {
    AND?: ProjectMemberScalarWhereWithAggregatesInput | ProjectMemberScalarWhereWithAggregatesInput[]
    OR?: ProjectMemberScalarWhereWithAggregatesInput[]
    NOT?: ProjectMemberScalarWhereWithAggregatesInput | ProjectMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectMember"> | string
    role?: EnumProjectRoleWithAggregatesFilter<"ProjectMember"> | $Enums.ProjectRole
    joinedAt?: DateTimeWithAggregatesFilter<"ProjectMember"> | Date | string
    leftAt?: DateTimeNullableWithAggregatesFilter<"ProjectMember"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"ProjectMember"> | boolean
    userId?: StringWithAggregatesFilter<"ProjectMember"> | string
    projectId?: StringWithAggregatesFilter<"ProjectMember"> | string
  }

  export type ProjectPhaseWhereInput = {
    AND?: ProjectPhaseWhereInput | ProjectPhaseWhereInput[]
    OR?: ProjectPhaseWhereInput[]
    NOT?: ProjectPhaseWhereInput | ProjectPhaseWhereInput[]
    id?: StringFilter<"ProjectPhase"> | string
    name?: StringFilter<"ProjectPhase"> | string
    description?: StringNullableFilter<"ProjectPhase"> | string | null
    orderIndex?: IntFilter<"ProjectPhase"> | number
    status?: EnumPhaseStatusFilter<"ProjectPhase"> | $Enums.PhaseStatus
    startDate?: DateTimeNullableFilter<"ProjectPhase"> | Date | string | null
    dueDate?: DateTimeNullableFilter<"ProjectPhase"> | Date | string | null
    deliverDate?: DateTimeNullableFilter<"ProjectPhase"> | Date | string | null
    trelloListId?: StringNullableFilter<"ProjectPhase"> | string | null
    createdAt?: DateTimeFilter<"ProjectPhase"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectPhase"> | Date | string
    projectId?: StringFilter<"ProjectPhase"> | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    tasks?: TaskListRelationFilter
  }

  export type ProjectPhaseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    orderIndex?: SortOrder
    status?: SortOrder
    startDate?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    deliverDate?: SortOrderInput | SortOrder
    trelloListId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type ProjectPhaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectPhaseWhereInput | ProjectPhaseWhereInput[]
    OR?: ProjectPhaseWhereInput[]
    NOT?: ProjectPhaseWhereInput | ProjectPhaseWhereInput[]
    name?: StringFilter<"ProjectPhase"> | string
    description?: StringNullableFilter<"ProjectPhase"> | string | null
    orderIndex?: IntFilter<"ProjectPhase"> | number
    status?: EnumPhaseStatusFilter<"ProjectPhase"> | $Enums.PhaseStatus
    startDate?: DateTimeNullableFilter<"ProjectPhase"> | Date | string | null
    dueDate?: DateTimeNullableFilter<"ProjectPhase"> | Date | string | null
    deliverDate?: DateTimeNullableFilter<"ProjectPhase"> | Date | string | null
    trelloListId?: StringNullableFilter<"ProjectPhase"> | string | null
    createdAt?: DateTimeFilter<"ProjectPhase"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectPhase"> | Date | string
    projectId?: StringFilter<"ProjectPhase"> | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    tasks?: TaskListRelationFilter
  }, "id">

  export type ProjectPhaseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    orderIndex?: SortOrder
    status?: SortOrder
    startDate?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    deliverDate?: SortOrderInput | SortOrder
    trelloListId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    _count?: ProjectPhaseCountOrderByAggregateInput
    _avg?: ProjectPhaseAvgOrderByAggregateInput
    _max?: ProjectPhaseMaxOrderByAggregateInput
    _min?: ProjectPhaseMinOrderByAggregateInput
    _sum?: ProjectPhaseSumOrderByAggregateInput
  }

  export type ProjectPhaseScalarWhereWithAggregatesInput = {
    AND?: ProjectPhaseScalarWhereWithAggregatesInput | ProjectPhaseScalarWhereWithAggregatesInput[]
    OR?: ProjectPhaseScalarWhereWithAggregatesInput[]
    NOT?: ProjectPhaseScalarWhereWithAggregatesInput | ProjectPhaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectPhase"> | string
    name?: StringWithAggregatesFilter<"ProjectPhase"> | string
    description?: StringNullableWithAggregatesFilter<"ProjectPhase"> | string | null
    orderIndex?: IntWithAggregatesFilter<"ProjectPhase"> | number
    status?: EnumPhaseStatusWithAggregatesFilter<"ProjectPhase"> | $Enums.PhaseStatus
    startDate?: DateTimeNullableWithAggregatesFilter<"ProjectPhase"> | Date | string | null
    dueDate?: DateTimeNullableWithAggregatesFilter<"ProjectPhase"> | Date | string | null
    deliverDate?: DateTimeNullableWithAggregatesFilter<"ProjectPhase"> | Date | string | null
    trelloListId?: StringNullableWithAggregatesFilter<"ProjectPhase"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProjectPhase"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectPhase"> | Date | string
    projectId?: StringWithAggregatesFilter<"ProjectPhase"> | string
  }

  export type EmailWhitelistWhereInput = {
    AND?: EmailWhitelistWhereInput | EmailWhitelistWhereInput[]
    OR?: EmailWhitelistWhereInput[]
    NOT?: EmailWhitelistWhereInput | EmailWhitelistWhereInput[]
    id?: StringFilter<"EmailWhitelist"> | string
    email?: StringFilter<"EmailWhitelist"> | string
    status?: EnumWhitelistStatusFilter<"EmailWhitelist"> | $Enums.WhitelistStatus
    role?: EnumUserRoleFilter<"EmailWhitelist"> | $Enums.UserRole
    addedBy?: StringNullableFilter<"EmailWhitelist"> | string | null
    reason?: StringNullableFilter<"EmailWhitelist"> | string | null
    createdAt?: DateTimeFilter<"EmailWhitelist"> | Date | string
    updatedAt?: DateTimeFilter<"EmailWhitelist"> | Date | string
  }

  export type EmailWhitelistOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    role?: SortOrder
    addedBy?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailWhitelistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: EmailWhitelistWhereInput | EmailWhitelistWhereInput[]
    OR?: EmailWhitelistWhereInput[]
    NOT?: EmailWhitelistWhereInput | EmailWhitelistWhereInput[]
    status?: EnumWhitelistStatusFilter<"EmailWhitelist"> | $Enums.WhitelistStatus
    role?: EnumUserRoleFilter<"EmailWhitelist"> | $Enums.UserRole
    addedBy?: StringNullableFilter<"EmailWhitelist"> | string | null
    reason?: StringNullableFilter<"EmailWhitelist"> | string | null
    createdAt?: DateTimeFilter<"EmailWhitelist"> | Date | string
    updatedAt?: DateTimeFilter<"EmailWhitelist"> | Date | string
  }, "id" | "email">

  export type EmailWhitelistOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    role?: SortOrder
    addedBy?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmailWhitelistCountOrderByAggregateInput
    _max?: EmailWhitelistMaxOrderByAggregateInput
    _min?: EmailWhitelistMinOrderByAggregateInput
  }

  export type EmailWhitelistScalarWhereWithAggregatesInput = {
    AND?: EmailWhitelistScalarWhereWithAggregatesInput | EmailWhitelistScalarWhereWithAggregatesInput[]
    OR?: EmailWhitelistScalarWhereWithAggregatesInput[]
    NOT?: EmailWhitelistScalarWhereWithAggregatesInput | EmailWhitelistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailWhitelist"> | string
    email?: StringWithAggregatesFilter<"EmailWhitelist"> | string
    status?: EnumWhitelistStatusWithAggregatesFilter<"EmailWhitelist"> | $Enums.WhitelistStatus
    role?: EnumUserRoleWithAggregatesFilter<"EmailWhitelist"> | $Enums.UserRole
    addedBy?: StringNullableWithAggregatesFilter<"EmailWhitelist"> | string | null
    reason?: StringNullableWithAggregatesFilter<"EmailWhitelist"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EmailWhitelist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmailWhitelist"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    auth0Id: string
    email: string
    name?: string | null
    picture?: string | null
    trelloMemberId?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutAssignedUserInput
    checkins?: CheckinCreateNestedManyWithoutUserInput
    projectMembers?: ProjectMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    auth0Id: string
    email: string
    name?: string | null
    picture?: string | null
    trelloMemberId?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutAssignedUserInput
    checkins?: CheckinUncheckedCreateNestedManyWithoutUserInput
    projectMembers?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    trelloMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutAssignedUserNestedInput
    checkins?: CheckinUpdateManyWithoutUserNestedInput
    projectMembers?: ProjectMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    trelloMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutAssignedUserNestedInput
    checkins?: CheckinUncheckedUpdateManyWithoutUserNestedInput
    projectMembers?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    auth0Id: string
    email: string
    name?: string | null
    picture?: string | null
    trelloMemberId?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    trelloMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    trelloMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorksiteCreateInput = {
    id?: string
    name: string
    description?: string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    radius?: number
    checkinStartTime?: string | null
    checkinEndTime?: string | null
    checkoutStartTime?: string | null
    checkoutEndTime?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    checkins?: CheckinCreateNestedManyWithoutWorksiteInput
  }

  export type WorksiteUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    radius?: number
    checkinStartTime?: string | null
    checkinEndTime?: string | null
    checkoutStartTime?: string | null
    checkoutEndTime?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    checkins?: CheckinUncheckedCreateNestedManyWithoutWorksiteInput
  }

  export type WorksiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    radius?: IntFieldUpdateOperationsInput | number
    checkinStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkinEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkoutStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkoutEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkins?: CheckinUpdateManyWithoutWorksiteNestedInput
  }

  export type WorksiteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    radius?: IntFieldUpdateOperationsInput | number
    checkinStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkinEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkoutStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkoutEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkins?: CheckinUncheckedUpdateManyWithoutWorksiteNestedInput
  }

  export type WorksiteCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    radius?: number
    checkinStartTime?: string | null
    checkinEndTime?: string | null
    checkoutStartTime?: string | null
    checkoutEndTime?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorksiteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    radius?: IntFieldUpdateOperationsInput | number
    checkinStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkinEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkoutStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkoutEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorksiteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    radius?: IntFieldUpdateOperationsInput | number
    checkinStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkinEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkoutStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkoutEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckinCreateInput = {
    id?: string
    type: $Enums.CheckinType
    location?: $Enums.LocationType
    leaveType?: $Enums.LeaveType
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    distance: Decimal | DecimalJsLike | number | string
    photo?: string | null
    reason?: string | null
    notes?: string | null
    isSystemGenerated?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCheckinsInput
    worksite?: WorksiteCreateNestedOneWithoutCheckinsInput
  }

  export type CheckinUncheckedCreateInput = {
    id?: string
    type: $Enums.CheckinType
    location?: $Enums.LocationType
    leaveType?: $Enums.LeaveType
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    distance: Decimal | DecimalJsLike | number | string
    photo?: string | null
    reason?: string | null
    notes?: string | null
    isSystemGenerated?: boolean
    createdAt?: Date | string
    userId: string
    worksiteId?: string | null
  }

  export type CheckinUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCheckinTypeFieldUpdateOperationsInput | $Enums.CheckinType
    location?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isSystemGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCheckinsNestedInput
    worksite?: WorksiteUpdateOneWithoutCheckinsNestedInput
  }

  export type CheckinUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCheckinTypeFieldUpdateOperationsInput | $Enums.CheckinType
    location?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isSystemGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    worksiteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CheckinCreateManyInput = {
    id?: string
    type: $Enums.CheckinType
    location?: $Enums.LocationType
    leaveType?: $Enums.LeaveType
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    distance: Decimal | DecimalJsLike | number | string
    photo?: string | null
    reason?: string | null
    notes?: string | null
    isSystemGenerated?: boolean
    createdAt?: Date | string
    userId: string
    worksiteId?: string | null
  }

  export type CheckinUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCheckinTypeFieldUpdateOperationsInput | $Enums.CheckinType
    location?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isSystemGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckinUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCheckinTypeFieldUpdateOperationsInput | $Enums.CheckinType
    location?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isSystemGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    worksiteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    description?: string | null
    key: string
    trelloBoardId: string
    trelloTag: string
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutProjectInput
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
    phases?: ProjectPhaseCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    key: string
    trelloBoardId: string
    trelloTag: string
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
    phases?: ProjectPhaseUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    trelloBoardId?: StringFieldUpdateOperationsInput | string
    trelloTag?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
    phases?: ProjectPhaseUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    trelloBoardId?: StringFieldUpdateOperationsInput | string
    trelloTag?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
    phases?: ProjectPhaseUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    key: string
    trelloBoardId: string
    trelloTag: string
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    trelloBoardId?: StringFieldUpdateOperationsInput | string
    trelloTag?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    trelloBoardId?: StringFieldUpdateOperationsInput | string
    trelloTag?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    trelloCardId: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    worksiteId?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedUser?: UserCreateNestedOneWithoutTasksInput
    project?: ProjectCreateNestedOneWithoutTasksInput
    phase?: ProjectPhaseCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    trelloCardId: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    assignedUserId?: string | null
    worksiteId?: string | null
    projectId?: string | null
    phaseId?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trelloCardId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    worksiteId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedUser?: UserUpdateOneWithoutTasksNestedInput
    project?: ProjectUpdateOneWithoutTasksNestedInput
    phase?: ProjectPhaseUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trelloCardId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    assignedUserId?: NullableStringFieldUpdateOperationsInput | string | null
    worksiteId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    phaseId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyInput = {
    id?: string
    trelloCardId: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    assignedUserId?: string | null
    worksiteId?: string | null
    projectId?: string | null
    phaseId?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    trelloCardId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    worksiteId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    trelloCardId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    assignedUserId?: NullableStringFieldUpdateOperationsInput | string | null
    worksiteId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    phaseId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberCreateInput = {
    id?: string
    role?: $Enums.ProjectRole
    joinedAt?: Date | string
    leftAt?: Date | string | null
    isActive?: boolean
    user: UserCreateNestedOneWithoutProjectMembersInput
    project: ProjectCreateNestedOneWithoutMembersInput
  }

  export type ProjectMemberUncheckedCreateInput = {
    id?: string
    role?: $Enums.ProjectRole
    joinedAt?: Date | string
    leftAt?: Date | string | null
    isActive?: boolean
    userId: string
    projectId: string
  }

  export type ProjectMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutProjectMembersNestedInput
    project?: ProjectUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ProjectMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectMemberCreateManyInput = {
    id?: string
    role?: $Enums.ProjectRole
    joinedAt?: Date | string
    leftAt?: Date | string | null
    isActive?: boolean
    userId: string
    projectId: string
  }

  export type ProjectMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjectMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectPhaseCreateInput = {
    id?: string
    name: string
    description?: string | null
    orderIndex?: number
    status?: $Enums.PhaseStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    deliverDate?: Date | string | null
    trelloListId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutPhasesInput
    tasks?: TaskCreateNestedManyWithoutPhaseInput
  }

  export type ProjectPhaseUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    orderIndex?: number
    status?: $Enums.PhaseStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    deliverDate?: Date | string | null
    trelloListId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
    tasks?: TaskUncheckedCreateNestedManyWithoutPhaseInput
  }

  export type ProjectPhaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    status?: EnumPhaseStatusFieldUpdateOperationsInput | $Enums.PhaseStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trelloListId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutPhasesNestedInput
    tasks?: TaskUpdateManyWithoutPhaseNestedInput
  }

  export type ProjectPhaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    status?: EnumPhaseStatusFieldUpdateOperationsInput | $Enums.PhaseStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trelloListId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUncheckedUpdateManyWithoutPhaseNestedInput
  }

  export type ProjectPhaseCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    orderIndex?: number
    status?: $Enums.PhaseStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    deliverDate?: Date | string | null
    trelloListId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
  }

  export type ProjectPhaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    status?: EnumPhaseStatusFieldUpdateOperationsInput | $Enums.PhaseStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trelloListId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectPhaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    status?: EnumPhaseStatusFieldUpdateOperationsInput | $Enums.PhaseStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trelloListId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type EmailWhitelistCreateInput = {
    id?: string
    email: string
    status?: $Enums.WhitelistStatus
    role?: $Enums.UserRole
    addedBy?: string | null
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailWhitelistUncheckedCreateInput = {
    id?: string
    email: string
    status?: $Enums.WhitelistStatus
    role?: $Enums.UserRole
    addedBy?: string | null
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailWhitelistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumWhitelistStatusFieldUpdateOperationsInput | $Enums.WhitelistStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailWhitelistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumWhitelistStatusFieldUpdateOperationsInput | $Enums.WhitelistStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailWhitelistCreateManyInput = {
    id?: string
    email: string
    status?: $Enums.WhitelistStatus
    role?: $Enums.UserRole
    addedBy?: string | null
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailWhitelistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumWhitelistStatusFieldUpdateOperationsInput | $Enums.WhitelistStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailWhitelistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumWhitelistStatusFieldUpdateOperationsInput | $Enums.WhitelistStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type CheckinListRelationFilter = {
    every?: CheckinWhereInput
    some?: CheckinWhereInput
    none?: CheckinWhereInput
  }

  export type ProjectMemberListRelationFilter = {
    every?: ProjectMemberWhereInput
    some?: ProjectMemberWhereInput
    none?: ProjectMemberWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CheckinOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    auth0Id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    picture?: SortOrder
    trelloMemberId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    auth0Id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    picture?: SortOrder
    trelloMemberId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    auth0Id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    picture?: SortOrder
    trelloMemberId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type WorksiteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    checkinStartTime?: SortOrder
    checkinEndTime?: SortOrder
    checkoutStartTime?: SortOrder
    checkoutEndTime?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorksiteAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
  }

  export type WorksiteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    checkinStartTime?: SortOrder
    checkinEndTime?: SortOrder
    checkoutStartTime?: SortOrder
    checkoutEndTime?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorksiteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
    checkinStartTime?: SortOrder
    checkinEndTime?: SortOrder
    checkoutStartTime?: SortOrder
    checkoutEndTime?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorksiteSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    radius?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumCheckinTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckinType | EnumCheckinTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CheckinType[] | ListEnumCheckinTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckinType[] | ListEnumCheckinTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckinTypeFilter<$PrismaModel> | $Enums.CheckinType
  }

  export type EnumLocationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationType | EnumLocationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LocationType[] | ListEnumLocationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LocationType[] | ListEnumLocationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationTypeFilter<$PrismaModel> | $Enums.LocationType
  }

  export type EnumLeaveTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeFilter<$PrismaModel> | $Enums.LeaveType
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WorksiteNullableRelationFilter = {
    is?: WorksiteWhereInput | null
    isNot?: WorksiteWhereInput | null
  }

  export type CheckinCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    location?: SortOrder
    leaveType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    distance?: SortOrder
    photo?: SortOrder
    reason?: SortOrder
    notes?: SortOrder
    isSystemGenerated?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    worksiteId?: SortOrder
  }

  export type CheckinAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    distance?: SortOrder
  }

  export type CheckinMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    location?: SortOrder
    leaveType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    distance?: SortOrder
    photo?: SortOrder
    reason?: SortOrder
    notes?: SortOrder
    isSystemGenerated?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    worksiteId?: SortOrder
  }

  export type CheckinMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    location?: SortOrder
    leaveType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    distance?: SortOrder
    photo?: SortOrder
    reason?: SortOrder
    notes?: SortOrder
    isSystemGenerated?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    worksiteId?: SortOrder
  }

  export type CheckinSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    distance?: SortOrder
  }

  export type EnumCheckinTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckinType | EnumCheckinTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CheckinType[] | ListEnumCheckinTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckinType[] | ListEnumCheckinTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckinTypeWithAggregatesFilter<$PrismaModel> | $Enums.CheckinType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCheckinTypeFilter<$PrismaModel>
    _max?: NestedEnumCheckinTypeFilter<$PrismaModel>
  }

  export type EnumLocationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationType | EnumLocationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LocationType[] | ListEnumLocationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LocationType[] | ListEnumLocationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationTypeWithAggregatesFilter<$PrismaModel> | $Enums.LocationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocationTypeFilter<$PrismaModel>
    _max?: NestedEnumLocationTypeFilter<$PrismaModel>
  }

  export type EnumLeaveTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeWithAggregatesFilter<$PrismaModel> | $Enums.LeaveType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveTypeFilter<$PrismaModel>
    _max?: NestedEnumLeaveTypeFilter<$PrismaModel>
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ProjectPhaseListRelationFilter = {
    every?: ProjectPhaseWhereInput
    some?: ProjectPhaseWhereInput
    none?: ProjectPhaseWhereInput
  }

  export type ProjectPhaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    key?: SortOrder
    trelloBoardId?: SortOrder
    trelloTag?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    dueDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    key?: SortOrder
    trelloBoardId?: SortOrder
    trelloTag?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    dueDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    key?: SortOrder
    trelloBoardId?: SortOrder
    trelloTag?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    dueDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type EnumTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityFilter<$PrismaModel> | $Enums.TaskPriority
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ProjectNullableRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type ProjectPhaseNullableRelationFilter = {
    is?: ProjectPhaseWhereInput | null
    isNot?: ProjectPhaseWhereInput | null
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    trelloCardId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    assignedUserId?: SortOrder
    worksiteId?: SortOrder
    projectId?: SortOrder
    phaseId?: SortOrder
    startDate?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    trelloCardId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    assignedUserId?: SortOrder
    worksiteId?: SortOrder
    projectId?: SortOrder
    phaseId?: SortOrder
    startDate?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    trelloCardId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    assignedUserId?: SortOrder
    worksiteId?: SortOrder
    projectId?: SortOrder
    phaseId?: SortOrder
    startDate?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type EnumTaskPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TaskPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskPriorityFilter<$PrismaModel>
    _max?: NestedEnumTaskPriorityFilter<$PrismaModel>
  }

  export type EnumProjectRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectRole | EnumProjectRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectRole[] | ListEnumProjectRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectRole[] | ListEnumProjectRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectRoleFilter<$PrismaModel> | $Enums.ProjectRole
  }

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectMemberUserIdProjectIdCompoundUniqueInput = {
    userId: string
    projectId: string
  }

  export type ProjectMemberCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
    isActive?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
    isActive?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectMemberMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
    isActive?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
  }

  export type EnumProjectRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectRole | EnumProjectRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectRole[] | ListEnumProjectRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectRole[] | ListEnumProjectRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectRoleWithAggregatesFilter<$PrismaModel> | $Enums.ProjectRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectRoleFilter<$PrismaModel>
    _max?: NestedEnumProjectRoleFilter<$PrismaModel>
  }

  export type EnumPhaseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PhaseStatus | EnumPhaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PhaseStatus[] | ListEnumPhaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PhaseStatus[] | ListEnumPhaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPhaseStatusFilter<$PrismaModel> | $Enums.PhaseStatus
  }

  export type ProjectPhaseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    orderIndex?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    dueDate?: SortOrder
    deliverDate?: SortOrder
    trelloListId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectPhaseAvgOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type ProjectPhaseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    orderIndex?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    dueDate?: SortOrder
    deliverDate?: SortOrder
    trelloListId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectPhaseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    orderIndex?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    dueDate?: SortOrder
    deliverDate?: SortOrder
    trelloListId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectPhaseSumOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type EnumPhaseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PhaseStatus | EnumPhaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PhaseStatus[] | ListEnumPhaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PhaseStatus[] | ListEnumPhaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPhaseStatusWithAggregatesFilter<$PrismaModel> | $Enums.PhaseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPhaseStatusFilter<$PrismaModel>
    _max?: NestedEnumPhaseStatusFilter<$PrismaModel>
  }

  export type EnumWhitelistStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WhitelistStatus | EnumWhitelistStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WhitelistStatus[] | ListEnumWhitelistStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WhitelistStatus[] | ListEnumWhitelistStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWhitelistStatusFilter<$PrismaModel> | $Enums.WhitelistStatus
  }

  export type EmailWhitelistCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    role?: SortOrder
    addedBy?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailWhitelistMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    role?: SortOrder
    addedBy?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailWhitelistMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    role?: SortOrder
    addedBy?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumWhitelistStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WhitelistStatus | EnumWhitelistStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WhitelistStatus[] | ListEnumWhitelistStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WhitelistStatus[] | ListEnumWhitelistStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWhitelistStatusWithAggregatesFilter<$PrismaModel> | $Enums.WhitelistStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWhitelistStatusFilter<$PrismaModel>
    _max?: NestedEnumWhitelistStatusFilter<$PrismaModel>
  }

  export type TaskCreateNestedManyWithoutAssignedUserInput = {
    create?: XOR<TaskCreateWithoutAssignedUserInput, TaskUncheckedCreateWithoutAssignedUserInput> | TaskCreateWithoutAssignedUserInput[] | TaskUncheckedCreateWithoutAssignedUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedUserInput | TaskCreateOrConnectWithoutAssignedUserInput[]
    createMany?: TaskCreateManyAssignedUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type CheckinCreateNestedManyWithoutUserInput = {
    create?: XOR<CheckinCreateWithoutUserInput, CheckinUncheckedCreateWithoutUserInput> | CheckinCreateWithoutUserInput[] | CheckinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckinCreateOrConnectWithoutUserInput | CheckinCreateOrConnectWithoutUserInput[]
    createMany?: CheckinCreateManyUserInputEnvelope
    connect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
  }

  export type ProjectMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput> | ProjectMemberCreateWithoutUserInput[] | ProjectMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput | ProjectMemberCreateOrConnectWithoutUserInput[]
    createMany?: ProjectMemberCreateManyUserInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutAssignedUserInput = {
    create?: XOR<TaskCreateWithoutAssignedUserInput, TaskUncheckedCreateWithoutAssignedUserInput> | TaskCreateWithoutAssignedUserInput[] | TaskUncheckedCreateWithoutAssignedUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedUserInput | TaskCreateOrConnectWithoutAssignedUserInput[]
    createMany?: TaskCreateManyAssignedUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type CheckinUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CheckinCreateWithoutUserInput, CheckinUncheckedCreateWithoutUserInput> | CheckinCreateWithoutUserInput[] | CheckinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckinCreateOrConnectWithoutUserInput | CheckinCreateOrConnectWithoutUserInput[]
    createMany?: CheckinCreateManyUserInputEnvelope
    connect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
  }

  export type ProjectMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput> | ProjectMemberCreateWithoutUserInput[] | ProjectMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput | ProjectMemberCreateOrConnectWithoutUserInput[]
    createMany?: ProjectMemberCreateManyUserInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TaskUpdateManyWithoutAssignedUserNestedInput = {
    create?: XOR<TaskCreateWithoutAssignedUserInput, TaskUncheckedCreateWithoutAssignedUserInput> | TaskCreateWithoutAssignedUserInput[] | TaskUncheckedCreateWithoutAssignedUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedUserInput | TaskCreateOrConnectWithoutAssignedUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssignedUserInput | TaskUpsertWithWhereUniqueWithoutAssignedUserInput[]
    createMany?: TaskCreateManyAssignedUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssignedUserInput | TaskUpdateWithWhereUniqueWithoutAssignedUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssignedUserInput | TaskUpdateManyWithWhereWithoutAssignedUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type CheckinUpdateManyWithoutUserNestedInput = {
    create?: XOR<CheckinCreateWithoutUserInput, CheckinUncheckedCreateWithoutUserInput> | CheckinCreateWithoutUserInput[] | CheckinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckinCreateOrConnectWithoutUserInput | CheckinCreateOrConnectWithoutUserInput[]
    upsert?: CheckinUpsertWithWhereUniqueWithoutUserInput | CheckinUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CheckinCreateManyUserInputEnvelope
    set?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    disconnect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    delete?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    connect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    update?: CheckinUpdateWithWhereUniqueWithoutUserInput | CheckinUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CheckinUpdateManyWithWhereWithoutUserInput | CheckinUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CheckinScalarWhereInput | CheckinScalarWhereInput[]
  }

  export type ProjectMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput> | ProjectMemberCreateWithoutUserInput[] | ProjectMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput | ProjectMemberCreateOrConnectWithoutUserInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutUserInput | ProjectMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectMemberCreateManyUserInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutUserInput | ProjectMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutUserInput | ProjectMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutAssignedUserNestedInput = {
    create?: XOR<TaskCreateWithoutAssignedUserInput, TaskUncheckedCreateWithoutAssignedUserInput> | TaskCreateWithoutAssignedUserInput[] | TaskUncheckedCreateWithoutAssignedUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedUserInput | TaskCreateOrConnectWithoutAssignedUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssignedUserInput | TaskUpsertWithWhereUniqueWithoutAssignedUserInput[]
    createMany?: TaskCreateManyAssignedUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssignedUserInput | TaskUpdateWithWhereUniqueWithoutAssignedUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssignedUserInput | TaskUpdateManyWithWhereWithoutAssignedUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type CheckinUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CheckinCreateWithoutUserInput, CheckinUncheckedCreateWithoutUserInput> | CheckinCreateWithoutUserInput[] | CheckinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckinCreateOrConnectWithoutUserInput | CheckinCreateOrConnectWithoutUserInput[]
    upsert?: CheckinUpsertWithWhereUniqueWithoutUserInput | CheckinUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CheckinCreateManyUserInputEnvelope
    set?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    disconnect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    delete?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    connect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    update?: CheckinUpdateWithWhereUniqueWithoutUserInput | CheckinUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CheckinUpdateManyWithWhereWithoutUserInput | CheckinUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CheckinScalarWhereInput | CheckinScalarWhereInput[]
  }

  export type ProjectMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput> | ProjectMemberCreateWithoutUserInput[] | ProjectMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput | ProjectMemberCreateOrConnectWithoutUserInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutUserInput | ProjectMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectMemberCreateManyUserInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutUserInput | ProjectMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutUserInput | ProjectMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }

  export type CheckinCreateNestedManyWithoutWorksiteInput = {
    create?: XOR<CheckinCreateWithoutWorksiteInput, CheckinUncheckedCreateWithoutWorksiteInput> | CheckinCreateWithoutWorksiteInput[] | CheckinUncheckedCreateWithoutWorksiteInput[]
    connectOrCreate?: CheckinCreateOrConnectWithoutWorksiteInput | CheckinCreateOrConnectWithoutWorksiteInput[]
    createMany?: CheckinCreateManyWorksiteInputEnvelope
    connect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
  }

  export type CheckinUncheckedCreateNestedManyWithoutWorksiteInput = {
    create?: XOR<CheckinCreateWithoutWorksiteInput, CheckinUncheckedCreateWithoutWorksiteInput> | CheckinCreateWithoutWorksiteInput[] | CheckinUncheckedCreateWithoutWorksiteInput[]
    connectOrCreate?: CheckinCreateOrConnectWithoutWorksiteInput | CheckinCreateOrConnectWithoutWorksiteInput[]
    createMany?: CheckinCreateManyWorksiteInputEnvelope
    connect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CheckinUpdateManyWithoutWorksiteNestedInput = {
    create?: XOR<CheckinCreateWithoutWorksiteInput, CheckinUncheckedCreateWithoutWorksiteInput> | CheckinCreateWithoutWorksiteInput[] | CheckinUncheckedCreateWithoutWorksiteInput[]
    connectOrCreate?: CheckinCreateOrConnectWithoutWorksiteInput | CheckinCreateOrConnectWithoutWorksiteInput[]
    upsert?: CheckinUpsertWithWhereUniqueWithoutWorksiteInput | CheckinUpsertWithWhereUniqueWithoutWorksiteInput[]
    createMany?: CheckinCreateManyWorksiteInputEnvelope
    set?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    disconnect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    delete?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    connect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    update?: CheckinUpdateWithWhereUniqueWithoutWorksiteInput | CheckinUpdateWithWhereUniqueWithoutWorksiteInput[]
    updateMany?: CheckinUpdateManyWithWhereWithoutWorksiteInput | CheckinUpdateManyWithWhereWithoutWorksiteInput[]
    deleteMany?: CheckinScalarWhereInput | CheckinScalarWhereInput[]
  }

  export type CheckinUncheckedUpdateManyWithoutWorksiteNestedInput = {
    create?: XOR<CheckinCreateWithoutWorksiteInput, CheckinUncheckedCreateWithoutWorksiteInput> | CheckinCreateWithoutWorksiteInput[] | CheckinUncheckedCreateWithoutWorksiteInput[]
    connectOrCreate?: CheckinCreateOrConnectWithoutWorksiteInput | CheckinCreateOrConnectWithoutWorksiteInput[]
    upsert?: CheckinUpsertWithWhereUniqueWithoutWorksiteInput | CheckinUpsertWithWhereUniqueWithoutWorksiteInput[]
    createMany?: CheckinCreateManyWorksiteInputEnvelope
    set?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    disconnect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    delete?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    connect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    update?: CheckinUpdateWithWhereUniqueWithoutWorksiteInput | CheckinUpdateWithWhereUniqueWithoutWorksiteInput[]
    updateMany?: CheckinUpdateManyWithWhereWithoutWorksiteInput | CheckinUpdateManyWithWhereWithoutWorksiteInput[]
    deleteMany?: CheckinScalarWhereInput | CheckinScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCheckinsInput = {
    create?: XOR<UserCreateWithoutCheckinsInput, UserUncheckedCreateWithoutCheckinsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCheckinsInput
    connect?: UserWhereUniqueInput
  }

  export type WorksiteCreateNestedOneWithoutCheckinsInput = {
    create?: XOR<WorksiteCreateWithoutCheckinsInput, WorksiteUncheckedCreateWithoutCheckinsInput>
    connectOrCreate?: WorksiteCreateOrConnectWithoutCheckinsInput
    connect?: WorksiteWhereUniqueInput
  }

  export type EnumCheckinTypeFieldUpdateOperationsInput = {
    set?: $Enums.CheckinType
  }

  export type EnumLocationTypeFieldUpdateOperationsInput = {
    set?: $Enums.LocationType
  }

  export type EnumLeaveTypeFieldUpdateOperationsInput = {
    set?: $Enums.LeaveType
  }

  export type UserUpdateOneRequiredWithoutCheckinsNestedInput = {
    create?: XOR<UserCreateWithoutCheckinsInput, UserUncheckedCreateWithoutCheckinsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCheckinsInput
    upsert?: UserUpsertWithoutCheckinsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCheckinsInput, UserUpdateWithoutCheckinsInput>, UserUncheckedUpdateWithoutCheckinsInput>
  }

  export type WorksiteUpdateOneWithoutCheckinsNestedInput = {
    create?: XOR<WorksiteCreateWithoutCheckinsInput, WorksiteUncheckedCreateWithoutCheckinsInput>
    connectOrCreate?: WorksiteCreateOrConnectWithoutCheckinsInput
    upsert?: WorksiteUpsertWithoutCheckinsInput
    disconnect?: WorksiteWhereInput | boolean
    delete?: WorksiteWhereInput | boolean
    connect?: WorksiteWhereUniqueInput
    update?: XOR<XOR<WorksiteUpdateToOneWithWhereWithoutCheckinsInput, WorksiteUpdateWithoutCheckinsInput>, WorksiteUncheckedUpdateWithoutCheckinsInput>
  }

  export type TaskCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ProjectMemberCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type ProjectPhaseCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectPhaseCreateWithoutProjectInput, ProjectPhaseUncheckedCreateWithoutProjectInput> | ProjectPhaseCreateWithoutProjectInput[] | ProjectPhaseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectPhaseCreateOrConnectWithoutProjectInput | ProjectPhaseCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectPhaseCreateManyProjectInputEnvelope
    connect?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ProjectMemberUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type ProjectPhaseUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectPhaseCreateWithoutProjectInput, ProjectPhaseUncheckedCreateWithoutProjectInput> | ProjectPhaseCreateWithoutProjectInput[] | ProjectPhaseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectPhaseCreateOrConnectWithoutProjectInput | ProjectPhaseCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectPhaseCreateManyProjectInputEnvelope
    connect?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TaskUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ProjectMemberUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutProjectInput | ProjectMemberUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutProjectInput | ProjectMemberUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutProjectInput | ProjectMemberUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }

  export type ProjectPhaseUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectPhaseCreateWithoutProjectInput, ProjectPhaseUncheckedCreateWithoutProjectInput> | ProjectPhaseCreateWithoutProjectInput[] | ProjectPhaseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectPhaseCreateOrConnectWithoutProjectInput | ProjectPhaseCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectPhaseUpsertWithWhereUniqueWithoutProjectInput | ProjectPhaseUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectPhaseCreateManyProjectInputEnvelope
    set?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
    disconnect?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
    delete?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
    connect?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
    update?: ProjectPhaseUpdateWithWhereUniqueWithoutProjectInput | ProjectPhaseUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectPhaseUpdateManyWithWhereWithoutProjectInput | ProjectPhaseUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectPhaseScalarWhereInput | ProjectPhaseScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutProjectInput | ProjectMemberUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutProjectInput | ProjectMemberUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutProjectInput | ProjectMemberUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }

  export type ProjectPhaseUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectPhaseCreateWithoutProjectInput, ProjectPhaseUncheckedCreateWithoutProjectInput> | ProjectPhaseCreateWithoutProjectInput[] | ProjectPhaseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectPhaseCreateOrConnectWithoutProjectInput | ProjectPhaseCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectPhaseUpsertWithWhereUniqueWithoutProjectInput | ProjectPhaseUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectPhaseCreateManyProjectInputEnvelope
    set?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
    disconnect?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
    delete?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
    connect?: ProjectPhaseWhereUniqueInput | ProjectPhaseWhereUniqueInput[]
    update?: ProjectPhaseUpdateWithWhereUniqueWithoutProjectInput | ProjectPhaseUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectPhaseUpdateManyWithWhereWithoutProjectInput | ProjectPhaseUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectPhaseScalarWhereInput | ProjectPhaseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTasksInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutTasksInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectPhaseCreateNestedOneWithoutTasksInput = {
    create?: XOR<ProjectPhaseCreateWithoutTasksInput, ProjectPhaseUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectPhaseCreateOrConnectWithoutTasksInput
    connect?: ProjectPhaseWhereUniqueInput
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type EnumTaskPriorityFieldUpdateOperationsInput = {
    set?: $Enums.TaskPriority
  }

  export type UserUpdateOneWithoutTasksNestedInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    upsert?: UserUpsertWithoutTasksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksInput, UserUpdateWithoutTasksInput>, UserUncheckedUpdateWithoutTasksInput>
  }

  export type ProjectUpdateOneWithoutTasksNestedInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    upsert?: ProjectUpsertWithoutTasksInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTasksInput, ProjectUpdateWithoutTasksInput>, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type ProjectPhaseUpdateOneWithoutTasksNestedInput = {
    create?: XOR<ProjectPhaseCreateWithoutTasksInput, ProjectPhaseUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectPhaseCreateOrConnectWithoutTasksInput
    upsert?: ProjectPhaseUpsertWithoutTasksInput
    disconnect?: ProjectPhaseWhereInput | boolean
    delete?: ProjectPhaseWhereInput | boolean
    connect?: ProjectPhaseWhereUniqueInput
    update?: XOR<XOR<ProjectPhaseUpdateToOneWithWhereWithoutTasksInput, ProjectPhaseUpdateWithoutTasksInput>, ProjectPhaseUncheckedUpdateWithoutTasksInput>
  }

  export type UserCreateNestedOneWithoutProjectMembersInput = {
    create?: XOR<UserCreateWithoutProjectMembersInput, UserUncheckedCreateWithoutProjectMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectMembersInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutMembersInput = {
    create?: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMembersInput
    connect?: ProjectWhereUniqueInput
  }

  export type EnumProjectRoleFieldUpdateOperationsInput = {
    set?: $Enums.ProjectRole
  }

  export type UserUpdateOneRequiredWithoutProjectMembersNestedInput = {
    create?: XOR<UserCreateWithoutProjectMembersInput, UserUncheckedCreateWithoutProjectMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectMembersInput
    upsert?: UserUpsertWithoutProjectMembersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectMembersInput, UserUpdateWithoutProjectMembersInput>, UserUncheckedUpdateWithoutProjectMembersInput>
  }

  export type ProjectUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMembersInput
    upsert?: ProjectUpsertWithoutMembersInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutMembersInput, ProjectUpdateWithoutMembersInput>, ProjectUncheckedUpdateWithoutMembersInput>
  }

  export type ProjectCreateNestedOneWithoutPhasesInput = {
    create?: XOR<ProjectCreateWithoutPhasesInput, ProjectUncheckedCreateWithoutPhasesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPhasesInput
    connect?: ProjectWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutPhaseInput = {
    create?: XOR<TaskCreateWithoutPhaseInput, TaskUncheckedCreateWithoutPhaseInput> | TaskCreateWithoutPhaseInput[] | TaskUncheckedCreateWithoutPhaseInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutPhaseInput | TaskCreateOrConnectWithoutPhaseInput[]
    createMany?: TaskCreateManyPhaseInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutPhaseInput = {
    create?: XOR<TaskCreateWithoutPhaseInput, TaskUncheckedCreateWithoutPhaseInput> | TaskCreateWithoutPhaseInput[] | TaskUncheckedCreateWithoutPhaseInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutPhaseInput | TaskCreateOrConnectWithoutPhaseInput[]
    createMany?: TaskCreateManyPhaseInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type EnumPhaseStatusFieldUpdateOperationsInput = {
    set?: $Enums.PhaseStatus
  }

  export type ProjectUpdateOneRequiredWithoutPhasesNestedInput = {
    create?: XOR<ProjectCreateWithoutPhasesInput, ProjectUncheckedCreateWithoutPhasesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPhasesInput
    upsert?: ProjectUpsertWithoutPhasesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutPhasesInput, ProjectUpdateWithoutPhasesInput>, ProjectUncheckedUpdateWithoutPhasesInput>
  }

  export type TaskUpdateManyWithoutPhaseNestedInput = {
    create?: XOR<TaskCreateWithoutPhaseInput, TaskUncheckedCreateWithoutPhaseInput> | TaskCreateWithoutPhaseInput[] | TaskUncheckedCreateWithoutPhaseInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutPhaseInput | TaskCreateOrConnectWithoutPhaseInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutPhaseInput | TaskUpsertWithWhereUniqueWithoutPhaseInput[]
    createMany?: TaskCreateManyPhaseInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutPhaseInput | TaskUpdateWithWhereUniqueWithoutPhaseInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutPhaseInput | TaskUpdateManyWithWhereWithoutPhaseInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutPhaseNestedInput = {
    create?: XOR<TaskCreateWithoutPhaseInput, TaskUncheckedCreateWithoutPhaseInput> | TaskCreateWithoutPhaseInput[] | TaskUncheckedCreateWithoutPhaseInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutPhaseInput | TaskCreateOrConnectWithoutPhaseInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutPhaseInput | TaskUpsertWithWhereUniqueWithoutPhaseInput[]
    createMany?: TaskCreateManyPhaseInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutPhaseInput | TaskUpdateWithWhereUniqueWithoutPhaseInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutPhaseInput | TaskUpdateManyWithWhereWithoutPhaseInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type EnumWhitelistStatusFieldUpdateOperationsInput = {
    set?: $Enums.WhitelistStatus
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumCheckinTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckinType | EnumCheckinTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CheckinType[] | ListEnumCheckinTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckinType[] | ListEnumCheckinTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckinTypeFilter<$PrismaModel> | $Enums.CheckinType
  }

  export type NestedEnumLocationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationType | EnumLocationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LocationType[] | ListEnumLocationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LocationType[] | ListEnumLocationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationTypeFilter<$PrismaModel> | $Enums.LocationType
  }

  export type NestedEnumLeaveTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeFilter<$PrismaModel> | $Enums.LeaveType
  }

  export type NestedEnumCheckinTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckinType | EnumCheckinTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CheckinType[] | ListEnumCheckinTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckinType[] | ListEnumCheckinTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckinTypeWithAggregatesFilter<$PrismaModel> | $Enums.CheckinType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCheckinTypeFilter<$PrismaModel>
    _max?: NestedEnumCheckinTypeFilter<$PrismaModel>
  }

  export type NestedEnumLocationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationType | EnumLocationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LocationType[] | ListEnumLocationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LocationType[] | ListEnumLocationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationTypeWithAggregatesFilter<$PrismaModel> | $Enums.LocationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocationTypeFilter<$PrismaModel>
    _max?: NestedEnumLocationTypeFilter<$PrismaModel>
  }

  export type NestedEnumLeaveTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeWithAggregatesFilter<$PrismaModel> | $Enums.LeaveType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveTypeFilter<$PrismaModel>
    _max?: NestedEnumLeaveTypeFilter<$PrismaModel>
  }

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedEnumTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityFilter<$PrismaModel> | $Enums.TaskPriority
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TaskPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskPriorityFilter<$PrismaModel>
    _max?: NestedEnumTaskPriorityFilter<$PrismaModel>
  }

  export type NestedEnumProjectRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectRole | EnumProjectRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectRole[] | ListEnumProjectRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectRole[] | ListEnumProjectRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectRoleFilter<$PrismaModel> | $Enums.ProjectRole
  }

  export type NestedEnumProjectRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectRole | EnumProjectRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectRole[] | ListEnumProjectRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectRole[] | ListEnumProjectRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectRoleWithAggregatesFilter<$PrismaModel> | $Enums.ProjectRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectRoleFilter<$PrismaModel>
    _max?: NestedEnumProjectRoleFilter<$PrismaModel>
  }

  export type NestedEnumPhaseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PhaseStatus | EnumPhaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PhaseStatus[] | ListEnumPhaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PhaseStatus[] | ListEnumPhaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPhaseStatusFilter<$PrismaModel> | $Enums.PhaseStatus
  }

  export type NestedEnumPhaseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PhaseStatus | EnumPhaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PhaseStatus[] | ListEnumPhaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PhaseStatus[] | ListEnumPhaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPhaseStatusWithAggregatesFilter<$PrismaModel> | $Enums.PhaseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPhaseStatusFilter<$PrismaModel>
    _max?: NestedEnumPhaseStatusFilter<$PrismaModel>
  }

  export type NestedEnumWhitelistStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WhitelistStatus | EnumWhitelistStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WhitelistStatus[] | ListEnumWhitelistStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WhitelistStatus[] | ListEnumWhitelistStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWhitelistStatusFilter<$PrismaModel> | $Enums.WhitelistStatus
  }

  export type NestedEnumWhitelistStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WhitelistStatus | EnumWhitelistStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WhitelistStatus[] | ListEnumWhitelistStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WhitelistStatus[] | ListEnumWhitelistStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWhitelistStatusWithAggregatesFilter<$PrismaModel> | $Enums.WhitelistStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWhitelistStatusFilter<$PrismaModel>
    _max?: NestedEnumWhitelistStatusFilter<$PrismaModel>
  }

  export type TaskCreateWithoutAssignedUserInput = {
    id?: string
    trelloCardId: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    worksiteId?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project?: ProjectCreateNestedOneWithoutTasksInput
    phase?: ProjectPhaseCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutAssignedUserInput = {
    id?: string
    trelloCardId: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    worksiteId?: string | null
    projectId?: string | null
    phaseId?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutAssignedUserInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAssignedUserInput, TaskUncheckedCreateWithoutAssignedUserInput>
  }

  export type TaskCreateManyAssignedUserInputEnvelope = {
    data: TaskCreateManyAssignedUserInput | TaskCreateManyAssignedUserInput[]
    skipDuplicates?: boolean
  }

  export type CheckinCreateWithoutUserInput = {
    id?: string
    type: $Enums.CheckinType
    location?: $Enums.LocationType
    leaveType?: $Enums.LeaveType
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    distance: Decimal | DecimalJsLike | number | string
    photo?: string | null
    reason?: string | null
    notes?: string | null
    isSystemGenerated?: boolean
    createdAt?: Date | string
    worksite?: WorksiteCreateNestedOneWithoutCheckinsInput
  }

  export type CheckinUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.CheckinType
    location?: $Enums.LocationType
    leaveType?: $Enums.LeaveType
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    distance: Decimal | DecimalJsLike | number | string
    photo?: string | null
    reason?: string | null
    notes?: string | null
    isSystemGenerated?: boolean
    createdAt?: Date | string
    worksiteId?: string | null
  }

  export type CheckinCreateOrConnectWithoutUserInput = {
    where: CheckinWhereUniqueInput
    create: XOR<CheckinCreateWithoutUserInput, CheckinUncheckedCreateWithoutUserInput>
  }

  export type CheckinCreateManyUserInputEnvelope = {
    data: CheckinCreateManyUserInput | CheckinCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectMemberCreateWithoutUserInput = {
    id?: string
    role?: $Enums.ProjectRole
    joinedAt?: Date | string
    leftAt?: Date | string | null
    isActive?: boolean
    project: ProjectCreateNestedOneWithoutMembersInput
  }

  export type ProjectMemberUncheckedCreateWithoutUserInput = {
    id?: string
    role?: $Enums.ProjectRole
    joinedAt?: Date | string
    leftAt?: Date | string | null
    isActive?: boolean
    projectId: string
  }

  export type ProjectMemberCreateOrConnectWithoutUserInput = {
    where: ProjectMemberWhereUniqueInput
    create: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput>
  }

  export type ProjectMemberCreateManyUserInputEnvelope = {
    data: ProjectMemberCreateManyUserInput | ProjectMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutAssignedUserInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutAssignedUserInput, TaskUncheckedUpdateWithoutAssignedUserInput>
    create: XOR<TaskCreateWithoutAssignedUserInput, TaskUncheckedCreateWithoutAssignedUserInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutAssignedUserInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutAssignedUserInput, TaskUncheckedUpdateWithoutAssignedUserInput>
  }

  export type TaskUpdateManyWithWhereWithoutAssignedUserInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutAssignedUserInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    trelloCardId?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    assignedUserId?: StringNullableFilter<"Task"> | string | null
    worksiteId?: StringNullableFilter<"Task"> | string | null
    projectId?: StringNullableFilter<"Task"> | string | null
    phaseId?: StringNullableFilter<"Task"> | string | null
    startDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type CheckinUpsertWithWhereUniqueWithoutUserInput = {
    where: CheckinWhereUniqueInput
    update: XOR<CheckinUpdateWithoutUserInput, CheckinUncheckedUpdateWithoutUserInput>
    create: XOR<CheckinCreateWithoutUserInput, CheckinUncheckedCreateWithoutUserInput>
  }

  export type CheckinUpdateWithWhereUniqueWithoutUserInput = {
    where: CheckinWhereUniqueInput
    data: XOR<CheckinUpdateWithoutUserInput, CheckinUncheckedUpdateWithoutUserInput>
  }

  export type CheckinUpdateManyWithWhereWithoutUserInput = {
    where: CheckinScalarWhereInput
    data: XOR<CheckinUpdateManyMutationInput, CheckinUncheckedUpdateManyWithoutUserInput>
  }

  export type CheckinScalarWhereInput = {
    AND?: CheckinScalarWhereInput | CheckinScalarWhereInput[]
    OR?: CheckinScalarWhereInput[]
    NOT?: CheckinScalarWhereInput | CheckinScalarWhereInput[]
    id?: StringFilter<"Checkin"> | string
    type?: EnumCheckinTypeFilter<"Checkin"> | $Enums.CheckinType
    location?: EnumLocationTypeFilter<"Checkin"> | $Enums.LocationType
    leaveType?: EnumLeaveTypeFilter<"Checkin"> | $Enums.LeaveType
    latitude?: DecimalFilter<"Checkin"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Checkin"> | Decimal | DecimalJsLike | number | string
    distance?: DecimalFilter<"Checkin"> | Decimal | DecimalJsLike | number | string
    photo?: StringNullableFilter<"Checkin"> | string | null
    reason?: StringNullableFilter<"Checkin"> | string | null
    notes?: StringNullableFilter<"Checkin"> | string | null
    isSystemGenerated?: BoolFilter<"Checkin"> | boolean
    createdAt?: DateTimeFilter<"Checkin"> | Date | string
    userId?: StringFilter<"Checkin"> | string
    worksiteId?: StringNullableFilter<"Checkin"> | string | null
  }

  export type ProjectMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectMemberWhereUniqueInput
    update: XOR<ProjectMemberUpdateWithoutUserInput, ProjectMemberUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput>
  }

  export type ProjectMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectMemberWhereUniqueInput
    data: XOR<ProjectMemberUpdateWithoutUserInput, ProjectMemberUncheckedUpdateWithoutUserInput>
  }

  export type ProjectMemberUpdateManyWithWhereWithoutUserInput = {
    where: ProjectMemberScalarWhereInput
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectMemberScalarWhereInput = {
    AND?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
    OR?: ProjectMemberScalarWhereInput[]
    NOT?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
    id?: StringFilter<"ProjectMember"> | string
    role?: EnumProjectRoleFilter<"ProjectMember"> | $Enums.ProjectRole
    joinedAt?: DateTimeFilter<"ProjectMember"> | Date | string
    leftAt?: DateTimeNullableFilter<"ProjectMember"> | Date | string | null
    isActive?: BoolFilter<"ProjectMember"> | boolean
    userId?: StringFilter<"ProjectMember"> | string
    projectId?: StringFilter<"ProjectMember"> | string
  }

  export type CheckinCreateWithoutWorksiteInput = {
    id?: string
    type: $Enums.CheckinType
    location?: $Enums.LocationType
    leaveType?: $Enums.LeaveType
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    distance: Decimal | DecimalJsLike | number | string
    photo?: string | null
    reason?: string | null
    notes?: string | null
    isSystemGenerated?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCheckinsInput
  }

  export type CheckinUncheckedCreateWithoutWorksiteInput = {
    id?: string
    type: $Enums.CheckinType
    location?: $Enums.LocationType
    leaveType?: $Enums.LeaveType
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    distance: Decimal | DecimalJsLike | number | string
    photo?: string | null
    reason?: string | null
    notes?: string | null
    isSystemGenerated?: boolean
    createdAt?: Date | string
    userId: string
  }

  export type CheckinCreateOrConnectWithoutWorksiteInput = {
    where: CheckinWhereUniqueInput
    create: XOR<CheckinCreateWithoutWorksiteInput, CheckinUncheckedCreateWithoutWorksiteInput>
  }

  export type CheckinCreateManyWorksiteInputEnvelope = {
    data: CheckinCreateManyWorksiteInput | CheckinCreateManyWorksiteInput[]
    skipDuplicates?: boolean
  }

  export type CheckinUpsertWithWhereUniqueWithoutWorksiteInput = {
    where: CheckinWhereUniqueInput
    update: XOR<CheckinUpdateWithoutWorksiteInput, CheckinUncheckedUpdateWithoutWorksiteInput>
    create: XOR<CheckinCreateWithoutWorksiteInput, CheckinUncheckedCreateWithoutWorksiteInput>
  }

  export type CheckinUpdateWithWhereUniqueWithoutWorksiteInput = {
    where: CheckinWhereUniqueInput
    data: XOR<CheckinUpdateWithoutWorksiteInput, CheckinUncheckedUpdateWithoutWorksiteInput>
  }

  export type CheckinUpdateManyWithWhereWithoutWorksiteInput = {
    where: CheckinScalarWhereInput
    data: XOR<CheckinUpdateManyMutationInput, CheckinUncheckedUpdateManyWithoutWorksiteInput>
  }

  export type UserCreateWithoutCheckinsInput = {
    id?: string
    auth0Id: string
    email: string
    name?: string | null
    picture?: string | null
    trelloMemberId?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutAssignedUserInput
    projectMembers?: ProjectMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCheckinsInput = {
    id?: string
    auth0Id: string
    email: string
    name?: string | null
    picture?: string | null
    trelloMemberId?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutAssignedUserInput
    projectMembers?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCheckinsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCheckinsInput, UserUncheckedCreateWithoutCheckinsInput>
  }

  export type WorksiteCreateWithoutCheckinsInput = {
    id?: string
    name: string
    description?: string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    radius?: number
    checkinStartTime?: string | null
    checkinEndTime?: string | null
    checkoutStartTime?: string | null
    checkoutEndTime?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorksiteUncheckedCreateWithoutCheckinsInput = {
    id?: string
    name: string
    description?: string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    radius?: number
    checkinStartTime?: string | null
    checkinEndTime?: string | null
    checkoutStartTime?: string | null
    checkoutEndTime?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorksiteCreateOrConnectWithoutCheckinsInput = {
    where: WorksiteWhereUniqueInput
    create: XOR<WorksiteCreateWithoutCheckinsInput, WorksiteUncheckedCreateWithoutCheckinsInput>
  }

  export type UserUpsertWithoutCheckinsInput = {
    update: XOR<UserUpdateWithoutCheckinsInput, UserUncheckedUpdateWithoutCheckinsInput>
    create: XOR<UserCreateWithoutCheckinsInput, UserUncheckedCreateWithoutCheckinsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCheckinsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCheckinsInput, UserUncheckedUpdateWithoutCheckinsInput>
  }

  export type UserUpdateWithoutCheckinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    trelloMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutAssignedUserNestedInput
    projectMembers?: ProjectMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCheckinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    trelloMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutAssignedUserNestedInput
    projectMembers?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorksiteUpsertWithoutCheckinsInput = {
    update: XOR<WorksiteUpdateWithoutCheckinsInput, WorksiteUncheckedUpdateWithoutCheckinsInput>
    create: XOR<WorksiteCreateWithoutCheckinsInput, WorksiteUncheckedCreateWithoutCheckinsInput>
    where?: WorksiteWhereInput
  }

  export type WorksiteUpdateToOneWithWhereWithoutCheckinsInput = {
    where?: WorksiteWhereInput
    data: XOR<WorksiteUpdateWithoutCheckinsInput, WorksiteUncheckedUpdateWithoutCheckinsInput>
  }

  export type WorksiteUpdateWithoutCheckinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    radius?: IntFieldUpdateOperationsInput | number
    checkinStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkinEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkoutStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkoutEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorksiteUncheckedUpdateWithoutCheckinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    radius?: IntFieldUpdateOperationsInput | number
    checkinStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkinEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkoutStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkoutEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateWithoutProjectInput = {
    id?: string
    trelloCardId: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    worksiteId?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedUser?: UserCreateNestedOneWithoutTasksInput
    phase?: ProjectPhaseCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutProjectInput = {
    id?: string
    trelloCardId: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    assignedUserId?: string | null
    worksiteId?: string | null
    phaseId?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutProjectInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskCreateManyProjectInputEnvelope = {
    data: TaskCreateManyProjectInput | TaskCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectMemberCreateWithoutProjectInput = {
    id?: string
    role?: $Enums.ProjectRole
    joinedAt?: Date | string
    leftAt?: Date | string | null
    isActive?: boolean
    user: UserCreateNestedOneWithoutProjectMembersInput
  }

  export type ProjectMemberUncheckedCreateWithoutProjectInput = {
    id?: string
    role?: $Enums.ProjectRole
    joinedAt?: Date | string
    leftAt?: Date | string | null
    isActive?: boolean
    userId: string
  }

  export type ProjectMemberCreateOrConnectWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput
    create: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput>
  }

  export type ProjectMemberCreateManyProjectInputEnvelope = {
    data: ProjectMemberCreateManyProjectInput | ProjectMemberCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectPhaseCreateWithoutProjectInput = {
    id?: string
    name: string
    description?: string | null
    orderIndex?: number
    status?: $Enums.PhaseStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    deliverDate?: Date | string | null
    trelloListId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutPhaseInput
  }

  export type ProjectPhaseUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    description?: string | null
    orderIndex?: number
    status?: $Enums.PhaseStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    deliverDate?: Date | string | null
    trelloListId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutPhaseInput
  }

  export type ProjectPhaseCreateOrConnectWithoutProjectInput = {
    where: ProjectPhaseWhereUniqueInput
    create: XOR<ProjectPhaseCreateWithoutProjectInput, ProjectPhaseUncheckedCreateWithoutProjectInput>
  }

  export type ProjectPhaseCreateManyProjectInputEnvelope = {
    data: ProjectPhaseCreateManyProjectInput | ProjectPhaseCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
  }

  export type TaskUpdateManyWithWhereWithoutProjectInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectMemberUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput
    update: XOR<ProjectMemberUpdateWithoutProjectInput, ProjectMemberUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput>
  }

  export type ProjectMemberUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput
    data: XOR<ProjectMemberUpdateWithoutProjectInput, ProjectMemberUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectMemberUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectMemberScalarWhereInput
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectPhaseUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectPhaseWhereUniqueInput
    update: XOR<ProjectPhaseUpdateWithoutProjectInput, ProjectPhaseUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectPhaseCreateWithoutProjectInput, ProjectPhaseUncheckedCreateWithoutProjectInput>
  }

  export type ProjectPhaseUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectPhaseWhereUniqueInput
    data: XOR<ProjectPhaseUpdateWithoutProjectInput, ProjectPhaseUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectPhaseUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectPhaseScalarWhereInput
    data: XOR<ProjectPhaseUpdateManyMutationInput, ProjectPhaseUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectPhaseScalarWhereInput = {
    AND?: ProjectPhaseScalarWhereInput | ProjectPhaseScalarWhereInput[]
    OR?: ProjectPhaseScalarWhereInput[]
    NOT?: ProjectPhaseScalarWhereInput | ProjectPhaseScalarWhereInput[]
    id?: StringFilter<"ProjectPhase"> | string
    name?: StringFilter<"ProjectPhase"> | string
    description?: StringNullableFilter<"ProjectPhase"> | string | null
    orderIndex?: IntFilter<"ProjectPhase"> | number
    status?: EnumPhaseStatusFilter<"ProjectPhase"> | $Enums.PhaseStatus
    startDate?: DateTimeNullableFilter<"ProjectPhase"> | Date | string | null
    dueDate?: DateTimeNullableFilter<"ProjectPhase"> | Date | string | null
    deliverDate?: DateTimeNullableFilter<"ProjectPhase"> | Date | string | null
    trelloListId?: StringNullableFilter<"ProjectPhase"> | string | null
    createdAt?: DateTimeFilter<"ProjectPhase"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectPhase"> | Date | string
    projectId?: StringFilter<"ProjectPhase"> | string
  }

  export type UserCreateWithoutTasksInput = {
    id?: string
    auth0Id: string
    email: string
    name?: string | null
    picture?: string | null
    trelloMemberId?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    checkins?: CheckinCreateNestedManyWithoutUserInput
    projectMembers?: ProjectMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTasksInput = {
    id?: string
    auth0Id: string
    email: string
    name?: string | null
    picture?: string | null
    trelloMemberId?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    checkins?: CheckinUncheckedCreateNestedManyWithoutUserInput
    projectMembers?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
  }

  export type ProjectCreateWithoutTasksInput = {
    id?: string
    name: string
    description?: string | null
    key: string
    trelloBoardId: string
    trelloTag: string
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
    phases?: ProjectPhaseCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    description?: string | null
    key: string
    trelloBoardId: string
    trelloTag: string
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
    phases?: ProjectPhaseUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTasksInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
  }

  export type ProjectPhaseCreateWithoutTasksInput = {
    id?: string
    name: string
    description?: string | null
    orderIndex?: number
    status?: $Enums.PhaseStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    deliverDate?: Date | string | null
    trelloListId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutPhasesInput
  }

  export type ProjectPhaseUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    description?: string | null
    orderIndex?: number
    status?: $Enums.PhaseStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    deliverDate?: Date | string | null
    trelloListId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
  }

  export type ProjectPhaseCreateOrConnectWithoutTasksInput = {
    where: ProjectPhaseWhereUniqueInput
    create: XOR<ProjectPhaseCreateWithoutTasksInput, ProjectPhaseUncheckedCreateWithoutTasksInput>
  }

  export type UserUpsertWithoutTasksInput = {
    update: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    trelloMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkins?: CheckinUpdateManyWithoutUserNestedInput
    projectMembers?: ProjectMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    trelloMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkins?: CheckinUncheckedUpdateManyWithoutUserNestedInput
    projectMembers?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectUpsertWithoutTasksInput = {
    update: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTasksInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type ProjectUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    trelloBoardId?: StringFieldUpdateOperationsInput | string
    trelloTag?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
    phases?: ProjectPhaseUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    trelloBoardId?: StringFieldUpdateOperationsInput | string
    trelloTag?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
    phases?: ProjectPhaseUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectPhaseUpsertWithoutTasksInput = {
    update: XOR<ProjectPhaseUpdateWithoutTasksInput, ProjectPhaseUncheckedUpdateWithoutTasksInput>
    create: XOR<ProjectPhaseCreateWithoutTasksInput, ProjectPhaseUncheckedCreateWithoutTasksInput>
    where?: ProjectPhaseWhereInput
  }

  export type ProjectPhaseUpdateToOneWithWhereWithoutTasksInput = {
    where?: ProjectPhaseWhereInput
    data: XOR<ProjectPhaseUpdateWithoutTasksInput, ProjectPhaseUncheckedUpdateWithoutTasksInput>
  }

  export type ProjectPhaseUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    status?: EnumPhaseStatusFieldUpdateOperationsInput | $Enums.PhaseStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trelloListId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutPhasesNestedInput
  }

  export type ProjectPhaseUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    status?: EnumPhaseStatusFieldUpdateOperationsInput | $Enums.PhaseStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trelloListId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutProjectMembersInput = {
    id?: string
    auth0Id: string
    email: string
    name?: string | null
    picture?: string | null
    trelloMemberId?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutAssignedUserInput
    checkins?: CheckinCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectMembersInput = {
    id?: string
    auth0Id: string
    email: string
    name?: string | null
    picture?: string | null
    trelloMemberId?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutAssignedUserInput
    checkins?: CheckinUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectMembersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectMembersInput, UserUncheckedCreateWithoutProjectMembersInput>
  }

  export type ProjectCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    key: string
    trelloBoardId: string
    trelloTag: string
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutProjectInput
    phases?: ProjectPhaseCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    key: string
    trelloBoardId: string
    trelloTag: string
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
    phases?: ProjectPhaseUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutMembersInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutProjectMembersInput = {
    update: XOR<UserUpdateWithoutProjectMembersInput, UserUncheckedUpdateWithoutProjectMembersInput>
    create: XOR<UserCreateWithoutProjectMembersInput, UserUncheckedCreateWithoutProjectMembersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectMembersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectMembersInput, UserUncheckedUpdateWithoutProjectMembersInput>
  }

  export type UserUpdateWithoutProjectMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    trelloMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutAssignedUserNestedInput
    checkins?: CheckinUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    trelloMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutAssignedUserNestedInput
    checkins?: CheckinUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectUpsertWithoutMembersInput = {
    update: XOR<ProjectUpdateWithoutMembersInput, ProjectUncheckedUpdateWithoutMembersInput>
    create: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutMembersInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutMembersInput, ProjectUncheckedUpdateWithoutMembersInput>
  }

  export type ProjectUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    trelloBoardId?: StringFieldUpdateOperationsInput | string
    trelloTag?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutProjectNestedInput
    phases?: ProjectPhaseUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    trelloBoardId?: StringFieldUpdateOperationsInput | string
    trelloTag?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
    phases?: ProjectPhaseUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutPhasesInput = {
    id?: string
    name: string
    description?: string | null
    key: string
    trelloBoardId: string
    trelloTag: string
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutProjectInput
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutPhasesInput = {
    id?: string
    name: string
    description?: string | null
    key: string
    trelloBoardId: string
    trelloTag: string
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutPhasesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutPhasesInput, ProjectUncheckedCreateWithoutPhasesInput>
  }

  export type TaskCreateWithoutPhaseInput = {
    id?: string
    trelloCardId: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    worksiteId?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedUser?: UserCreateNestedOneWithoutTasksInput
    project?: ProjectCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutPhaseInput = {
    id?: string
    trelloCardId: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    assignedUserId?: string | null
    worksiteId?: string | null
    projectId?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutPhaseInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutPhaseInput, TaskUncheckedCreateWithoutPhaseInput>
  }

  export type TaskCreateManyPhaseInputEnvelope = {
    data: TaskCreateManyPhaseInput | TaskCreateManyPhaseInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutPhasesInput = {
    update: XOR<ProjectUpdateWithoutPhasesInput, ProjectUncheckedUpdateWithoutPhasesInput>
    create: XOR<ProjectCreateWithoutPhasesInput, ProjectUncheckedCreateWithoutPhasesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutPhasesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutPhasesInput, ProjectUncheckedUpdateWithoutPhasesInput>
  }

  export type ProjectUpdateWithoutPhasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    trelloBoardId?: StringFieldUpdateOperationsInput | string
    trelloTag?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutPhasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    key?: StringFieldUpdateOperationsInput | string
    trelloBoardId?: StringFieldUpdateOperationsInput | string
    trelloTag?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutPhaseInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutPhaseInput, TaskUncheckedUpdateWithoutPhaseInput>
    create: XOR<TaskCreateWithoutPhaseInput, TaskUncheckedCreateWithoutPhaseInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutPhaseInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutPhaseInput, TaskUncheckedUpdateWithoutPhaseInput>
  }

  export type TaskUpdateManyWithWhereWithoutPhaseInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutPhaseInput>
  }

  export type TaskCreateManyAssignedUserInput = {
    id?: string
    trelloCardId: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    worksiteId?: string | null
    projectId?: string | null
    phaseId?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CheckinCreateManyUserInput = {
    id?: string
    type: $Enums.CheckinType
    location?: $Enums.LocationType
    leaveType?: $Enums.LeaveType
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    distance: Decimal | DecimalJsLike | number | string
    photo?: string | null
    reason?: string | null
    notes?: string | null
    isSystemGenerated?: boolean
    createdAt?: Date | string
    worksiteId?: string | null
  }

  export type ProjectMemberCreateManyUserInput = {
    id?: string
    role?: $Enums.ProjectRole
    joinedAt?: Date | string
    leftAt?: Date | string | null
    isActive?: boolean
    projectId: string
  }

  export type TaskUpdateWithoutAssignedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    trelloCardId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    worksiteId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneWithoutTasksNestedInput
    phase?: ProjectPhaseUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutAssignedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    trelloCardId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    worksiteId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    phaseId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutAssignedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    trelloCardId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    worksiteId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    phaseId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckinUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCheckinTypeFieldUpdateOperationsInput | $Enums.CheckinType
    location?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isSystemGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worksite?: WorksiteUpdateOneWithoutCheckinsNestedInput
  }

  export type CheckinUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCheckinTypeFieldUpdateOperationsInput | $Enums.CheckinType
    location?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isSystemGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worksiteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CheckinUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCheckinTypeFieldUpdateOperationsInput | $Enums.CheckinType
    location?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isSystemGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worksiteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    project?: ProjectUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ProjectMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type CheckinCreateManyWorksiteInput = {
    id?: string
    type: $Enums.CheckinType
    location?: $Enums.LocationType
    leaveType?: $Enums.LeaveType
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    distance: Decimal | DecimalJsLike | number | string
    photo?: string | null
    reason?: string | null
    notes?: string | null
    isSystemGenerated?: boolean
    createdAt?: Date | string
    userId: string
  }

  export type CheckinUpdateWithoutWorksiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCheckinTypeFieldUpdateOperationsInput | $Enums.CheckinType
    location?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isSystemGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCheckinsNestedInput
  }

  export type CheckinUncheckedUpdateWithoutWorksiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCheckinTypeFieldUpdateOperationsInput | $Enums.CheckinType
    location?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isSystemGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CheckinUncheckedUpdateManyWithoutWorksiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCheckinTypeFieldUpdateOperationsInput | $Enums.CheckinType
    location?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isSystemGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateManyProjectInput = {
    id?: string
    trelloCardId: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    assignedUserId?: string | null
    worksiteId?: string | null
    phaseId?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectMemberCreateManyProjectInput = {
    id?: string
    role?: $Enums.ProjectRole
    joinedAt?: Date | string
    leftAt?: Date | string | null
    isActive?: boolean
    userId: string
  }

  export type ProjectPhaseCreateManyProjectInput = {
    id?: string
    name: string
    description?: string | null
    orderIndex?: number
    status?: $Enums.PhaseStatus
    startDate?: Date | string | null
    dueDate?: Date | string | null
    deliverDate?: Date | string | null
    trelloListId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    trelloCardId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    worksiteId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedUser?: UserUpdateOneWithoutTasksNestedInput
    phase?: ProjectPhaseUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    trelloCardId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    assignedUserId?: NullableStringFieldUpdateOperationsInput | string | null
    worksiteId?: NullableStringFieldUpdateOperationsInput | string | null
    phaseId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    trelloCardId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    assignedUserId?: NullableStringFieldUpdateOperationsInput | string | null
    worksiteId?: NullableStringFieldUpdateOperationsInput | string | null
    phaseId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutProjectMembersNestedInput
  }

  export type ProjectMemberUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectMemberUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectPhaseUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    status?: EnumPhaseStatusFieldUpdateOperationsInput | $Enums.PhaseStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trelloListId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutPhaseNestedInput
  }

  export type ProjectPhaseUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    status?: EnumPhaseStatusFieldUpdateOperationsInput | $Enums.PhaseStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trelloListId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutPhaseNestedInput
  }

  export type ProjectPhaseUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    status?: EnumPhaseStatusFieldUpdateOperationsInput | $Enums.PhaseStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trelloListId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyPhaseInput = {
    id?: string
    trelloCardId: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    assignedUserId?: string | null
    worksiteId?: string | null
    projectId?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateWithoutPhaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    trelloCardId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    worksiteId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedUser?: UserUpdateOneWithoutTasksNestedInput
    project?: ProjectUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutPhaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    trelloCardId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    assignedUserId?: NullableStringFieldUpdateOperationsInput | string | null
    worksiteId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutPhaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    trelloCardId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    assignedUserId?: NullableStringFieldUpdateOperationsInput | string | null
    worksiteId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorksiteCountOutputTypeDefaultArgs instead
     */
    export type WorksiteCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorksiteCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectCountOutputTypeDefaultArgs instead
     */
    export type ProjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectPhaseCountOutputTypeDefaultArgs instead
     */
    export type ProjectPhaseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectPhaseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorksiteDefaultArgs instead
     */
    export type WorksiteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorksiteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CheckinDefaultArgs instead
     */
    export type CheckinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CheckinDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDefaultArgs instead
     */
    export type ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskDefaultArgs instead
     */
    export type TaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectMemberDefaultArgs instead
     */
    export type ProjectMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectMemberDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectPhaseDefaultArgs instead
     */
    export type ProjectPhaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectPhaseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmailWhitelistDefaultArgs instead
     */
    export type EmailWhitelistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmailWhitelistDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}