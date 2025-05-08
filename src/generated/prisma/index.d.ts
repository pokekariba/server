
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Partida
 * 
 */
export type Partida = $Result.DefaultSelection<Prisma.$PartidaPayload>
/**
 * Model JogadorPartida
 * 
 */
export type JogadorPartida = $Result.DefaultSelection<Prisma.$JogadorPartidaPayload>
/**
 * Model Carta
 * 
 */
export type Carta = $Result.DefaultSelection<Prisma.$CartaPayload>
/**
 * Model ItemLoja
 * 
 */
export type ItemLoja = $Result.DefaultSelection<Prisma.$ItemLojaPayload>
/**
 * Model ItemUsuario
 * 
 */
export type ItemUsuario = $Result.DefaultSelection<Prisma.$ItemUsuarioPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StatusUsuario: {
  online: 'online',
  em_partida: 'em_partida',
  offline: 'offline',
  banido: 'banido'
};

export type StatusUsuario = (typeof StatusUsuario)[keyof typeof StatusUsuario]


export const CargoUsuario: {
  adm: 'adm',
  jogador: 'jogador'
};

export type CargoUsuario = (typeof CargoUsuario)[keyof typeof CargoUsuario]


export const StatusPartida: {
  em_espera: 'em_espera',
  em_andamento: 'em_andamento',
  finalizado: 'finalizado'
};

export type StatusPartida = (typeof StatusPartida)[keyof typeof StatusPartida]


export const TipoItemLoja: {
  deck: 'deck',
  avatar: 'avatar',
  fundo: 'fundo'
};

export type TipoItemLoja = (typeof TipoItemLoja)[keyof typeof TipoItemLoja]


export const DisponibilidadeItem: {
  disponivel: 'disponivel',
  indisponivel: 'indisponivel'
};

export type DisponibilidadeItem = (typeof DisponibilidadeItem)[keyof typeof DisponibilidadeItem]

}

export type StatusUsuario = $Enums.StatusUsuario

export const StatusUsuario: typeof $Enums.StatusUsuario

export type CargoUsuario = $Enums.CargoUsuario

export const CargoUsuario: typeof $Enums.CargoUsuario

export type StatusPartida = $Enums.StatusPartida

export const StatusPartida: typeof $Enums.StatusPartida

export type TipoItemLoja = $Enums.TipoItemLoja

export const TipoItemLoja: typeof $Enums.TipoItemLoja

export type DisponibilidadeItem = $Enums.DisponibilidadeItem

export const DisponibilidadeItem: typeof $Enums.DisponibilidadeItem

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partida`: Exposes CRUD operations for the **Partida** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Partidas
    * const partidas = await prisma.partida.findMany()
    * ```
    */
  get partida(): Prisma.PartidaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jogadorPartida`: Exposes CRUD operations for the **JogadorPartida** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JogadorPartidas
    * const jogadorPartidas = await prisma.jogadorPartida.findMany()
    * ```
    */
  get jogadorPartida(): Prisma.JogadorPartidaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carta`: Exposes CRUD operations for the **Carta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cartas
    * const cartas = await prisma.carta.findMany()
    * ```
    */
  get carta(): Prisma.CartaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemLoja`: Exposes CRUD operations for the **ItemLoja** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemLojas
    * const itemLojas = await prisma.itemLoja.findMany()
    * ```
    */
  get itemLoja(): Prisma.ItemLojaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemUsuario`: Exposes CRUD operations for the **ItemUsuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemUsuarios
    * const itemUsuarios = await prisma.itemUsuario.findMany()
    * ```
    */
  get itemUsuario(): Prisma.ItemUsuarioDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Usuario: 'Usuario',
    Partida: 'Partida',
    JogadorPartida: 'JogadorPartida',
    Carta: 'Carta',
    ItemLoja: 'ItemLoja',
    ItemUsuario: 'ItemUsuario'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "partida" | "jogadorPartida" | "carta" | "itemLoja" | "itemUsuario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Partida: {
        payload: Prisma.$PartidaPayload<ExtArgs>
        fields: Prisma.PartidaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartidaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartidaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>
          }
          findFirst: {
            args: Prisma.PartidaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartidaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>
          }
          findMany: {
            args: Prisma.PartidaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>[]
          }
          create: {
            args: Prisma.PartidaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>
          }
          createMany: {
            args: Prisma.PartidaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartidaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>[]
          }
          delete: {
            args: Prisma.PartidaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>
          }
          update: {
            args: Prisma.PartidaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>
          }
          deleteMany: {
            args: Prisma.PartidaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartidaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartidaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>[]
          }
          upsert: {
            args: Prisma.PartidaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>
          }
          aggregate: {
            args: Prisma.PartidaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartida>
          }
          groupBy: {
            args: Prisma.PartidaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartidaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartidaCountArgs<ExtArgs>
            result: $Utils.Optional<PartidaCountAggregateOutputType> | number
          }
        }
      }
      JogadorPartida: {
        payload: Prisma.$JogadorPartidaPayload<ExtArgs>
        fields: Prisma.JogadorPartidaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JogadorPartidaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogadorPartidaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JogadorPartidaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogadorPartidaPayload>
          }
          findFirst: {
            args: Prisma.JogadorPartidaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogadorPartidaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JogadorPartidaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogadorPartidaPayload>
          }
          findMany: {
            args: Prisma.JogadorPartidaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogadorPartidaPayload>[]
          }
          create: {
            args: Prisma.JogadorPartidaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogadorPartidaPayload>
          }
          createMany: {
            args: Prisma.JogadorPartidaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JogadorPartidaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogadorPartidaPayload>[]
          }
          delete: {
            args: Prisma.JogadorPartidaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogadorPartidaPayload>
          }
          update: {
            args: Prisma.JogadorPartidaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogadorPartidaPayload>
          }
          deleteMany: {
            args: Prisma.JogadorPartidaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JogadorPartidaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JogadorPartidaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogadorPartidaPayload>[]
          }
          upsert: {
            args: Prisma.JogadorPartidaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogadorPartidaPayload>
          }
          aggregate: {
            args: Prisma.JogadorPartidaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJogadorPartida>
          }
          groupBy: {
            args: Prisma.JogadorPartidaGroupByArgs<ExtArgs>
            result: $Utils.Optional<JogadorPartidaGroupByOutputType>[]
          }
          count: {
            args: Prisma.JogadorPartidaCountArgs<ExtArgs>
            result: $Utils.Optional<JogadorPartidaCountAggregateOutputType> | number
          }
        }
      }
      Carta: {
        payload: Prisma.$CartaPayload<ExtArgs>
        fields: Prisma.CartaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload>
          }
          findFirst: {
            args: Prisma.CartaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload>
          }
          findMany: {
            args: Prisma.CartaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload>[]
          }
          create: {
            args: Prisma.CartaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload>
          }
          createMany: {
            args: Prisma.CartaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload>[]
          }
          delete: {
            args: Prisma.CartaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload>
          }
          update: {
            args: Prisma.CartaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload>
          }
          deleteMany: {
            args: Prisma.CartaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload>[]
          }
          upsert: {
            args: Prisma.CartaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaPayload>
          }
          aggregate: {
            args: Prisma.CartaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarta>
          }
          groupBy: {
            args: Prisma.CartaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartaCountArgs<ExtArgs>
            result: $Utils.Optional<CartaCountAggregateOutputType> | number
          }
        }
      }
      ItemLoja: {
        payload: Prisma.$ItemLojaPayload<ExtArgs>
        fields: Prisma.ItemLojaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemLojaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemLojaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemLojaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemLojaPayload>
          }
          findFirst: {
            args: Prisma.ItemLojaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemLojaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemLojaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemLojaPayload>
          }
          findMany: {
            args: Prisma.ItemLojaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemLojaPayload>[]
          }
          create: {
            args: Prisma.ItemLojaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemLojaPayload>
          }
          createMany: {
            args: Prisma.ItemLojaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemLojaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemLojaPayload>[]
          }
          delete: {
            args: Prisma.ItemLojaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemLojaPayload>
          }
          update: {
            args: Prisma.ItemLojaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemLojaPayload>
          }
          deleteMany: {
            args: Prisma.ItemLojaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemLojaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemLojaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemLojaPayload>[]
          }
          upsert: {
            args: Prisma.ItemLojaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemLojaPayload>
          }
          aggregate: {
            args: Prisma.ItemLojaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemLoja>
          }
          groupBy: {
            args: Prisma.ItemLojaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemLojaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemLojaCountArgs<ExtArgs>
            result: $Utils.Optional<ItemLojaCountAggregateOutputType> | number
          }
        }
      }
      ItemUsuario: {
        payload: Prisma.$ItemUsuarioPayload<ExtArgs>
        fields: Prisma.ItemUsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemUsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemUsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemUsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemUsuarioPayload>
          }
          findFirst: {
            args: Prisma.ItemUsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemUsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemUsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemUsuarioPayload>
          }
          findMany: {
            args: Prisma.ItemUsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemUsuarioPayload>[]
          }
          create: {
            args: Prisma.ItemUsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemUsuarioPayload>
          }
          createMany: {
            args: Prisma.ItemUsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemUsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemUsuarioPayload>[]
          }
          delete: {
            args: Prisma.ItemUsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemUsuarioPayload>
          }
          update: {
            args: Prisma.ItemUsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemUsuarioPayload>
          }
          deleteMany: {
            args: Prisma.ItemUsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemUsuarioPayload>[]
          }
          upsert: {
            args: Prisma.ItemUsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemUsuarioPayload>
          }
          aggregate: {
            args: Prisma.ItemUsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemUsuario>
          }
          groupBy: {
            args: Prisma.ItemUsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemUsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemUsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<ItemUsuarioCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    partida?: PartidaOmit
    jogadorPartida?: JogadorPartidaOmit
    carta?: CartaOmit
    itemLoja?: ItemLojaOmit
    itemUsuario?: ItemUsuarioOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    jogadorPartidas: number
    itens: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jogadorPartidas?: boolean | UsuarioCountOutputTypeCountJogadorPartidasArgs
    itens?: boolean | UsuarioCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountJogadorPartidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JogadorPartidaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemUsuarioWhereInput
  }


  /**
   * Count Type PartidaCountOutputType
   */

  export type PartidaCountOutputType = {
    jogadores: number
    cartas: number
  }

  export type PartidaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jogadores?: boolean | PartidaCountOutputTypeCountJogadoresArgs
    cartas?: boolean | PartidaCountOutputTypeCountCartasArgs
  }

  // Custom InputTypes
  /**
   * PartidaCountOutputType without action
   */
  export type PartidaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartidaCountOutputType
     */
    select?: PartidaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PartidaCountOutputType without action
   */
  export type PartidaCountOutputTypeCountJogadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JogadorPartidaWhereInput
  }

  /**
   * PartidaCountOutputType without action
   */
  export type PartidaCountOutputTypeCountCartasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartaWhereInput
  }


  /**
   * Count Type JogadorPartidaCountOutputType
   */

  export type JogadorPartidaCountOutputType = {
    cartas: number
  }

  export type JogadorPartidaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cartas?: boolean | JogadorPartidaCountOutputTypeCountCartasArgs
  }

  // Custom InputTypes
  /**
   * JogadorPartidaCountOutputType without action
   */
  export type JogadorPartidaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogadorPartidaCountOutputType
     */
    select?: JogadorPartidaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JogadorPartidaCountOutputType without action
   */
  export type JogadorPartidaCountOutputTypeCountCartasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartaWhereInput
  }


  /**
   * Count Type ItemLojaCountOutputType
   */

  export type ItemLojaCountOutputType = {
    usuarios: number
  }

  export type ItemLojaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | ItemLojaCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * ItemLojaCountOutputType without action
   */
  export type ItemLojaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemLojaCountOutputType
     */
    select?: ItemLojaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemLojaCountOutputType without action
   */
  export type ItemLojaCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemUsuarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    moedas: number | null
    partidas_ganhas: number | null
    partidas_totais: number | null
    avatar_ativo: number | null
    fundo_ativo: number | null
    deck_ativo: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    moedas: number | null
    partidas_ganhas: number | null
    partidas_totais: number | null
    avatar_ativo: number | null
    fundo_ativo: number | null
    deck_ativo: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    email: string | null
    senha: string | null
    nome: string | null
    moedas: number | null
    data_criacao: Date | null
    partidas_ganhas: number | null
    partidas_totais: number | null
    avatar_ativo: number | null
    fundo_ativo: number | null
    deck_ativo: number | null
    status: $Enums.StatusUsuario | null
    cargo: $Enums.CargoUsuario | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    email: string | null
    senha: string | null
    nome: string | null
    moedas: number | null
    data_criacao: Date | null
    partidas_ganhas: number | null
    partidas_totais: number | null
    avatar_ativo: number | null
    fundo_ativo: number | null
    deck_ativo: number | null
    status: $Enums.StatusUsuario | null
    cargo: $Enums.CargoUsuario | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    email: number
    senha: number
    nome: number
    moedas: number
    data_criacao: number
    partidas_ganhas: number
    partidas_totais: number
    avatar_ativo: number
    fundo_ativo: number
    deck_ativo: number
    status: number
    cargo: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    moedas?: true
    partidas_ganhas?: true
    partidas_totais?: true
    avatar_ativo?: true
    fundo_ativo?: true
    deck_ativo?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    moedas?: true
    partidas_ganhas?: true
    partidas_totais?: true
    avatar_ativo?: true
    fundo_ativo?: true
    deck_ativo?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    email?: true
    senha?: true
    nome?: true
    moedas?: true
    data_criacao?: true
    partidas_ganhas?: true
    partidas_totais?: true
    avatar_ativo?: true
    fundo_ativo?: true
    deck_ativo?: true
    status?: true
    cargo?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    email?: true
    senha?: true
    nome?: true
    moedas?: true
    data_criacao?: true
    partidas_ganhas?: true
    partidas_totais?: true
    avatar_ativo?: true
    fundo_ativo?: true
    deck_ativo?: true
    status?: true
    cargo?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    email?: true
    senha?: true
    nome?: true
    moedas?: true
    data_criacao?: true
    partidas_ganhas?: true
    partidas_totais?: true
    avatar_ativo?: true
    fundo_ativo?: true
    deck_ativo?: true
    status?: true
    cargo?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    email: string
    senha: string
    nome: string
    moedas: number
    data_criacao: Date
    partidas_ganhas: number
    partidas_totais: number
    avatar_ativo: number
    fundo_ativo: number
    deck_ativo: number
    status: $Enums.StatusUsuario
    cargo: $Enums.CargoUsuario
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    senha?: boolean
    nome?: boolean
    moedas?: boolean
    data_criacao?: boolean
    partidas_ganhas?: boolean
    partidas_totais?: boolean
    avatar_ativo?: boolean
    fundo_ativo?: boolean
    deck_ativo?: boolean
    status?: boolean
    cargo?: boolean
    jogadorPartidas?: boolean | Usuario$jogadorPartidasArgs<ExtArgs>
    itens?: boolean | Usuario$itensArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    senha?: boolean
    nome?: boolean
    moedas?: boolean
    data_criacao?: boolean
    partidas_ganhas?: boolean
    partidas_totais?: boolean
    avatar_ativo?: boolean
    fundo_ativo?: boolean
    deck_ativo?: boolean
    status?: boolean
    cargo?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    senha?: boolean
    nome?: boolean
    moedas?: boolean
    data_criacao?: boolean
    partidas_ganhas?: boolean
    partidas_totais?: boolean
    avatar_ativo?: boolean
    fundo_ativo?: boolean
    deck_ativo?: boolean
    status?: boolean
    cargo?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    email?: boolean
    senha?: boolean
    nome?: boolean
    moedas?: boolean
    data_criacao?: boolean
    partidas_ganhas?: boolean
    partidas_totais?: boolean
    avatar_ativo?: boolean
    fundo_ativo?: boolean
    deck_ativo?: boolean
    status?: boolean
    cargo?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "senha" | "nome" | "moedas" | "data_criacao" | "partidas_ganhas" | "partidas_totais" | "avatar_ativo" | "fundo_ativo" | "deck_ativo" | "status" | "cargo", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jogadorPartidas?: boolean | Usuario$jogadorPartidasArgs<ExtArgs>
    itens?: boolean | Usuario$itensArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      jogadorPartidas: Prisma.$JogadorPartidaPayload<ExtArgs>[]
      itens: Prisma.$ItemUsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      senha: string
      nome: string
      moedas: number
      data_criacao: Date
      partidas_ganhas: number
      partidas_totais: number
      avatar_ativo: number
      fundo_ativo: number
      deck_ativo: number
      status: $Enums.StatusUsuario
      cargo: $Enums.CargoUsuario
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jogadorPartidas<T extends Usuario$jogadorPartidasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$jogadorPartidasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogadorPartidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    itens<T extends Usuario$itensArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly moedas: FieldRef<"Usuario", 'Int'>
    readonly data_criacao: FieldRef<"Usuario", 'DateTime'>
    readonly partidas_ganhas: FieldRef<"Usuario", 'Int'>
    readonly partidas_totais: FieldRef<"Usuario", 'Int'>
    readonly avatar_ativo: FieldRef<"Usuario", 'Int'>
    readonly fundo_ativo: FieldRef<"Usuario", 'Int'>
    readonly deck_ativo: FieldRef<"Usuario", 'Int'>
    readonly status: FieldRef<"Usuario", 'StatusUsuario'>
    readonly cargo: FieldRef<"Usuario", 'CargoUsuario'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.jogadorPartidas
   */
  export type Usuario$jogadorPartidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogadorPartida
     */
    select?: JogadorPartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JogadorPartida
     */
    omit?: JogadorPartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogadorPartidaInclude<ExtArgs> | null
    where?: JogadorPartidaWhereInput
    orderBy?: JogadorPartidaOrderByWithRelationInput | JogadorPartidaOrderByWithRelationInput[]
    cursor?: JogadorPartidaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JogadorPartidaScalarFieldEnum | JogadorPartidaScalarFieldEnum[]
  }

  /**
   * Usuario.itens
   */
  export type Usuario$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemUsuario
     */
    select?: ItemUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemUsuario
     */
    omit?: ItemUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemUsuarioInclude<ExtArgs> | null
    where?: ItemUsuarioWhereInput
    orderBy?: ItemUsuarioOrderByWithRelationInput | ItemUsuarioOrderByWithRelationInput[]
    cursor?: ItemUsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemUsuarioScalarFieldEnum | ItemUsuarioScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Partida
   */

  export type AggregatePartida = {
    _count: PartidaCountAggregateOutputType | null
    _avg: PartidaAvgAggregateOutputType | null
    _sum: PartidaSumAggregateOutputType | null
    _min: PartidaMinAggregateOutputType | null
    _max: PartidaMaxAggregateOutputType | null
  }

  export type PartidaAvgAggregateOutputType = {
    id: number | null
    vagas: number | null
  }

  export type PartidaSumAggregateOutputType = {
    id: number | null
    vagas: number | null
  }

  export type PartidaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    data_inicio: Date | null
    data_fim: Date | null
    status: $Enums.StatusPartida | null
    vagas: number | null
    senha: string | null
  }

  export type PartidaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    data_inicio: Date | null
    data_fim: Date | null
    status: $Enums.StatusPartida | null
    vagas: number | null
    senha: string | null
  }

  export type PartidaCountAggregateOutputType = {
    id: number
    nome: number
    data_inicio: number
    data_fim: number
    status: number
    vagas: number
    senha: number
    _all: number
  }


  export type PartidaAvgAggregateInputType = {
    id?: true
    vagas?: true
  }

  export type PartidaSumAggregateInputType = {
    id?: true
    vagas?: true
  }

  export type PartidaMinAggregateInputType = {
    id?: true
    nome?: true
    data_inicio?: true
    data_fim?: true
    status?: true
    vagas?: true
    senha?: true
  }

  export type PartidaMaxAggregateInputType = {
    id?: true
    nome?: true
    data_inicio?: true
    data_fim?: true
    status?: true
    vagas?: true
    senha?: true
  }

  export type PartidaCountAggregateInputType = {
    id?: true
    nome?: true
    data_inicio?: true
    data_fim?: true
    status?: true
    vagas?: true
    senha?: true
    _all?: true
  }

  export type PartidaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partida to aggregate.
     */
    where?: PartidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidas to fetch.
     */
    orderBy?: PartidaOrderByWithRelationInput | PartidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Partidas
    **/
    _count?: true | PartidaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartidaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartidaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartidaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartidaMaxAggregateInputType
  }

  export type GetPartidaAggregateType<T extends PartidaAggregateArgs> = {
        [P in keyof T & keyof AggregatePartida]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartida[P]>
      : GetScalarType<T[P], AggregatePartida[P]>
  }




  export type PartidaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartidaWhereInput
    orderBy?: PartidaOrderByWithAggregationInput | PartidaOrderByWithAggregationInput[]
    by: PartidaScalarFieldEnum[] | PartidaScalarFieldEnum
    having?: PartidaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartidaCountAggregateInputType | true
    _avg?: PartidaAvgAggregateInputType
    _sum?: PartidaSumAggregateInputType
    _min?: PartidaMinAggregateInputType
    _max?: PartidaMaxAggregateInputType
  }

  export type PartidaGroupByOutputType = {
    id: number
    nome: string
    data_inicio: Date
    data_fim: Date
    status: $Enums.StatusPartida
    vagas: number
    senha: string | null
    _count: PartidaCountAggregateOutputType | null
    _avg: PartidaAvgAggregateOutputType | null
    _sum: PartidaSumAggregateOutputType | null
    _min: PartidaMinAggregateOutputType | null
    _max: PartidaMaxAggregateOutputType | null
  }

  type GetPartidaGroupByPayload<T extends PartidaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartidaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartidaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartidaGroupByOutputType[P]>
            : GetScalarType<T[P], PartidaGroupByOutputType[P]>
        }
      >
    >


  export type PartidaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    status?: boolean
    vagas?: boolean
    senha?: boolean
    jogadores?: boolean | Partida$jogadoresArgs<ExtArgs>
    cartas?: boolean | Partida$cartasArgs<ExtArgs>
    _count?: boolean | PartidaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partida"]>

  export type PartidaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    status?: boolean
    vagas?: boolean
    senha?: boolean
  }, ExtArgs["result"]["partida"]>

  export type PartidaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    status?: boolean
    vagas?: boolean
    senha?: boolean
  }, ExtArgs["result"]["partida"]>

  export type PartidaSelectScalar = {
    id?: boolean
    nome?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    status?: boolean
    vagas?: boolean
    senha?: boolean
  }

  export type PartidaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "data_inicio" | "data_fim" | "status" | "vagas" | "senha", ExtArgs["result"]["partida"]>
  export type PartidaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jogadores?: boolean | Partida$jogadoresArgs<ExtArgs>
    cartas?: boolean | Partida$cartasArgs<ExtArgs>
    _count?: boolean | PartidaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PartidaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PartidaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PartidaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Partida"
    objects: {
      jogadores: Prisma.$JogadorPartidaPayload<ExtArgs>[]
      cartas: Prisma.$CartaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      data_inicio: Date
      data_fim: Date
      status: $Enums.StatusPartida
      vagas: number
      senha: string | null
    }, ExtArgs["result"]["partida"]>
    composites: {}
  }

  type PartidaGetPayload<S extends boolean | null | undefined | PartidaDefaultArgs> = $Result.GetResult<Prisma.$PartidaPayload, S>

  type PartidaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartidaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartidaCountAggregateInputType | true
    }

  export interface PartidaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Partida'], meta: { name: 'Partida' } }
    /**
     * Find zero or one Partida that matches the filter.
     * @param {PartidaFindUniqueArgs} args - Arguments to find a Partida
     * @example
     * // Get one Partida
     * const partida = await prisma.partida.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartidaFindUniqueArgs>(args: SelectSubset<T, PartidaFindUniqueArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Partida that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartidaFindUniqueOrThrowArgs} args - Arguments to find a Partida
     * @example
     * // Get one Partida
     * const partida = await prisma.partida.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartidaFindUniqueOrThrowArgs>(args: SelectSubset<T, PartidaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Partida that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidaFindFirstArgs} args - Arguments to find a Partida
     * @example
     * // Get one Partida
     * const partida = await prisma.partida.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartidaFindFirstArgs>(args?: SelectSubset<T, PartidaFindFirstArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Partida that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidaFindFirstOrThrowArgs} args - Arguments to find a Partida
     * @example
     * // Get one Partida
     * const partida = await prisma.partida.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartidaFindFirstOrThrowArgs>(args?: SelectSubset<T, PartidaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Partidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Partidas
     * const partidas = await prisma.partida.findMany()
     * 
     * // Get first 10 Partidas
     * const partidas = await prisma.partida.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partidaWithIdOnly = await prisma.partida.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartidaFindManyArgs>(args?: SelectSubset<T, PartidaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Partida.
     * @param {PartidaCreateArgs} args - Arguments to create a Partida.
     * @example
     * // Create one Partida
     * const Partida = await prisma.partida.create({
     *   data: {
     *     // ... data to create a Partida
     *   }
     * })
     * 
     */
    create<T extends PartidaCreateArgs>(args: SelectSubset<T, PartidaCreateArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Partidas.
     * @param {PartidaCreateManyArgs} args - Arguments to create many Partidas.
     * @example
     * // Create many Partidas
     * const partida = await prisma.partida.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartidaCreateManyArgs>(args?: SelectSubset<T, PartidaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Partidas and returns the data saved in the database.
     * @param {PartidaCreateManyAndReturnArgs} args - Arguments to create many Partidas.
     * @example
     * // Create many Partidas
     * const partida = await prisma.partida.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Partidas and only return the `id`
     * const partidaWithIdOnly = await prisma.partida.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartidaCreateManyAndReturnArgs>(args?: SelectSubset<T, PartidaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Partida.
     * @param {PartidaDeleteArgs} args - Arguments to delete one Partida.
     * @example
     * // Delete one Partida
     * const Partida = await prisma.partida.delete({
     *   where: {
     *     // ... filter to delete one Partida
     *   }
     * })
     * 
     */
    delete<T extends PartidaDeleteArgs>(args: SelectSubset<T, PartidaDeleteArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Partida.
     * @param {PartidaUpdateArgs} args - Arguments to update one Partida.
     * @example
     * // Update one Partida
     * const partida = await prisma.partida.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartidaUpdateArgs>(args: SelectSubset<T, PartidaUpdateArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Partidas.
     * @param {PartidaDeleteManyArgs} args - Arguments to filter Partidas to delete.
     * @example
     * // Delete a few Partidas
     * const { count } = await prisma.partida.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartidaDeleteManyArgs>(args?: SelectSubset<T, PartidaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Partidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Partidas
     * const partida = await prisma.partida.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartidaUpdateManyArgs>(args: SelectSubset<T, PartidaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Partidas and returns the data updated in the database.
     * @param {PartidaUpdateManyAndReturnArgs} args - Arguments to update many Partidas.
     * @example
     * // Update many Partidas
     * const partida = await prisma.partida.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Partidas and only return the `id`
     * const partidaWithIdOnly = await prisma.partida.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PartidaUpdateManyAndReturnArgs>(args: SelectSubset<T, PartidaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Partida.
     * @param {PartidaUpsertArgs} args - Arguments to update or create a Partida.
     * @example
     * // Update or create a Partida
     * const partida = await prisma.partida.upsert({
     *   create: {
     *     // ... data to create a Partida
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Partida we want to update
     *   }
     * })
     */
    upsert<T extends PartidaUpsertArgs>(args: SelectSubset<T, PartidaUpsertArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Partidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidaCountArgs} args - Arguments to filter Partidas to count.
     * @example
     * // Count the number of Partidas
     * const count = await prisma.partida.count({
     *   where: {
     *     // ... the filter for the Partidas we want to count
     *   }
     * })
    **/
    count<T extends PartidaCountArgs>(
      args?: Subset<T, PartidaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartidaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Partida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PartidaAggregateArgs>(args: Subset<T, PartidaAggregateArgs>): Prisma.PrismaPromise<GetPartidaAggregateType<T>>

    /**
     * Group by Partida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidaGroupByArgs} args - Group by arguments.
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
      T extends PartidaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartidaGroupByArgs['orderBy'] }
        : { orderBy?: PartidaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PartidaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartidaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Partida model
   */
  readonly fields: PartidaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Partida.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartidaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jogadores<T extends Partida$jogadoresArgs<ExtArgs> = {}>(args?: Subset<T, Partida$jogadoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogadorPartidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cartas<T extends Partida$cartasArgs<ExtArgs> = {}>(args?: Subset<T, Partida$cartasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Partida model
   */
  interface PartidaFieldRefs {
    readonly id: FieldRef<"Partida", 'Int'>
    readonly nome: FieldRef<"Partida", 'String'>
    readonly data_inicio: FieldRef<"Partida", 'DateTime'>
    readonly data_fim: FieldRef<"Partida", 'DateTime'>
    readonly status: FieldRef<"Partida", 'StatusPartida'>
    readonly vagas: FieldRef<"Partida", 'Int'>
    readonly senha: FieldRef<"Partida", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Partida findUnique
   */
  export type PartidaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * Filter, which Partida to fetch.
     */
    where: PartidaWhereUniqueInput
  }

  /**
   * Partida findUniqueOrThrow
   */
  export type PartidaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * Filter, which Partida to fetch.
     */
    where: PartidaWhereUniqueInput
  }

  /**
   * Partida findFirst
   */
  export type PartidaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * Filter, which Partida to fetch.
     */
    where?: PartidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidas to fetch.
     */
    orderBy?: PartidaOrderByWithRelationInput | PartidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partidas.
     */
    cursor?: PartidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partidas.
     */
    distinct?: PartidaScalarFieldEnum | PartidaScalarFieldEnum[]
  }

  /**
   * Partida findFirstOrThrow
   */
  export type PartidaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * Filter, which Partida to fetch.
     */
    where?: PartidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidas to fetch.
     */
    orderBy?: PartidaOrderByWithRelationInput | PartidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partidas.
     */
    cursor?: PartidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partidas.
     */
    distinct?: PartidaScalarFieldEnum | PartidaScalarFieldEnum[]
  }

  /**
   * Partida findMany
   */
  export type PartidaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * Filter, which Partidas to fetch.
     */
    where?: PartidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidas to fetch.
     */
    orderBy?: PartidaOrderByWithRelationInput | PartidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Partidas.
     */
    cursor?: PartidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partidas.
     */
    skip?: number
    distinct?: PartidaScalarFieldEnum | PartidaScalarFieldEnum[]
  }

  /**
   * Partida create
   */
  export type PartidaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * The data needed to create a Partida.
     */
    data: XOR<PartidaCreateInput, PartidaUncheckedCreateInput>
  }

  /**
   * Partida createMany
   */
  export type PartidaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Partidas.
     */
    data: PartidaCreateManyInput | PartidaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Partida createManyAndReturn
   */
  export type PartidaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * The data used to create many Partidas.
     */
    data: PartidaCreateManyInput | PartidaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Partida update
   */
  export type PartidaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * The data needed to update a Partida.
     */
    data: XOR<PartidaUpdateInput, PartidaUncheckedUpdateInput>
    /**
     * Choose, which Partida to update.
     */
    where: PartidaWhereUniqueInput
  }

  /**
   * Partida updateMany
   */
  export type PartidaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Partidas.
     */
    data: XOR<PartidaUpdateManyMutationInput, PartidaUncheckedUpdateManyInput>
    /**
     * Filter which Partidas to update
     */
    where?: PartidaWhereInput
    /**
     * Limit how many Partidas to update.
     */
    limit?: number
  }

  /**
   * Partida updateManyAndReturn
   */
  export type PartidaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * The data used to update Partidas.
     */
    data: XOR<PartidaUpdateManyMutationInput, PartidaUncheckedUpdateManyInput>
    /**
     * Filter which Partidas to update
     */
    where?: PartidaWhereInput
    /**
     * Limit how many Partidas to update.
     */
    limit?: number
  }

  /**
   * Partida upsert
   */
  export type PartidaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * The filter to search for the Partida to update in case it exists.
     */
    where: PartidaWhereUniqueInput
    /**
     * In case the Partida found by the `where` argument doesn't exist, create a new Partida with this data.
     */
    create: XOR<PartidaCreateInput, PartidaUncheckedCreateInput>
    /**
     * In case the Partida was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartidaUpdateInput, PartidaUncheckedUpdateInput>
  }

  /**
   * Partida delete
   */
  export type PartidaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * Filter which Partida to delete.
     */
    where: PartidaWhereUniqueInput
  }

  /**
   * Partida deleteMany
   */
  export type PartidaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partidas to delete
     */
    where?: PartidaWhereInput
    /**
     * Limit how many Partidas to delete.
     */
    limit?: number
  }

  /**
   * Partida.jogadores
   */
  export type Partida$jogadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogadorPartida
     */
    select?: JogadorPartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JogadorPartida
     */
    omit?: JogadorPartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogadorPartidaInclude<ExtArgs> | null
    where?: JogadorPartidaWhereInput
    orderBy?: JogadorPartidaOrderByWithRelationInput | JogadorPartidaOrderByWithRelationInput[]
    cursor?: JogadorPartidaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JogadorPartidaScalarFieldEnum | JogadorPartidaScalarFieldEnum[]
  }

  /**
   * Partida.cartas
   */
  export type Partida$cartasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
    where?: CartaWhereInput
    orderBy?: CartaOrderByWithRelationInput | CartaOrderByWithRelationInput[]
    cursor?: CartaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartaScalarFieldEnum | CartaScalarFieldEnum[]
  }

  /**
   * Partida without action
   */
  export type PartidaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
  }


  /**
   * Model JogadorPartida
   */

  export type AggregateJogadorPartida = {
    _count: JogadorPartidaCountAggregateOutputType | null
    _avg: JogadorPartidaAvgAggregateOutputType | null
    _sum: JogadorPartidaSumAggregateOutputType | null
    _min: JogadorPartidaMinAggregateOutputType | null
    _max: JogadorPartidaMaxAggregateOutputType | null
  }

  export type JogadorPartidaAvgAggregateOutputType = {
    id: number | null
    partida_id: number | null
    usuario_id: number | null
    ordem_jogada: number | null
    pontuacao: number | null
  }

  export type JogadorPartidaSumAggregateOutputType = {
    id: number | null
    partida_id: number | null
    usuario_id: number | null
    ordem_jogada: number | null
    pontuacao: number | null
  }

  export type JogadorPartidaMinAggregateOutputType = {
    id: number | null
    partida_id: number | null
    usuario_id: number | null
    ordem_jogada: number | null
    pontuacao: number | null
  }

  export type JogadorPartidaMaxAggregateOutputType = {
    id: number | null
    partida_id: number | null
    usuario_id: number | null
    ordem_jogada: number | null
    pontuacao: number | null
  }

  export type JogadorPartidaCountAggregateOutputType = {
    id: number
    partida_id: number
    usuario_id: number
    ordem_jogada: number
    pontuacao: number
    _all: number
  }


  export type JogadorPartidaAvgAggregateInputType = {
    id?: true
    partida_id?: true
    usuario_id?: true
    ordem_jogada?: true
    pontuacao?: true
  }

  export type JogadorPartidaSumAggregateInputType = {
    id?: true
    partida_id?: true
    usuario_id?: true
    ordem_jogada?: true
    pontuacao?: true
  }

  export type JogadorPartidaMinAggregateInputType = {
    id?: true
    partida_id?: true
    usuario_id?: true
    ordem_jogada?: true
    pontuacao?: true
  }

  export type JogadorPartidaMaxAggregateInputType = {
    id?: true
    partida_id?: true
    usuario_id?: true
    ordem_jogada?: true
    pontuacao?: true
  }

  export type JogadorPartidaCountAggregateInputType = {
    id?: true
    partida_id?: true
    usuario_id?: true
    ordem_jogada?: true
    pontuacao?: true
    _all?: true
  }

  export type JogadorPartidaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JogadorPartida to aggregate.
     */
    where?: JogadorPartidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JogadorPartidas to fetch.
     */
    orderBy?: JogadorPartidaOrderByWithRelationInput | JogadorPartidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JogadorPartidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JogadorPartidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JogadorPartidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JogadorPartidas
    **/
    _count?: true | JogadorPartidaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JogadorPartidaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JogadorPartidaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JogadorPartidaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JogadorPartidaMaxAggregateInputType
  }

  export type GetJogadorPartidaAggregateType<T extends JogadorPartidaAggregateArgs> = {
        [P in keyof T & keyof AggregateJogadorPartida]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJogadorPartida[P]>
      : GetScalarType<T[P], AggregateJogadorPartida[P]>
  }




  export type JogadorPartidaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JogadorPartidaWhereInput
    orderBy?: JogadorPartidaOrderByWithAggregationInput | JogadorPartidaOrderByWithAggregationInput[]
    by: JogadorPartidaScalarFieldEnum[] | JogadorPartidaScalarFieldEnum
    having?: JogadorPartidaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JogadorPartidaCountAggregateInputType | true
    _avg?: JogadorPartidaAvgAggregateInputType
    _sum?: JogadorPartidaSumAggregateInputType
    _min?: JogadorPartidaMinAggregateInputType
    _max?: JogadorPartidaMaxAggregateInputType
  }

  export type JogadorPartidaGroupByOutputType = {
    id: number
    partida_id: number
    usuario_id: number
    ordem_jogada: number
    pontuacao: number
    _count: JogadorPartidaCountAggregateOutputType | null
    _avg: JogadorPartidaAvgAggregateOutputType | null
    _sum: JogadorPartidaSumAggregateOutputType | null
    _min: JogadorPartidaMinAggregateOutputType | null
    _max: JogadorPartidaMaxAggregateOutputType | null
  }

  type GetJogadorPartidaGroupByPayload<T extends JogadorPartidaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JogadorPartidaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JogadorPartidaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JogadorPartidaGroupByOutputType[P]>
            : GetScalarType<T[P], JogadorPartidaGroupByOutputType[P]>
        }
      >
    >


  export type JogadorPartidaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partida_id?: boolean
    usuario_id?: boolean
    ordem_jogada?: boolean
    pontuacao?: boolean
    partida?: boolean | PartidaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cartas?: boolean | JogadorPartida$cartasArgs<ExtArgs>
    _count?: boolean | JogadorPartidaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jogadorPartida"]>

  export type JogadorPartidaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partida_id?: boolean
    usuario_id?: boolean
    ordem_jogada?: boolean
    pontuacao?: boolean
    partida?: boolean | PartidaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jogadorPartida"]>

  export type JogadorPartidaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partida_id?: boolean
    usuario_id?: boolean
    ordem_jogada?: boolean
    pontuacao?: boolean
    partida?: boolean | PartidaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jogadorPartida"]>

  export type JogadorPartidaSelectScalar = {
    id?: boolean
    partida_id?: boolean
    usuario_id?: boolean
    ordem_jogada?: boolean
    pontuacao?: boolean
  }

  export type JogadorPartidaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "partida_id" | "usuario_id" | "ordem_jogada" | "pontuacao", ExtArgs["result"]["jogadorPartida"]>
  export type JogadorPartidaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partida?: boolean | PartidaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cartas?: boolean | JogadorPartida$cartasArgs<ExtArgs>
    _count?: boolean | JogadorPartidaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JogadorPartidaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partida?: boolean | PartidaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type JogadorPartidaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partida?: boolean | PartidaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $JogadorPartidaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JogadorPartida"
    objects: {
      partida: Prisma.$PartidaPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      cartas: Prisma.$CartaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      partida_id: number
      usuario_id: number
      ordem_jogada: number
      pontuacao: number
    }, ExtArgs["result"]["jogadorPartida"]>
    composites: {}
  }

  type JogadorPartidaGetPayload<S extends boolean | null | undefined | JogadorPartidaDefaultArgs> = $Result.GetResult<Prisma.$JogadorPartidaPayload, S>

  type JogadorPartidaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JogadorPartidaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JogadorPartidaCountAggregateInputType | true
    }

  export interface JogadorPartidaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JogadorPartida'], meta: { name: 'JogadorPartida' } }
    /**
     * Find zero or one JogadorPartida that matches the filter.
     * @param {JogadorPartidaFindUniqueArgs} args - Arguments to find a JogadorPartida
     * @example
     * // Get one JogadorPartida
     * const jogadorPartida = await prisma.jogadorPartida.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JogadorPartidaFindUniqueArgs>(args: SelectSubset<T, JogadorPartidaFindUniqueArgs<ExtArgs>>): Prisma__JogadorPartidaClient<$Result.GetResult<Prisma.$JogadorPartidaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JogadorPartida that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JogadorPartidaFindUniqueOrThrowArgs} args - Arguments to find a JogadorPartida
     * @example
     * // Get one JogadorPartida
     * const jogadorPartida = await prisma.jogadorPartida.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JogadorPartidaFindUniqueOrThrowArgs>(args: SelectSubset<T, JogadorPartidaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JogadorPartidaClient<$Result.GetResult<Prisma.$JogadorPartidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JogadorPartida that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogadorPartidaFindFirstArgs} args - Arguments to find a JogadorPartida
     * @example
     * // Get one JogadorPartida
     * const jogadorPartida = await prisma.jogadorPartida.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JogadorPartidaFindFirstArgs>(args?: SelectSubset<T, JogadorPartidaFindFirstArgs<ExtArgs>>): Prisma__JogadorPartidaClient<$Result.GetResult<Prisma.$JogadorPartidaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JogadorPartida that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogadorPartidaFindFirstOrThrowArgs} args - Arguments to find a JogadorPartida
     * @example
     * // Get one JogadorPartida
     * const jogadorPartida = await prisma.jogadorPartida.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JogadorPartidaFindFirstOrThrowArgs>(args?: SelectSubset<T, JogadorPartidaFindFirstOrThrowArgs<ExtArgs>>): Prisma__JogadorPartidaClient<$Result.GetResult<Prisma.$JogadorPartidaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JogadorPartidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogadorPartidaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JogadorPartidas
     * const jogadorPartidas = await prisma.jogadorPartida.findMany()
     * 
     * // Get first 10 JogadorPartidas
     * const jogadorPartidas = await prisma.jogadorPartida.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jogadorPartidaWithIdOnly = await prisma.jogadorPartida.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JogadorPartidaFindManyArgs>(args?: SelectSubset<T, JogadorPartidaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogadorPartidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JogadorPartida.
     * @param {JogadorPartidaCreateArgs} args - Arguments to create a JogadorPartida.
     * @example
     * // Create one JogadorPartida
     * const JogadorPartida = await prisma.jogadorPartida.create({
     *   data: {
     *     // ... data to create a JogadorPartida
     *   }
     * })
     * 
     */
    create<T extends JogadorPartidaCreateArgs>(args: SelectSubset<T, JogadorPartidaCreateArgs<ExtArgs>>): Prisma__JogadorPartidaClient<$Result.GetResult<Prisma.$JogadorPartidaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JogadorPartidas.
     * @param {JogadorPartidaCreateManyArgs} args - Arguments to create many JogadorPartidas.
     * @example
     * // Create many JogadorPartidas
     * const jogadorPartida = await prisma.jogadorPartida.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JogadorPartidaCreateManyArgs>(args?: SelectSubset<T, JogadorPartidaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JogadorPartidas and returns the data saved in the database.
     * @param {JogadorPartidaCreateManyAndReturnArgs} args - Arguments to create many JogadorPartidas.
     * @example
     * // Create many JogadorPartidas
     * const jogadorPartida = await prisma.jogadorPartida.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JogadorPartidas and only return the `id`
     * const jogadorPartidaWithIdOnly = await prisma.jogadorPartida.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JogadorPartidaCreateManyAndReturnArgs>(args?: SelectSubset<T, JogadorPartidaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogadorPartidaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JogadorPartida.
     * @param {JogadorPartidaDeleteArgs} args - Arguments to delete one JogadorPartida.
     * @example
     * // Delete one JogadorPartida
     * const JogadorPartida = await prisma.jogadorPartida.delete({
     *   where: {
     *     // ... filter to delete one JogadorPartida
     *   }
     * })
     * 
     */
    delete<T extends JogadorPartidaDeleteArgs>(args: SelectSubset<T, JogadorPartidaDeleteArgs<ExtArgs>>): Prisma__JogadorPartidaClient<$Result.GetResult<Prisma.$JogadorPartidaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JogadorPartida.
     * @param {JogadorPartidaUpdateArgs} args - Arguments to update one JogadorPartida.
     * @example
     * // Update one JogadorPartida
     * const jogadorPartida = await prisma.jogadorPartida.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JogadorPartidaUpdateArgs>(args: SelectSubset<T, JogadorPartidaUpdateArgs<ExtArgs>>): Prisma__JogadorPartidaClient<$Result.GetResult<Prisma.$JogadorPartidaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JogadorPartidas.
     * @param {JogadorPartidaDeleteManyArgs} args - Arguments to filter JogadorPartidas to delete.
     * @example
     * // Delete a few JogadorPartidas
     * const { count } = await prisma.jogadorPartida.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JogadorPartidaDeleteManyArgs>(args?: SelectSubset<T, JogadorPartidaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JogadorPartidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogadorPartidaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JogadorPartidas
     * const jogadorPartida = await prisma.jogadorPartida.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JogadorPartidaUpdateManyArgs>(args: SelectSubset<T, JogadorPartidaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JogadorPartidas and returns the data updated in the database.
     * @param {JogadorPartidaUpdateManyAndReturnArgs} args - Arguments to update many JogadorPartidas.
     * @example
     * // Update many JogadorPartidas
     * const jogadorPartida = await prisma.jogadorPartida.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JogadorPartidas and only return the `id`
     * const jogadorPartidaWithIdOnly = await prisma.jogadorPartida.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JogadorPartidaUpdateManyAndReturnArgs>(args: SelectSubset<T, JogadorPartidaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogadorPartidaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JogadorPartida.
     * @param {JogadorPartidaUpsertArgs} args - Arguments to update or create a JogadorPartida.
     * @example
     * // Update or create a JogadorPartida
     * const jogadorPartida = await prisma.jogadorPartida.upsert({
     *   create: {
     *     // ... data to create a JogadorPartida
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JogadorPartida we want to update
     *   }
     * })
     */
    upsert<T extends JogadorPartidaUpsertArgs>(args: SelectSubset<T, JogadorPartidaUpsertArgs<ExtArgs>>): Prisma__JogadorPartidaClient<$Result.GetResult<Prisma.$JogadorPartidaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JogadorPartidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogadorPartidaCountArgs} args - Arguments to filter JogadorPartidas to count.
     * @example
     * // Count the number of JogadorPartidas
     * const count = await prisma.jogadorPartida.count({
     *   where: {
     *     // ... the filter for the JogadorPartidas we want to count
     *   }
     * })
    **/
    count<T extends JogadorPartidaCountArgs>(
      args?: Subset<T, JogadorPartidaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JogadorPartidaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JogadorPartida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogadorPartidaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JogadorPartidaAggregateArgs>(args: Subset<T, JogadorPartidaAggregateArgs>): Prisma.PrismaPromise<GetJogadorPartidaAggregateType<T>>

    /**
     * Group by JogadorPartida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogadorPartidaGroupByArgs} args - Group by arguments.
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
      T extends JogadorPartidaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JogadorPartidaGroupByArgs['orderBy'] }
        : { orderBy?: JogadorPartidaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JogadorPartidaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJogadorPartidaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JogadorPartida model
   */
  readonly fields: JogadorPartidaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JogadorPartida.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JogadorPartidaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    partida<T extends PartidaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PartidaDefaultArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cartas<T extends JogadorPartida$cartasArgs<ExtArgs> = {}>(args?: Subset<T, JogadorPartida$cartasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the JogadorPartida model
   */
  interface JogadorPartidaFieldRefs {
    readonly id: FieldRef<"JogadorPartida", 'Int'>
    readonly partida_id: FieldRef<"JogadorPartida", 'Int'>
    readonly usuario_id: FieldRef<"JogadorPartida", 'Int'>
    readonly ordem_jogada: FieldRef<"JogadorPartida", 'Int'>
    readonly pontuacao: FieldRef<"JogadorPartida", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * JogadorPartida findUnique
   */
  export type JogadorPartidaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogadorPartida
     */
    select?: JogadorPartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JogadorPartida
     */
    omit?: JogadorPartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogadorPartidaInclude<ExtArgs> | null
    /**
     * Filter, which JogadorPartida to fetch.
     */
    where: JogadorPartidaWhereUniqueInput
  }

  /**
   * JogadorPartida findUniqueOrThrow
   */
  export type JogadorPartidaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogadorPartida
     */
    select?: JogadorPartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JogadorPartida
     */
    omit?: JogadorPartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogadorPartidaInclude<ExtArgs> | null
    /**
     * Filter, which JogadorPartida to fetch.
     */
    where: JogadorPartidaWhereUniqueInput
  }

  /**
   * JogadorPartida findFirst
   */
  export type JogadorPartidaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogadorPartida
     */
    select?: JogadorPartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JogadorPartida
     */
    omit?: JogadorPartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogadorPartidaInclude<ExtArgs> | null
    /**
     * Filter, which JogadorPartida to fetch.
     */
    where?: JogadorPartidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JogadorPartidas to fetch.
     */
    orderBy?: JogadorPartidaOrderByWithRelationInput | JogadorPartidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JogadorPartidas.
     */
    cursor?: JogadorPartidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JogadorPartidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JogadorPartidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JogadorPartidas.
     */
    distinct?: JogadorPartidaScalarFieldEnum | JogadorPartidaScalarFieldEnum[]
  }

  /**
   * JogadorPartida findFirstOrThrow
   */
  export type JogadorPartidaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogadorPartida
     */
    select?: JogadorPartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JogadorPartida
     */
    omit?: JogadorPartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogadorPartidaInclude<ExtArgs> | null
    /**
     * Filter, which JogadorPartida to fetch.
     */
    where?: JogadorPartidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JogadorPartidas to fetch.
     */
    orderBy?: JogadorPartidaOrderByWithRelationInput | JogadorPartidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JogadorPartidas.
     */
    cursor?: JogadorPartidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JogadorPartidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JogadorPartidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JogadorPartidas.
     */
    distinct?: JogadorPartidaScalarFieldEnum | JogadorPartidaScalarFieldEnum[]
  }

  /**
   * JogadorPartida findMany
   */
  export type JogadorPartidaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogadorPartida
     */
    select?: JogadorPartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JogadorPartida
     */
    omit?: JogadorPartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogadorPartidaInclude<ExtArgs> | null
    /**
     * Filter, which JogadorPartidas to fetch.
     */
    where?: JogadorPartidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JogadorPartidas to fetch.
     */
    orderBy?: JogadorPartidaOrderByWithRelationInput | JogadorPartidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JogadorPartidas.
     */
    cursor?: JogadorPartidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JogadorPartidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JogadorPartidas.
     */
    skip?: number
    distinct?: JogadorPartidaScalarFieldEnum | JogadorPartidaScalarFieldEnum[]
  }

  /**
   * JogadorPartida create
   */
  export type JogadorPartidaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogadorPartida
     */
    select?: JogadorPartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JogadorPartida
     */
    omit?: JogadorPartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogadorPartidaInclude<ExtArgs> | null
    /**
     * The data needed to create a JogadorPartida.
     */
    data: XOR<JogadorPartidaCreateInput, JogadorPartidaUncheckedCreateInput>
  }

  /**
   * JogadorPartida createMany
   */
  export type JogadorPartidaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JogadorPartidas.
     */
    data: JogadorPartidaCreateManyInput | JogadorPartidaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JogadorPartida createManyAndReturn
   */
  export type JogadorPartidaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogadorPartida
     */
    select?: JogadorPartidaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JogadorPartida
     */
    omit?: JogadorPartidaOmit<ExtArgs> | null
    /**
     * The data used to create many JogadorPartidas.
     */
    data: JogadorPartidaCreateManyInput | JogadorPartidaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogadorPartidaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JogadorPartida update
   */
  export type JogadorPartidaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogadorPartida
     */
    select?: JogadorPartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JogadorPartida
     */
    omit?: JogadorPartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogadorPartidaInclude<ExtArgs> | null
    /**
     * The data needed to update a JogadorPartida.
     */
    data: XOR<JogadorPartidaUpdateInput, JogadorPartidaUncheckedUpdateInput>
    /**
     * Choose, which JogadorPartida to update.
     */
    where: JogadorPartidaWhereUniqueInput
  }

  /**
   * JogadorPartida updateMany
   */
  export type JogadorPartidaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JogadorPartidas.
     */
    data: XOR<JogadorPartidaUpdateManyMutationInput, JogadorPartidaUncheckedUpdateManyInput>
    /**
     * Filter which JogadorPartidas to update
     */
    where?: JogadorPartidaWhereInput
    /**
     * Limit how many JogadorPartidas to update.
     */
    limit?: number
  }

  /**
   * JogadorPartida updateManyAndReturn
   */
  export type JogadorPartidaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogadorPartida
     */
    select?: JogadorPartidaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JogadorPartida
     */
    omit?: JogadorPartidaOmit<ExtArgs> | null
    /**
     * The data used to update JogadorPartidas.
     */
    data: XOR<JogadorPartidaUpdateManyMutationInput, JogadorPartidaUncheckedUpdateManyInput>
    /**
     * Filter which JogadorPartidas to update
     */
    where?: JogadorPartidaWhereInput
    /**
     * Limit how many JogadorPartidas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogadorPartidaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JogadorPartida upsert
   */
  export type JogadorPartidaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogadorPartida
     */
    select?: JogadorPartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JogadorPartida
     */
    omit?: JogadorPartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogadorPartidaInclude<ExtArgs> | null
    /**
     * The filter to search for the JogadorPartida to update in case it exists.
     */
    where: JogadorPartidaWhereUniqueInput
    /**
     * In case the JogadorPartida found by the `where` argument doesn't exist, create a new JogadorPartida with this data.
     */
    create: XOR<JogadorPartidaCreateInput, JogadorPartidaUncheckedCreateInput>
    /**
     * In case the JogadorPartida was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JogadorPartidaUpdateInput, JogadorPartidaUncheckedUpdateInput>
  }

  /**
   * JogadorPartida delete
   */
  export type JogadorPartidaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogadorPartida
     */
    select?: JogadorPartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JogadorPartida
     */
    omit?: JogadorPartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogadorPartidaInclude<ExtArgs> | null
    /**
     * Filter which JogadorPartida to delete.
     */
    where: JogadorPartidaWhereUniqueInput
  }

  /**
   * JogadorPartida deleteMany
   */
  export type JogadorPartidaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JogadorPartidas to delete
     */
    where?: JogadorPartidaWhereInput
    /**
     * Limit how many JogadorPartidas to delete.
     */
    limit?: number
  }

  /**
   * JogadorPartida.cartas
   */
  export type JogadorPartida$cartasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
    where?: CartaWhereInput
    orderBy?: CartaOrderByWithRelationInput | CartaOrderByWithRelationInput[]
    cursor?: CartaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartaScalarFieldEnum | CartaScalarFieldEnum[]
  }

  /**
   * JogadorPartida without action
   */
  export type JogadorPartidaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogadorPartida
     */
    select?: JogadorPartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JogadorPartida
     */
    omit?: JogadorPartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogadorPartidaInclude<ExtArgs> | null
  }


  /**
   * Model Carta
   */

  export type AggregateCarta = {
    _count: CartaCountAggregateOutputType | null
    _avg: CartaAvgAggregateOutputType | null
    _sum: CartaSumAggregateOutputType | null
    _min: CartaMinAggregateOutputType | null
    _max: CartaMaxAggregateOutputType | null
  }

  export type CartaAvgAggregateOutputType = {
    id: number | null
    partida_id: number | null
    jogador_partida_id: number | null
    valor: number | null
    quantidade: number | null
  }

  export type CartaSumAggregateOutputType = {
    id: number | null
    partida_id: number | null
    jogador_partida_id: number | null
    valor: number | null
    quantidade: number | null
  }

  export type CartaMinAggregateOutputType = {
    id: number | null
    partida_id: number | null
    jogador_partida_id: number | null
    valor: number | null
    tipo: string | null
    quantidade: number | null
  }

  export type CartaMaxAggregateOutputType = {
    id: number | null
    partida_id: number | null
    jogador_partida_id: number | null
    valor: number | null
    tipo: string | null
    quantidade: number | null
  }

  export type CartaCountAggregateOutputType = {
    id: number
    partida_id: number
    jogador_partida_id: number
    valor: number
    tipo: number
    quantidade: number
    _all: number
  }


  export type CartaAvgAggregateInputType = {
    id?: true
    partida_id?: true
    jogador_partida_id?: true
    valor?: true
    quantidade?: true
  }

  export type CartaSumAggregateInputType = {
    id?: true
    partida_id?: true
    jogador_partida_id?: true
    valor?: true
    quantidade?: true
  }

  export type CartaMinAggregateInputType = {
    id?: true
    partida_id?: true
    jogador_partida_id?: true
    valor?: true
    tipo?: true
    quantidade?: true
  }

  export type CartaMaxAggregateInputType = {
    id?: true
    partida_id?: true
    jogador_partida_id?: true
    valor?: true
    tipo?: true
    quantidade?: true
  }

  export type CartaCountAggregateInputType = {
    id?: true
    partida_id?: true
    jogador_partida_id?: true
    valor?: true
    tipo?: true
    quantidade?: true
    _all?: true
  }

  export type CartaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carta to aggregate.
     */
    where?: CartaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cartas to fetch.
     */
    orderBy?: CartaOrderByWithRelationInput | CartaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cartas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cartas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cartas
    **/
    _count?: true | CartaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartaMaxAggregateInputType
  }

  export type GetCartaAggregateType<T extends CartaAggregateArgs> = {
        [P in keyof T & keyof AggregateCarta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarta[P]>
      : GetScalarType<T[P], AggregateCarta[P]>
  }




  export type CartaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartaWhereInput
    orderBy?: CartaOrderByWithAggregationInput | CartaOrderByWithAggregationInput[]
    by: CartaScalarFieldEnum[] | CartaScalarFieldEnum
    having?: CartaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartaCountAggregateInputType | true
    _avg?: CartaAvgAggregateInputType
    _sum?: CartaSumAggregateInputType
    _min?: CartaMinAggregateInputType
    _max?: CartaMaxAggregateInputType
  }

  export type CartaGroupByOutputType = {
    id: number
    partida_id: number
    jogador_partida_id: number | null
    valor: number
    tipo: string
    quantidade: number
    _count: CartaCountAggregateOutputType | null
    _avg: CartaAvgAggregateOutputType | null
    _sum: CartaSumAggregateOutputType | null
    _min: CartaMinAggregateOutputType | null
    _max: CartaMaxAggregateOutputType | null
  }

  type GetCartaGroupByPayload<T extends CartaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartaGroupByOutputType[P]>
            : GetScalarType<T[P], CartaGroupByOutputType[P]>
        }
      >
    >


  export type CartaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partida_id?: boolean
    jogador_partida_id?: boolean
    valor?: boolean
    tipo?: boolean
    quantidade?: boolean
    partida?: boolean | PartidaDefaultArgs<ExtArgs>
    jogadorPartida?: boolean | Carta$jogadorPartidaArgs<ExtArgs>
  }, ExtArgs["result"]["carta"]>

  export type CartaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partida_id?: boolean
    jogador_partida_id?: boolean
    valor?: boolean
    tipo?: boolean
    quantidade?: boolean
    partida?: boolean | PartidaDefaultArgs<ExtArgs>
    jogadorPartida?: boolean | Carta$jogadorPartidaArgs<ExtArgs>
  }, ExtArgs["result"]["carta"]>

  export type CartaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partida_id?: boolean
    jogador_partida_id?: boolean
    valor?: boolean
    tipo?: boolean
    quantidade?: boolean
    partida?: boolean | PartidaDefaultArgs<ExtArgs>
    jogadorPartida?: boolean | Carta$jogadorPartidaArgs<ExtArgs>
  }, ExtArgs["result"]["carta"]>

  export type CartaSelectScalar = {
    id?: boolean
    partida_id?: boolean
    jogador_partida_id?: boolean
    valor?: boolean
    tipo?: boolean
    quantidade?: boolean
  }

  export type CartaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "partida_id" | "jogador_partida_id" | "valor" | "tipo" | "quantidade", ExtArgs["result"]["carta"]>
  export type CartaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partida?: boolean | PartidaDefaultArgs<ExtArgs>
    jogadorPartida?: boolean | Carta$jogadorPartidaArgs<ExtArgs>
  }
  export type CartaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partida?: boolean | PartidaDefaultArgs<ExtArgs>
    jogadorPartida?: boolean | Carta$jogadorPartidaArgs<ExtArgs>
  }
  export type CartaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partida?: boolean | PartidaDefaultArgs<ExtArgs>
    jogadorPartida?: boolean | Carta$jogadorPartidaArgs<ExtArgs>
  }

  export type $CartaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carta"
    objects: {
      partida: Prisma.$PartidaPayload<ExtArgs>
      jogadorPartida: Prisma.$JogadorPartidaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      partida_id: number
      jogador_partida_id: number | null
      valor: number
      tipo: string
      quantidade: number
    }, ExtArgs["result"]["carta"]>
    composites: {}
  }

  type CartaGetPayload<S extends boolean | null | undefined | CartaDefaultArgs> = $Result.GetResult<Prisma.$CartaPayload, S>

  type CartaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartaCountAggregateInputType | true
    }

  export interface CartaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carta'], meta: { name: 'Carta' } }
    /**
     * Find zero or one Carta that matches the filter.
     * @param {CartaFindUniqueArgs} args - Arguments to find a Carta
     * @example
     * // Get one Carta
     * const carta = await prisma.carta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartaFindUniqueArgs>(args: SelectSubset<T, CartaFindUniqueArgs<ExtArgs>>): Prisma__CartaClient<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartaFindUniqueOrThrowArgs} args - Arguments to find a Carta
     * @example
     * // Get one Carta
     * const carta = await prisma.carta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartaFindUniqueOrThrowArgs>(args: SelectSubset<T, CartaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartaClient<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaFindFirstArgs} args - Arguments to find a Carta
     * @example
     * // Get one Carta
     * const carta = await prisma.carta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartaFindFirstArgs>(args?: SelectSubset<T, CartaFindFirstArgs<ExtArgs>>): Prisma__CartaClient<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaFindFirstOrThrowArgs} args - Arguments to find a Carta
     * @example
     * // Get one Carta
     * const carta = await prisma.carta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartaFindFirstOrThrowArgs>(args?: SelectSubset<T, CartaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartaClient<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cartas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cartas
     * const cartas = await prisma.carta.findMany()
     * 
     * // Get first 10 Cartas
     * const cartas = await prisma.carta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartaWithIdOnly = await prisma.carta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartaFindManyArgs>(args?: SelectSubset<T, CartaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carta.
     * @param {CartaCreateArgs} args - Arguments to create a Carta.
     * @example
     * // Create one Carta
     * const Carta = await prisma.carta.create({
     *   data: {
     *     // ... data to create a Carta
     *   }
     * })
     * 
     */
    create<T extends CartaCreateArgs>(args: SelectSubset<T, CartaCreateArgs<ExtArgs>>): Prisma__CartaClient<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cartas.
     * @param {CartaCreateManyArgs} args - Arguments to create many Cartas.
     * @example
     * // Create many Cartas
     * const carta = await prisma.carta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartaCreateManyArgs>(args?: SelectSubset<T, CartaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cartas and returns the data saved in the database.
     * @param {CartaCreateManyAndReturnArgs} args - Arguments to create many Cartas.
     * @example
     * // Create many Cartas
     * const carta = await prisma.carta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cartas and only return the `id`
     * const cartaWithIdOnly = await prisma.carta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartaCreateManyAndReturnArgs>(args?: SelectSubset<T, CartaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carta.
     * @param {CartaDeleteArgs} args - Arguments to delete one Carta.
     * @example
     * // Delete one Carta
     * const Carta = await prisma.carta.delete({
     *   where: {
     *     // ... filter to delete one Carta
     *   }
     * })
     * 
     */
    delete<T extends CartaDeleteArgs>(args: SelectSubset<T, CartaDeleteArgs<ExtArgs>>): Prisma__CartaClient<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carta.
     * @param {CartaUpdateArgs} args - Arguments to update one Carta.
     * @example
     * // Update one Carta
     * const carta = await prisma.carta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartaUpdateArgs>(args: SelectSubset<T, CartaUpdateArgs<ExtArgs>>): Prisma__CartaClient<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cartas.
     * @param {CartaDeleteManyArgs} args - Arguments to filter Cartas to delete.
     * @example
     * // Delete a few Cartas
     * const { count } = await prisma.carta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartaDeleteManyArgs>(args?: SelectSubset<T, CartaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cartas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cartas
     * const carta = await prisma.carta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartaUpdateManyArgs>(args: SelectSubset<T, CartaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cartas and returns the data updated in the database.
     * @param {CartaUpdateManyAndReturnArgs} args - Arguments to update many Cartas.
     * @example
     * // Update many Cartas
     * const carta = await prisma.carta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cartas and only return the `id`
     * const cartaWithIdOnly = await prisma.carta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CartaUpdateManyAndReturnArgs>(args: SelectSubset<T, CartaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carta.
     * @param {CartaUpsertArgs} args - Arguments to update or create a Carta.
     * @example
     * // Update or create a Carta
     * const carta = await prisma.carta.upsert({
     *   create: {
     *     // ... data to create a Carta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carta we want to update
     *   }
     * })
     */
    upsert<T extends CartaUpsertArgs>(args: SelectSubset<T, CartaUpsertArgs<ExtArgs>>): Prisma__CartaClient<$Result.GetResult<Prisma.$CartaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cartas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaCountArgs} args - Arguments to filter Cartas to count.
     * @example
     * // Count the number of Cartas
     * const count = await prisma.carta.count({
     *   where: {
     *     // ... the filter for the Cartas we want to count
     *   }
     * })
    **/
    count<T extends CartaCountArgs>(
      args?: Subset<T, CartaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartaAggregateArgs>(args: Subset<T, CartaAggregateArgs>): Prisma.PrismaPromise<GetCartaAggregateType<T>>

    /**
     * Group by Carta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaGroupByArgs} args - Group by arguments.
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
      T extends CartaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartaGroupByArgs['orderBy'] }
        : { orderBy?: CartaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carta model
   */
  readonly fields: CartaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    partida<T extends PartidaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PartidaDefaultArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    jogadorPartida<T extends Carta$jogadorPartidaArgs<ExtArgs> = {}>(args?: Subset<T, Carta$jogadorPartidaArgs<ExtArgs>>): Prisma__JogadorPartidaClient<$Result.GetResult<Prisma.$JogadorPartidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Carta model
   */
  interface CartaFieldRefs {
    readonly id: FieldRef<"Carta", 'Int'>
    readonly partida_id: FieldRef<"Carta", 'Int'>
    readonly jogador_partida_id: FieldRef<"Carta", 'Int'>
    readonly valor: FieldRef<"Carta", 'Int'>
    readonly tipo: FieldRef<"Carta", 'String'>
    readonly quantidade: FieldRef<"Carta", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Carta findUnique
   */
  export type CartaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
    /**
     * Filter, which Carta to fetch.
     */
    where: CartaWhereUniqueInput
  }

  /**
   * Carta findUniqueOrThrow
   */
  export type CartaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
    /**
     * Filter, which Carta to fetch.
     */
    where: CartaWhereUniqueInput
  }

  /**
   * Carta findFirst
   */
  export type CartaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
    /**
     * Filter, which Carta to fetch.
     */
    where?: CartaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cartas to fetch.
     */
    orderBy?: CartaOrderByWithRelationInput | CartaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cartas.
     */
    cursor?: CartaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cartas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cartas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cartas.
     */
    distinct?: CartaScalarFieldEnum | CartaScalarFieldEnum[]
  }

  /**
   * Carta findFirstOrThrow
   */
  export type CartaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
    /**
     * Filter, which Carta to fetch.
     */
    where?: CartaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cartas to fetch.
     */
    orderBy?: CartaOrderByWithRelationInput | CartaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cartas.
     */
    cursor?: CartaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cartas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cartas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cartas.
     */
    distinct?: CartaScalarFieldEnum | CartaScalarFieldEnum[]
  }

  /**
   * Carta findMany
   */
  export type CartaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
    /**
     * Filter, which Cartas to fetch.
     */
    where?: CartaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cartas to fetch.
     */
    orderBy?: CartaOrderByWithRelationInput | CartaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cartas.
     */
    cursor?: CartaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cartas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cartas.
     */
    skip?: number
    distinct?: CartaScalarFieldEnum | CartaScalarFieldEnum[]
  }

  /**
   * Carta create
   */
  export type CartaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
    /**
     * The data needed to create a Carta.
     */
    data: XOR<CartaCreateInput, CartaUncheckedCreateInput>
  }

  /**
   * Carta createMany
   */
  export type CartaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cartas.
     */
    data: CartaCreateManyInput | CartaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carta createManyAndReturn
   */
  export type CartaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * The data used to create many Cartas.
     */
    data: CartaCreateManyInput | CartaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Carta update
   */
  export type CartaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
    /**
     * The data needed to update a Carta.
     */
    data: XOR<CartaUpdateInput, CartaUncheckedUpdateInput>
    /**
     * Choose, which Carta to update.
     */
    where: CartaWhereUniqueInput
  }

  /**
   * Carta updateMany
   */
  export type CartaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cartas.
     */
    data: XOR<CartaUpdateManyMutationInput, CartaUncheckedUpdateManyInput>
    /**
     * Filter which Cartas to update
     */
    where?: CartaWhereInput
    /**
     * Limit how many Cartas to update.
     */
    limit?: number
  }

  /**
   * Carta updateManyAndReturn
   */
  export type CartaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * The data used to update Cartas.
     */
    data: XOR<CartaUpdateManyMutationInput, CartaUncheckedUpdateManyInput>
    /**
     * Filter which Cartas to update
     */
    where?: CartaWhereInput
    /**
     * Limit how many Cartas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Carta upsert
   */
  export type CartaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
    /**
     * The filter to search for the Carta to update in case it exists.
     */
    where: CartaWhereUniqueInput
    /**
     * In case the Carta found by the `where` argument doesn't exist, create a new Carta with this data.
     */
    create: XOR<CartaCreateInput, CartaUncheckedCreateInput>
    /**
     * In case the Carta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartaUpdateInput, CartaUncheckedUpdateInput>
  }

  /**
   * Carta delete
   */
  export type CartaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
    /**
     * Filter which Carta to delete.
     */
    where: CartaWhereUniqueInput
  }

  /**
   * Carta deleteMany
   */
  export type CartaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cartas to delete
     */
    where?: CartaWhereInput
    /**
     * Limit how many Cartas to delete.
     */
    limit?: number
  }

  /**
   * Carta.jogadorPartida
   */
  export type Carta$jogadorPartidaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogadorPartida
     */
    select?: JogadorPartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JogadorPartida
     */
    omit?: JogadorPartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogadorPartidaInclude<ExtArgs> | null
    where?: JogadorPartidaWhereInput
  }

  /**
   * Carta without action
   */
  export type CartaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carta
     */
    select?: CartaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carta
     */
    omit?: CartaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaInclude<ExtArgs> | null
  }


  /**
   * Model ItemLoja
   */

  export type AggregateItemLoja = {
    _count: ItemLojaCountAggregateOutputType | null
    _avg: ItemLojaAvgAggregateOutputType | null
    _sum: ItemLojaSumAggregateOutputType | null
    _min: ItemLojaMinAggregateOutputType | null
    _max: ItemLojaMaxAggregateOutputType | null
  }

  export type ItemLojaAvgAggregateOutputType = {
    id: number | null
    preco: number | null
  }

  export type ItemLojaSumAggregateOutputType = {
    id: number | null
    preco: number | null
  }

  export type ItemLojaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    tipo: $Enums.TipoItemLoja | null
    disponibilidade: $Enums.DisponibilidadeItem | null
    preco: number | null
  }

  export type ItemLojaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    tipo: $Enums.TipoItemLoja | null
    disponibilidade: $Enums.DisponibilidadeItem | null
    preco: number | null
  }

  export type ItemLojaCountAggregateOutputType = {
    id: number
    nome: number
    tipo: number
    disponibilidade: number
    preco: number
    _all: number
  }


  export type ItemLojaAvgAggregateInputType = {
    id?: true
    preco?: true
  }

  export type ItemLojaSumAggregateInputType = {
    id?: true
    preco?: true
  }

  export type ItemLojaMinAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    disponibilidade?: true
    preco?: true
  }

  export type ItemLojaMaxAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    disponibilidade?: true
    preco?: true
  }

  export type ItemLojaCountAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    disponibilidade?: true
    preco?: true
    _all?: true
  }

  export type ItemLojaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemLoja to aggregate.
     */
    where?: ItemLojaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemLojas to fetch.
     */
    orderBy?: ItemLojaOrderByWithRelationInput | ItemLojaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemLojaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemLojas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemLojas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemLojas
    **/
    _count?: true | ItemLojaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemLojaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemLojaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemLojaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemLojaMaxAggregateInputType
  }

  export type GetItemLojaAggregateType<T extends ItemLojaAggregateArgs> = {
        [P in keyof T & keyof AggregateItemLoja]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemLoja[P]>
      : GetScalarType<T[P], AggregateItemLoja[P]>
  }




  export type ItemLojaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemLojaWhereInput
    orderBy?: ItemLojaOrderByWithAggregationInput | ItemLojaOrderByWithAggregationInput[]
    by: ItemLojaScalarFieldEnum[] | ItemLojaScalarFieldEnum
    having?: ItemLojaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemLojaCountAggregateInputType | true
    _avg?: ItemLojaAvgAggregateInputType
    _sum?: ItemLojaSumAggregateInputType
    _min?: ItemLojaMinAggregateInputType
    _max?: ItemLojaMaxAggregateInputType
  }

  export type ItemLojaGroupByOutputType = {
    id: number
    nome: string
    tipo: $Enums.TipoItemLoja
    disponibilidade: $Enums.DisponibilidadeItem
    preco: number
    _count: ItemLojaCountAggregateOutputType | null
    _avg: ItemLojaAvgAggregateOutputType | null
    _sum: ItemLojaSumAggregateOutputType | null
    _min: ItemLojaMinAggregateOutputType | null
    _max: ItemLojaMaxAggregateOutputType | null
  }

  type GetItemLojaGroupByPayload<T extends ItemLojaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemLojaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemLojaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemLojaGroupByOutputType[P]>
            : GetScalarType<T[P], ItemLojaGroupByOutputType[P]>
        }
      >
    >


  export type ItemLojaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    disponibilidade?: boolean
    preco?: boolean
    usuarios?: boolean | ItemLoja$usuariosArgs<ExtArgs>
    _count?: boolean | ItemLojaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemLoja"]>

  export type ItemLojaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    disponibilidade?: boolean
    preco?: boolean
  }, ExtArgs["result"]["itemLoja"]>

  export type ItemLojaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    disponibilidade?: boolean
    preco?: boolean
  }, ExtArgs["result"]["itemLoja"]>

  export type ItemLojaSelectScalar = {
    id?: boolean
    nome?: boolean
    tipo?: boolean
    disponibilidade?: boolean
    preco?: boolean
  }

  export type ItemLojaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "tipo" | "disponibilidade" | "preco", ExtArgs["result"]["itemLoja"]>
  export type ItemLojaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | ItemLoja$usuariosArgs<ExtArgs>
    _count?: boolean | ItemLojaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemLojaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ItemLojaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ItemLojaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemLoja"
    objects: {
      usuarios: Prisma.$ItemUsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      tipo: $Enums.TipoItemLoja
      disponibilidade: $Enums.DisponibilidadeItem
      preco: number
    }, ExtArgs["result"]["itemLoja"]>
    composites: {}
  }

  type ItemLojaGetPayload<S extends boolean | null | undefined | ItemLojaDefaultArgs> = $Result.GetResult<Prisma.$ItemLojaPayload, S>

  type ItemLojaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemLojaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemLojaCountAggregateInputType | true
    }

  export interface ItemLojaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemLoja'], meta: { name: 'ItemLoja' } }
    /**
     * Find zero or one ItemLoja that matches the filter.
     * @param {ItemLojaFindUniqueArgs} args - Arguments to find a ItemLoja
     * @example
     * // Get one ItemLoja
     * const itemLoja = await prisma.itemLoja.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemLojaFindUniqueArgs>(args: SelectSubset<T, ItemLojaFindUniqueArgs<ExtArgs>>): Prisma__ItemLojaClient<$Result.GetResult<Prisma.$ItemLojaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemLoja that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemLojaFindUniqueOrThrowArgs} args - Arguments to find a ItemLoja
     * @example
     * // Get one ItemLoja
     * const itemLoja = await prisma.itemLoja.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemLojaFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemLojaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemLojaClient<$Result.GetResult<Prisma.$ItemLojaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemLoja that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemLojaFindFirstArgs} args - Arguments to find a ItemLoja
     * @example
     * // Get one ItemLoja
     * const itemLoja = await prisma.itemLoja.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemLojaFindFirstArgs>(args?: SelectSubset<T, ItemLojaFindFirstArgs<ExtArgs>>): Prisma__ItemLojaClient<$Result.GetResult<Prisma.$ItemLojaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemLoja that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemLojaFindFirstOrThrowArgs} args - Arguments to find a ItemLoja
     * @example
     * // Get one ItemLoja
     * const itemLoja = await prisma.itemLoja.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemLojaFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemLojaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemLojaClient<$Result.GetResult<Prisma.$ItemLojaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemLojas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemLojaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemLojas
     * const itemLojas = await prisma.itemLoja.findMany()
     * 
     * // Get first 10 ItemLojas
     * const itemLojas = await prisma.itemLoja.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemLojaWithIdOnly = await prisma.itemLoja.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemLojaFindManyArgs>(args?: SelectSubset<T, ItemLojaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemLojaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemLoja.
     * @param {ItemLojaCreateArgs} args - Arguments to create a ItemLoja.
     * @example
     * // Create one ItemLoja
     * const ItemLoja = await prisma.itemLoja.create({
     *   data: {
     *     // ... data to create a ItemLoja
     *   }
     * })
     * 
     */
    create<T extends ItemLojaCreateArgs>(args: SelectSubset<T, ItemLojaCreateArgs<ExtArgs>>): Prisma__ItemLojaClient<$Result.GetResult<Prisma.$ItemLojaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemLojas.
     * @param {ItemLojaCreateManyArgs} args - Arguments to create many ItemLojas.
     * @example
     * // Create many ItemLojas
     * const itemLoja = await prisma.itemLoja.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemLojaCreateManyArgs>(args?: SelectSubset<T, ItemLojaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemLojas and returns the data saved in the database.
     * @param {ItemLojaCreateManyAndReturnArgs} args - Arguments to create many ItemLojas.
     * @example
     * // Create many ItemLojas
     * const itemLoja = await prisma.itemLoja.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemLojas and only return the `id`
     * const itemLojaWithIdOnly = await prisma.itemLoja.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemLojaCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemLojaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemLojaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemLoja.
     * @param {ItemLojaDeleteArgs} args - Arguments to delete one ItemLoja.
     * @example
     * // Delete one ItemLoja
     * const ItemLoja = await prisma.itemLoja.delete({
     *   where: {
     *     // ... filter to delete one ItemLoja
     *   }
     * })
     * 
     */
    delete<T extends ItemLojaDeleteArgs>(args: SelectSubset<T, ItemLojaDeleteArgs<ExtArgs>>): Prisma__ItemLojaClient<$Result.GetResult<Prisma.$ItemLojaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemLoja.
     * @param {ItemLojaUpdateArgs} args - Arguments to update one ItemLoja.
     * @example
     * // Update one ItemLoja
     * const itemLoja = await prisma.itemLoja.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemLojaUpdateArgs>(args: SelectSubset<T, ItemLojaUpdateArgs<ExtArgs>>): Prisma__ItemLojaClient<$Result.GetResult<Prisma.$ItemLojaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemLojas.
     * @param {ItemLojaDeleteManyArgs} args - Arguments to filter ItemLojas to delete.
     * @example
     * // Delete a few ItemLojas
     * const { count } = await prisma.itemLoja.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemLojaDeleteManyArgs>(args?: SelectSubset<T, ItemLojaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemLojas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemLojaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemLojas
     * const itemLoja = await prisma.itemLoja.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemLojaUpdateManyArgs>(args: SelectSubset<T, ItemLojaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemLojas and returns the data updated in the database.
     * @param {ItemLojaUpdateManyAndReturnArgs} args - Arguments to update many ItemLojas.
     * @example
     * // Update many ItemLojas
     * const itemLoja = await prisma.itemLoja.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemLojas and only return the `id`
     * const itemLojaWithIdOnly = await prisma.itemLoja.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemLojaUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemLojaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemLojaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemLoja.
     * @param {ItemLojaUpsertArgs} args - Arguments to update or create a ItemLoja.
     * @example
     * // Update or create a ItemLoja
     * const itemLoja = await prisma.itemLoja.upsert({
     *   create: {
     *     // ... data to create a ItemLoja
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemLoja we want to update
     *   }
     * })
     */
    upsert<T extends ItemLojaUpsertArgs>(args: SelectSubset<T, ItemLojaUpsertArgs<ExtArgs>>): Prisma__ItemLojaClient<$Result.GetResult<Prisma.$ItemLojaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemLojas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemLojaCountArgs} args - Arguments to filter ItemLojas to count.
     * @example
     * // Count the number of ItemLojas
     * const count = await prisma.itemLoja.count({
     *   where: {
     *     // ... the filter for the ItemLojas we want to count
     *   }
     * })
    **/
    count<T extends ItemLojaCountArgs>(
      args?: Subset<T, ItemLojaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemLojaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemLoja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemLojaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemLojaAggregateArgs>(args: Subset<T, ItemLojaAggregateArgs>): Prisma.PrismaPromise<GetItemLojaAggregateType<T>>

    /**
     * Group by ItemLoja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemLojaGroupByArgs} args - Group by arguments.
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
      T extends ItemLojaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemLojaGroupByArgs['orderBy'] }
        : { orderBy?: ItemLojaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemLojaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemLojaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemLoja model
   */
  readonly fields: ItemLojaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemLoja.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemLojaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends ItemLoja$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, ItemLoja$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ItemLoja model
   */
  interface ItemLojaFieldRefs {
    readonly id: FieldRef<"ItemLoja", 'Int'>
    readonly nome: FieldRef<"ItemLoja", 'String'>
    readonly tipo: FieldRef<"ItemLoja", 'TipoItemLoja'>
    readonly disponibilidade: FieldRef<"ItemLoja", 'DisponibilidadeItem'>
    readonly preco: FieldRef<"ItemLoja", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ItemLoja findUnique
   */
  export type ItemLojaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemLoja
     */
    select?: ItemLojaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemLoja
     */
    omit?: ItemLojaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemLojaInclude<ExtArgs> | null
    /**
     * Filter, which ItemLoja to fetch.
     */
    where: ItemLojaWhereUniqueInput
  }

  /**
   * ItemLoja findUniqueOrThrow
   */
  export type ItemLojaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemLoja
     */
    select?: ItemLojaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemLoja
     */
    omit?: ItemLojaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemLojaInclude<ExtArgs> | null
    /**
     * Filter, which ItemLoja to fetch.
     */
    where: ItemLojaWhereUniqueInput
  }

  /**
   * ItemLoja findFirst
   */
  export type ItemLojaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemLoja
     */
    select?: ItemLojaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemLoja
     */
    omit?: ItemLojaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemLojaInclude<ExtArgs> | null
    /**
     * Filter, which ItemLoja to fetch.
     */
    where?: ItemLojaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemLojas to fetch.
     */
    orderBy?: ItemLojaOrderByWithRelationInput | ItemLojaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemLojas.
     */
    cursor?: ItemLojaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemLojas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemLojas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemLojas.
     */
    distinct?: ItemLojaScalarFieldEnum | ItemLojaScalarFieldEnum[]
  }

  /**
   * ItemLoja findFirstOrThrow
   */
  export type ItemLojaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemLoja
     */
    select?: ItemLojaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemLoja
     */
    omit?: ItemLojaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemLojaInclude<ExtArgs> | null
    /**
     * Filter, which ItemLoja to fetch.
     */
    where?: ItemLojaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemLojas to fetch.
     */
    orderBy?: ItemLojaOrderByWithRelationInput | ItemLojaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemLojas.
     */
    cursor?: ItemLojaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemLojas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemLojas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemLojas.
     */
    distinct?: ItemLojaScalarFieldEnum | ItemLojaScalarFieldEnum[]
  }

  /**
   * ItemLoja findMany
   */
  export type ItemLojaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemLoja
     */
    select?: ItemLojaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemLoja
     */
    omit?: ItemLojaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemLojaInclude<ExtArgs> | null
    /**
     * Filter, which ItemLojas to fetch.
     */
    where?: ItemLojaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemLojas to fetch.
     */
    orderBy?: ItemLojaOrderByWithRelationInput | ItemLojaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemLojas.
     */
    cursor?: ItemLojaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemLojas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemLojas.
     */
    skip?: number
    distinct?: ItemLojaScalarFieldEnum | ItemLojaScalarFieldEnum[]
  }

  /**
   * ItemLoja create
   */
  export type ItemLojaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemLoja
     */
    select?: ItemLojaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemLoja
     */
    omit?: ItemLojaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemLojaInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemLoja.
     */
    data: XOR<ItemLojaCreateInput, ItemLojaUncheckedCreateInput>
  }

  /**
   * ItemLoja createMany
   */
  export type ItemLojaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemLojas.
     */
    data: ItemLojaCreateManyInput | ItemLojaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemLoja createManyAndReturn
   */
  export type ItemLojaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemLoja
     */
    select?: ItemLojaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemLoja
     */
    omit?: ItemLojaOmit<ExtArgs> | null
    /**
     * The data used to create many ItemLojas.
     */
    data: ItemLojaCreateManyInput | ItemLojaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemLoja update
   */
  export type ItemLojaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemLoja
     */
    select?: ItemLojaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemLoja
     */
    omit?: ItemLojaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemLojaInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemLoja.
     */
    data: XOR<ItemLojaUpdateInput, ItemLojaUncheckedUpdateInput>
    /**
     * Choose, which ItemLoja to update.
     */
    where: ItemLojaWhereUniqueInput
  }

  /**
   * ItemLoja updateMany
   */
  export type ItemLojaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemLojas.
     */
    data: XOR<ItemLojaUpdateManyMutationInput, ItemLojaUncheckedUpdateManyInput>
    /**
     * Filter which ItemLojas to update
     */
    where?: ItemLojaWhereInput
    /**
     * Limit how many ItemLojas to update.
     */
    limit?: number
  }

  /**
   * ItemLoja updateManyAndReturn
   */
  export type ItemLojaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemLoja
     */
    select?: ItemLojaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemLoja
     */
    omit?: ItemLojaOmit<ExtArgs> | null
    /**
     * The data used to update ItemLojas.
     */
    data: XOR<ItemLojaUpdateManyMutationInput, ItemLojaUncheckedUpdateManyInput>
    /**
     * Filter which ItemLojas to update
     */
    where?: ItemLojaWhereInput
    /**
     * Limit how many ItemLojas to update.
     */
    limit?: number
  }

  /**
   * ItemLoja upsert
   */
  export type ItemLojaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemLoja
     */
    select?: ItemLojaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemLoja
     */
    omit?: ItemLojaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemLojaInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemLoja to update in case it exists.
     */
    where: ItemLojaWhereUniqueInput
    /**
     * In case the ItemLoja found by the `where` argument doesn't exist, create a new ItemLoja with this data.
     */
    create: XOR<ItemLojaCreateInput, ItemLojaUncheckedCreateInput>
    /**
     * In case the ItemLoja was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemLojaUpdateInput, ItemLojaUncheckedUpdateInput>
  }

  /**
   * ItemLoja delete
   */
  export type ItemLojaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemLoja
     */
    select?: ItemLojaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemLoja
     */
    omit?: ItemLojaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemLojaInclude<ExtArgs> | null
    /**
     * Filter which ItemLoja to delete.
     */
    where: ItemLojaWhereUniqueInput
  }

  /**
   * ItemLoja deleteMany
   */
  export type ItemLojaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemLojas to delete
     */
    where?: ItemLojaWhereInput
    /**
     * Limit how many ItemLojas to delete.
     */
    limit?: number
  }

  /**
   * ItemLoja.usuarios
   */
  export type ItemLoja$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemUsuario
     */
    select?: ItemUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemUsuario
     */
    omit?: ItemUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemUsuarioInclude<ExtArgs> | null
    where?: ItemUsuarioWhereInput
    orderBy?: ItemUsuarioOrderByWithRelationInput | ItemUsuarioOrderByWithRelationInput[]
    cursor?: ItemUsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemUsuarioScalarFieldEnum | ItemUsuarioScalarFieldEnum[]
  }

  /**
   * ItemLoja without action
   */
  export type ItemLojaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemLoja
     */
    select?: ItemLojaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemLoja
     */
    omit?: ItemLojaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemLojaInclude<ExtArgs> | null
  }


  /**
   * Model ItemUsuario
   */

  export type AggregateItemUsuario = {
    _count: ItemUsuarioCountAggregateOutputType | null
    _avg: ItemUsuarioAvgAggregateOutputType | null
    _sum: ItemUsuarioSumAggregateOutputType | null
    _min: ItemUsuarioMinAggregateOutputType | null
    _max: ItemUsuarioMaxAggregateOutputType | null
  }

  export type ItemUsuarioAvgAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    item_loja_id: number | null
  }

  export type ItemUsuarioSumAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    item_loja_id: number | null
  }

  export type ItemUsuarioMinAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    item_loja_id: number | null
  }

  export type ItemUsuarioMaxAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    item_loja_id: number | null
  }

  export type ItemUsuarioCountAggregateOutputType = {
    id: number
    usuario_id: number
    item_loja_id: number
    _all: number
  }


  export type ItemUsuarioAvgAggregateInputType = {
    id?: true
    usuario_id?: true
    item_loja_id?: true
  }

  export type ItemUsuarioSumAggregateInputType = {
    id?: true
    usuario_id?: true
    item_loja_id?: true
  }

  export type ItemUsuarioMinAggregateInputType = {
    id?: true
    usuario_id?: true
    item_loja_id?: true
  }

  export type ItemUsuarioMaxAggregateInputType = {
    id?: true
    usuario_id?: true
    item_loja_id?: true
  }

  export type ItemUsuarioCountAggregateInputType = {
    id?: true
    usuario_id?: true
    item_loja_id?: true
    _all?: true
  }

  export type ItemUsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemUsuario to aggregate.
     */
    where?: ItemUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemUsuarios to fetch.
     */
    orderBy?: ItemUsuarioOrderByWithRelationInput | ItemUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemUsuarios
    **/
    _count?: true | ItemUsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemUsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemUsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemUsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemUsuarioMaxAggregateInputType
  }

  export type GetItemUsuarioAggregateType<T extends ItemUsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateItemUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemUsuario[P]>
      : GetScalarType<T[P], AggregateItemUsuario[P]>
  }




  export type ItemUsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemUsuarioWhereInput
    orderBy?: ItemUsuarioOrderByWithAggregationInput | ItemUsuarioOrderByWithAggregationInput[]
    by: ItemUsuarioScalarFieldEnum[] | ItemUsuarioScalarFieldEnum
    having?: ItemUsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemUsuarioCountAggregateInputType | true
    _avg?: ItemUsuarioAvgAggregateInputType
    _sum?: ItemUsuarioSumAggregateInputType
    _min?: ItemUsuarioMinAggregateInputType
    _max?: ItemUsuarioMaxAggregateInputType
  }

  export type ItemUsuarioGroupByOutputType = {
    id: number
    usuario_id: number
    item_loja_id: number
    _count: ItemUsuarioCountAggregateOutputType | null
    _avg: ItemUsuarioAvgAggregateOutputType | null
    _sum: ItemUsuarioSumAggregateOutputType | null
    _min: ItemUsuarioMinAggregateOutputType | null
    _max: ItemUsuarioMaxAggregateOutputType | null
  }

  type GetItemUsuarioGroupByPayload<T extends ItemUsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemUsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemUsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemUsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], ItemUsuarioGroupByOutputType[P]>
        }
      >
    >


  export type ItemUsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    item_loja_id?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    itemLoja?: boolean | ItemLojaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemUsuario"]>

  export type ItemUsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    item_loja_id?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    itemLoja?: boolean | ItemLojaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemUsuario"]>

  export type ItemUsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    item_loja_id?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    itemLoja?: boolean | ItemLojaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemUsuario"]>

  export type ItemUsuarioSelectScalar = {
    id?: boolean
    usuario_id?: boolean
    item_loja_id?: boolean
  }

  export type ItemUsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_id" | "item_loja_id", ExtArgs["result"]["itemUsuario"]>
  export type ItemUsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    itemLoja?: boolean | ItemLojaDefaultArgs<ExtArgs>
  }
  export type ItemUsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    itemLoja?: boolean | ItemLojaDefaultArgs<ExtArgs>
  }
  export type ItemUsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    itemLoja?: boolean | ItemLojaDefaultArgs<ExtArgs>
  }

  export type $ItemUsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemUsuario"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      itemLoja: Prisma.$ItemLojaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario_id: number
      item_loja_id: number
    }, ExtArgs["result"]["itemUsuario"]>
    composites: {}
  }

  type ItemUsuarioGetPayload<S extends boolean | null | undefined | ItemUsuarioDefaultArgs> = $Result.GetResult<Prisma.$ItemUsuarioPayload, S>

  type ItemUsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemUsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemUsuarioCountAggregateInputType | true
    }

  export interface ItemUsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemUsuario'], meta: { name: 'ItemUsuario' } }
    /**
     * Find zero or one ItemUsuario that matches the filter.
     * @param {ItemUsuarioFindUniqueArgs} args - Arguments to find a ItemUsuario
     * @example
     * // Get one ItemUsuario
     * const itemUsuario = await prisma.itemUsuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemUsuarioFindUniqueArgs>(args: SelectSubset<T, ItemUsuarioFindUniqueArgs<ExtArgs>>): Prisma__ItemUsuarioClient<$Result.GetResult<Prisma.$ItemUsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemUsuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemUsuarioFindUniqueOrThrowArgs} args - Arguments to find a ItemUsuario
     * @example
     * // Get one ItemUsuario
     * const itemUsuario = await prisma.itemUsuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemUsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemUsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemUsuarioClient<$Result.GetResult<Prisma.$ItemUsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemUsuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUsuarioFindFirstArgs} args - Arguments to find a ItemUsuario
     * @example
     * // Get one ItemUsuario
     * const itemUsuario = await prisma.itemUsuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemUsuarioFindFirstArgs>(args?: SelectSubset<T, ItemUsuarioFindFirstArgs<ExtArgs>>): Prisma__ItemUsuarioClient<$Result.GetResult<Prisma.$ItemUsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemUsuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUsuarioFindFirstOrThrowArgs} args - Arguments to find a ItemUsuario
     * @example
     * // Get one ItemUsuario
     * const itemUsuario = await prisma.itemUsuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemUsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemUsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemUsuarioClient<$Result.GetResult<Prisma.$ItemUsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemUsuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemUsuarios
     * const itemUsuarios = await prisma.itemUsuario.findMany()
     * 
     * // Get first 10 ItemUsuarios
     * const itemUsuarios = await prisma.itemUsuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemUsuarioWithIdOnly = await prisma.itemUsuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemUsuarioFindManyArgs>(args?: SelectSubset<T, ItemUsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemUsuario.
     * @param {ItemUsuarioCreateArgs} args - Arguments to create a ItemUsuario.
     * @example
     * // Create one ItemUsuario
     * const ItemUsuario = await prisma.itemUsuario.create({
     *   data: {
     *     // ... data to create a ItemUsuario
     *   }
     * })
     * 
     */
    create<T extends ItemUsuarioCreateArgs>(args: SelectSubset<T, ItemUsuarioCreateArgs<ExtArgs>>): Prisma__ItemUsuarioClient<$Result.GetResult<Prisma.$ItemUsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemUsuarios.
     * @param {ItemUsuarioCreateManyArgs} args - Arguments to create many ItemUsuarios.
     * @example
     * // Create many ItemUsuarios
     * const itemUsuario = await prisma.itemUsuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemUsuarioCreateManyArgs>(args?: SelectSubset<T, ItemUsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemUsuarios and returns the data saved in the database.
     * @param {ItemUsuarioCreateManyAndReturnArgs} args - Arguments to create many ItemUsuarios.
     * @example
     * // Create many ItemUsuarios
     * const itemUsuario = await prisma.itemUsuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemUsuarios and only return the `id`
     * const itemUsuarioWithIdOnly = await prisma.itemUsuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemUsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemUsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemUsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemUsuario.
     * @param {ItemUsuarioDeleteArgs} args - Arguments to delete one ItemUsuario.
     * @example
     * // Delete one ItemUsuario
     * const ItemUsuario = await prisma.itemUsuario.delete({
     *   where: {
     *     // ... filter to delete one ItemUsuario
     *   }
     * })
     * 
     */
    delete<T extends ItemUsuarioDeleteArgs>(args: SelectSubset<T, ItemUsuarioDeleteArgs<ExtArgs>>): Prisma__ItemUsuarioClient<$Result.GetResult<Prisma.$ItemUsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemUsuario.
     * @param {ItemUsuarioUpdateArgs} args - Arguments to update one ItemUsuario.
     * @example
     * // Update one ItemUsuario
     * const itemUsuario = await prisma.itemUsuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUsuarioUpdateArgs>(args: SelectSubset<T, ItemUsuarioUpdateArgs<ExtArgs>>): Prisma__ItemUsuarioClient<$Result.GetResult<Prisma.$ItemUsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemUsuarios.
     * @param {ItemUsuarioDeleteManyArgs} args - Arguments to filter ItemUsuarios to delete.
     * @example
     * // Delete a few ItemUsuarios
     * const { count } = await prisma.itemUsuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemUsuarioDeleteManyArgs>(args?: SelectSubset<T, ItemUsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemUsuarios
     * const itemUsuario = await prisma.itemUsuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUsuarioUpdateManyArgs>(args: SelectSubset<T, ItemUsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemUsuarios and returns the data updated in the database.
     * @param {ItemUsuarioUpdateManyAndReturnArgs} args - Arguments to update many ItemUsuarios.
     * @example
     * // Update many ItemUsuarios
     * const itemUsuario = await prisma.itemUsuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemUsuarios and only return the `id`
     * const itemUsuarioWithIdOnly = await prisma.itemUsuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemUsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemUsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemUsuario.
     * @param {ItemUsuarioUpsertArgs} args - Arguments to update or create a ItemUsuario.
     * @example
     * // Update or create a ItemUsuario
     * const itemUsuario = await prisma.itemUsuario.upsert({
     *   create: {
     *     // ... data to create a ItemUsuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemUsuario we want to update
     *   }
     * })
     */
    upsert<T extends ItemUsuarioUpsertArgs>(args: SelectSubset<T, ItemUsuarioUpsertArgs<ExtArgs>>): Prisma__ItemUsuarioClient<$Result.GetResult<Prisma.$ItemUsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUsuarioCountArgs} args - Arguments to filter ItemUsuarios to count.
     * @example
     * // Count the number of ItemUsuarios
     * const count = await prisma.itemUsuario.count({
     *   where: {
     *     // ... the filter for the ItemUsuarios we want to count
     *   }
     * })
    **/
    count<T extends ItemUsuarioCountArgs>(
      args?: Subset<T, ItemUsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemUsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemUsuarioAggregateArgs>(args: Subset<T, ItemUsuarioAggregateArgs>): Prisma.PrismaPromise<GetItemUsuarioAggregateType<T>>

    /**
     * Group by ItemUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUsuarioGroupByArgs} args - Group by arguments.
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
      T extends ItemUsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemUsuarioGroupByArgs['orderBy'] }
        : { orderBy?: ItemUsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemUsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemUsuario model
   */
  readonly fields: ItemUsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemUsuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemUsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itemLoja<T extends ItemLojaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemLojaDefaultArgs<ExtArgs>>): Prisma__ItemLojaClient<$Result.GetResult<Prisma.$ItemLojaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ItemUsuario model
   */
  interface ItemUsuarioFieldRefs {
    readonly id: FieldRef<"ItemUsuario", 'Int'>
    readonly usuario_id: FieldRef<"ItemUsuario", 'Int'>
    readonly item_loja_id: FieldRef<"ItemUsuario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ItemUsuario findUnique
   */
  export type ItemUsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemUsuario
     */
    select?: ItemUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemUsuario
     */
    omit?: ItemUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ItemUsuario to fetch.
     */
    where: ItemUsuarioWhereUniqueInput
  }

  /**
   * ItemUsuario findUniqueOrThrow
   */
  export type ItemUsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemUsuario
     */
    select?: ItemUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemUsuario
     */
    omit?: ItemUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ItemUsuario to fetch.
     */
    where: ItemUsuarioWhereUniqueInput
  }

  /**
   * ItemUsuario findFirst
   */
  export type ItemUsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemUsuario
     */
    select?: ItemUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemUsuario
     */
    omit?: ItemUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ItemUsuario to fetch.
     */
    where?: ItemUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemUsuarios to fetch.
     */
    orderBy?: ItemUsuarioOrderByWithRelationInput | ItemUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemUsuarios.
     */
    cursor?: ItemUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemUsuarios.
     */
    distinct?: ItemUsuarioScalarFieldEnum | ItemUsuarioScalarFieldEnum[]
  }

  /**
   * ItemUsuario findFirstOrThrow
   */
  export type ItemUsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemUsuario
     */
    select?: ItemUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemUsuario
     */
    omit?: ItemUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ItemUsuario to fetch.
     */
    where?: ItemUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemUsuarios to fetch.
     */
    orderBy?: ItemUsuarioOrderByWithRelationInput | ItemUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemUsuarios.
     */
    cursor?: ItemUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemUsuarios.
     */
    distinct?: ItemUsuarioScalarFieldEnum | ItemUsuarioScalarFieldEnum[]
  }

  /**
   * ItemUsuario findMany
   */
  export type ItemUsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemUsuario
     */
    select?: ItemUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemUsuario
     */
    omit?: ItemUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ItemUsuarios to fetch.
     */
    where?: ItemUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemUsuarios to fetch.
     */
    orderBy?: ItemUsuarioOrderByWithRelationInput | ItemUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemUsuarios.
     */
    cursor?: ItemUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemUsuarios.
     */
    skip?: number
    distinct?: ItemUsuarioScalarFieldEnum | ItemUsuarioScalarFieldEnum[]
  }

  /**
   * ItemUsuario create
   */
  export type ItemUsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemUsuario
     */
    select?: ItemUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemUsuario
     */
    omit?: ItemUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemUsuario.
     */
    data: XOR<ItemUsuarioCreateInput, ItemUsuarioUncheckedCreateInput>
  }

  /**
   * ItemUsuario createMany
   */
  export type ItemUsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemUsuarios.
     */
    data: ItemUsuarioCreateManyInput | ItemUsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemUsuario createManyAndReturn
   */
  export type ItemUsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemUsuario
     */
    select?: ItemUsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemUsuario
     */
    omit?: ItemUsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many ItemUsuarios.
     */
    data: ItemUsuarioCreateManyInput | ItemUsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemUsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemUsuario update
   */
  export type ItemUsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemUsuario
     */
    select?: ItemUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemUsuario
     */
    omit?: ItemUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemUsuario.
     */
    data: XOR<ItemUsuarioUpdateInput, ItemUsuarioUncheckedUpdateInput>
    /**
     * Choose, which ItemUsuario to update.
     */
    where: ItemUsuarioWhereUniqueInput
  }

  /**
   * ItemUsuario updateMany
   */
  export type ItemUsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemUsuarios.
     */
    data: XOR<ItemUsuarioUpdateManyMutationInput, ItemUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which ItemUsuarios to update
     */
    where?: ItemUsuarioWhereInput
    /**
     * Limit how many ItemUsuarios to update.
     */
    limit?: number
  }

  /**
   * ItemUsuario updateManyAndReturn
   */
  export type ItemUsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemUsuario
     */
    select?: ItemUsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemUsuario
     */
    omit?: ItemUsuarioOmit<ExtArgs> | null
    /**
     * The data used to update ItemUsuarios.
     */
    data: XOR<ItemUsuarioUpdateManyMutationInput, ItemUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which ItemUsuarios to update
     */
    where?: ItemUsuarioWhereInput
    /**
     * Limit how many ItemUsuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemUsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemUsuario upsert
   */
  export type ItemUsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemUsuario
     */
    select?: ItemUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemUsuario
     */
    omit?: ItemUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemUsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemUsuario to update in case it exists.
     */
    where: ItemUsuarioWhereUniqueInput
    /**
     * In case the ItemUsuario found by the `where` argument doesn't exist, create a new ItemUsuario with this data.
     */
    create: XOR<ItemUsuarioCreateInput, ItemUsuarioUncheckedCreateInput>
    /**
     * In case the ItemUsuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUsuarioUpdateInput, ItemUsuarioUncheckedUpdateInput>
  }

  /**
   * ItemUsuario delete
   */
  export type ItemUsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemUsuario
     */
    select?: ItemUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemUsuario
     */
    omit?: ItemUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemUsuarioInclude<ExtArgs> | null
    /**
     * Filter which ItemUsuario to delete.
     */
    where: ItemUsuarioWhereUniqueInput
  }

  /**
   * ItemUsuario deleteMany
   */
  export type ItemUsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemUsuarios to delete
     */
    where?: ItemUsuarioWhereInput
    /**
     * Limit how many ItemUsuarios to delete.
     */
    limit?: number
  }

  /**
   * ItemUsuario without action
   */
  export type ItemUsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemUsuario
     */
    select?: ItemUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemUsuario
     */
    omit?: ItemUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemUsuarioInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    email: 'email',
    senha: 'senha',
    nome: 'nome',
    moedas: 'moedas',
    data_criacao: 'data_criacao',
    partidas_ganhas: 'partidas_ganhas',
    partidas_totais: 'partidas_totais',
    avatar_ativo: 'avatar_ativo',
    fundo_ativo: 'fundo_ativo',
    deck_ativo: 'deck_ativo',
    status: 'status',
    cargo: 'cargo'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const PartidaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    data_inicio: 'data_inicio',
    data_fim: 'data_fim',
    status: 'status',
    vagas: 'vagas',
    senha: 'senha'
  };

  export type PartidaScalarFieldEnum = (typeof PartidaScalarFieldEnum)[keyof typeof PartidaScalarFieldEnum]


  export const JogadorPartidaScalarFieldEnum: {
    id: 'id',
    partida_id: 'partida_id',
    usuario_id: 'usuario_id',
    ordem_jogada: 'ordem_jogada',
    pontuacao: 'pontuacao'
  };

  export type JogadorPartidaScalarFieldEnum = (typeof JogadorPartidaScalarFieldEnum)[keyof typeof JogadorPartidaScalarFieldEnum]


  export const CartaScalarFieldEnum: {
    id: 'id',
    partida_id: 'partida_id',
    jogador_partida_id: 'jogador_partida_id',
    valor: 'valor',
    tipo: 'tipo',
    quantidade: 'quantidade'
  };

  export type CartaScalarFieldEnum = (typeof CartaScalarFieldEnum)[keyof typeof CartaScalarFieldEnum]


  export const ItemLojaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    tipo: 'tipo',
    disponibilidade: 'disponibilidade',
    preco: 'preco'
  };

  export type ItemLojaScalarFieldEnum = (typeof ItemLojaScalarFieldEnum)[keyof typeof ItemLojaScalarFieldEnum]


  export const ItemUsuarioScalarFieldEnum: {
    id: 'id',
    usuario_id: 'usuario_id',
    item_loja_id: 'item_loja_id'
  };

  export type ItemUsuarioScalarFieldEnum = (typeof ItemUsuarioScalarFieldEnum)[keyof typeof ItemUsuarioScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StatusUsuario'
   */
  export type EnumStatusUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusUsuario'>
    


  /**
   * Reference to a field of type 'StatusUsuario[]'
   */
  export type ListEnumStatusUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusUsuario[]'>
    


  /**
   * Reference to a field of type 'CargoUsuario'
   */
  export type EnumCargoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CargoUsuario'>
    


  /**
   * Reference to a field of type 'CargoUsuario[]'
   */
  export type ListEnumCargoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CargoUsuario[]'>
    


  /**
   * Reference to a field of type 'StatusPartida'
   */
  export type EnumStatusPartidaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPartida'>
    


  /**
   * Reference to a field of type 'StatusPartida[]'
   */
  export type ListEnumStatusPartidaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPartida[]'>
    


  /**
   * Reference to a field of type 'TipoItemLoja'
   */
  export type EnumTipoItemLojaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoItemLoja'>
    


  /**
   * Reference to a field of type 'TipoItemLoja[]'
   */
  export type ListEnumTipoItemLojaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoItemLoja[]'>
    


  /**
   * Reference to a field of type 'DisponibilidadeItem'
   */
  export type EnumDisponibilidadeItemFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DisponibilidadeItem'>
    


  /**
   * Reference to a field of type 'DisponibilidadeItem[]'
   */
  export type ListEnumDisponibilidadeItemFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DisponibilidadeItem[]'>
    


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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    moedas?: IntFilter<"Usuario"> | number
    data_criacao?: DateTimeFilter<"Usuario"> | Date | string
    partidas_ganhas?: IntFilter<"Usuario"> | number
    partidas_totais?: IntFilter<"Usuario"> | number
    avatar_ativo?: IntFilter<"Usuario"> | number
    fundo_ativo?: IntFilter<"Usuario"> | number
    deck_ativo?: IntFilter<"Usuario"> | number
    status?: EnumStatusUsuarioFilter<"Usuario"> | $Enums.StatusUsuario
    cargo?: EnumCargoUsuarioFilter<"Usuario"> | $Enums.CargoUsuario
    jogadorPartidas?: JogadorPartidaListRelationFilter
    itens?: ItemUsuarioListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    moedas?: SortOrder
    data_criacao?: SortOrder
    partidas_ganhas?: SortOrder
    partidas_totais?: SortOrder
    avatar_ativo?: SortOrder
    fundo_ativo?: SortOrder
    deck_ativo?: SortOrder
    status?: SortOrder
    cargo?: SortOrder
    jogadorPartidas?: JogadorPartidaOrderByRelationAggregateInput
    itens?: ItemUsuarioOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    senha?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    moedas?: IntFilter<"Usuario"> | number
    data_criacao?: DateTimeFilter<"Usuario"> | Date | string
    partidas_ganhas?: IntFilter<"Usuario"> | number
    partidas_totais?: IntFilter<"Usuario"> | number
    avatar_ativo?: IntFilter<"Usuario"> | number
    fundo_ativo?: IntFilter<"Usuario"> | number
    deck_ativo?: IntFilter<"Usuario"> | number
    status?: EnumStatusUsuarioFilter<"Usuario"> | $Enums.StatusUsuario
    cargo?: EnumCargoUsuarioFilter<"Usuario"> | $Enums.CargoUsuario
    jogadorPartidas?: JogadorPartidaListRelationFilter
    itens?: ItemUsuarioListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    moedas?: SortOrder
    data_criacao?: SortOrder
    partidas_ganhas?: SortOrder
    partidas_totais?: SortOrder
    avatar_ativo?: SortOrder
    fundo_ativo?: SortOrder
    deck_ativo?: SortOrder
    status?: SortOrder
    cargo?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    moedas?: IntWithAggregatesFilter<"Usuario"> | number
    data_criacao?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    partidas_ganhas?: IntWithAggregatesFilter<"Usuario"> | number
    partidas_totais?: IntWithAggregatesFilter<"Usuario"> | number
    avatar_ativo?: IntWithAggregatesFilter<"Usuario"> | number
    fundo_ativo?: IntWithAggregatesFilter<"Usuario"> | number
    deck_ativo?: IntWithAggregatesFilter<"Usuario"> | number
    status?: EnumStatusUsuarioWithAggregatesFilter<"Usuario"> | $Enums.StatusUsuario
    cargo?: EnumCargoUsuarioWithAggregatesFilter<"Usuario"> | $Enums.CargoUsuario
  }

  export type PartidaWhereInput = {
    AND?: PartidaWhereInput | PartidaWhereInput[]
    OR?: PartidaWhereInput[]
    NOT?: PartidaWhereInput | PartidaWhereInput[]
    id?: IntFilter<"Partida"> | number
    nome?: StringFilter<"Partida"> | string
    data_inicio?: DateTimeFilter<"Partida"> | Date | string
    data_fim?: DateTimeFilter<"Partida"> | Date | string
    status?: EnumStatusPartidaFilter<"Partida"> | $Enums.StatusPartida
    vagas?: IntFilter<"Partida"> | number
    senha?: StringNullableFilter<"Partida"> | string | null
    jogadores?: JogadorPartidaListRelationFilter
    cartas?: CartaListRelationFilter
  }

  export type PartidaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    status?: SortOrder
    vagas?: SortOrder
    senha?: SortOrderInput | SortOrder
    jogadores?: JogadorPartidaOrderByRelationAggregateInput
    cartas?: CartaOrderByRelationAggregateInput
  }

  export type PartidaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PartidaWhereInput | PartidaWhereInput[]
    OR?: PartidaWhereInput[]
    NOT?: PartidaWhereInput | PartidaWhereInput[]
    nome?: StringFilter<"Partida"> | string
    data_inicio?: DateTimeFilter<"Partida"> | Date | string
    data_fim?: DateTimeFilter<"Partida"> | Date | string
    status?: EnumStatusPartidaFilter<"Partida"> | $Enums.StatusPartida
    vagas?: IntFilter<"Partida"> | number
    senha?: StringNullableFilter<"Partida"> | string | null
    jogadores?: JogadorPartidaListRelationFilter
    cartas?: CartaListRelationFilter
  }, "id">

  export type PartidaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    status?: SortOrder
    vagas?: SortOrder
    senha?: SortOrderInput | SortOrder
    _count?: PartidaCountOrderByAggregateInput
    _avg?: PartidaAvgOrderByAggregateInput
    _max?: PartidaMaxOrderByAggregateInput
    _min?: PartidaMinOrderByAggregateInput
    _sum?: PartidaSumOrderByAggregateInput
  }

  export type PartidaScalarWhereWithAggregatesInput = {
    AND?: PartidaScalarWhereWithAggregatesInput | PartidaScalarWhereWithAggregatesInput[]
    OR?: PartidaScalarWhereWithAggregatesInput[]
    NOT?: PartidaScalarWhereWithAggregatesInput | PartidaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Partida"> | number
    nome?: StringWithAggregatesFilter<"Partida"> | string
    data_inicio?: DateTimeWithAggregatesFilter<"Partida"> | Date | string
    data_fim?: DateTimeWithAggregatesFilter<"Partida"> | Date | string
    status?: EnumStatusPartidaWithAggregatesFilter<"Partida"> | $Enums.StatusPartida
    vagas?: IntWithAggregatesFilter<"Partida"> | number
    senha?: StringNullableWithAggregatesFilter<"Partida"> | string | null
  }

  export type JogadorPartidaWhereInput = {
    AND?: JogadorPartidaWhereInput | JogadorPartidaWhereInput[]
    OR?: JogadorPartidaWhereInput[]
    NOT?: JogadorPartidaWhereInput | JogadorPartidaWhereInput[]
    id?: IntFilter<"JogadorPartida"> | number
    partida_id?: IntFilter<"JogadorPartida"> | number
    usuario_id?: IntFilter<"JogadorPartida"> | number
    ordem_jogada?: IntFilter<"JogadorPartida"> | number
    pontuacao?: IntFilter<"JogadorPartida"> | number
    partida?: XOR<PartidaScalarRelationFilter, PartidaWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    cartas?: CartaListRelationFilter
  }

  export type JogadorPartidaOrderByWithRelationInput = {
    id?: SortOrder
    partida_id?: SortOrder
    usuario_id?: SortOrder
    ordem_jogada?: SortOrder
    pontuacao?: SortOrder
    partida?: PartidaOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
    cartas?: CartaOrderByRelationAggregateInput
  }

  export type JogadorPartidaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JogadorPartidaWhereInput | JogadorPartidaWhereInput[]
    OR?: JogadorPartidaWhereInput[]
    NOT?: JogadorPartidaWhereInput | JogadorPartidaWhereInput[]
    partida_id?: IntFilter<"JogadorPartida"> | number
    usuario_id?: IntFilter<"JogadorPartida"> | number
    ordem_jogada?: IntFilter<"JogadorPartida"> | number
    pontuacao?: IntFilter<"JogadorPartida"> | number
    partida?: XOR<PartidaScalarRelationFilter, PartidaWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    cartas?: CartaListRelationFilter
  }, "id">

  export type JogadorPartidaOrderByWithAggregationInput = {
    id?: SortOrder
    partida_id?: SortOrder
    usuario_id?: SortOrder
    ordem_jogada?: SortOrder
    pontuacao?: SortOrder
    _count?: JogadorPartidaCountOrderByAggregateInput
    _avg?: JogadorPartidaAvgOrderByAggregateInput
    _max?: JogadorPartidaMaxOrderByAggregateInput
    _min?: JogadorPartidaMinOrderByAggregateInput
    _sum?: JogadorPartidaSumOrderByAggregateInput
  }

  export type JogadorPartidaScalarWhereWithAggregatesInput = {
    AND?: JogadorPartidaScalarWhereWithAggregatesInput | JogadorPartidaScalarWhereWithAggregatesInput[]
    OR?: JogadorPartidaScalarWhereWithAggregatesInput[]
    NOT?: JogadorPartidaScalarWhereWithAggregatesInput | JogadorPartidaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JogadorPartida"> | number
    partida_id?: IntWithAggregatesFilter<"JogadorPartida"> | number
    usuario_id?: IntWithAggregatesFilter<"JogadorPartida"> | number
    ordem_jogada?: IntWithAggregatesFilter<"JogadorPartida"> | number
    pontuacao?: IntWithAggregatesFilter<"JogadorPartida"> | number
  }

  export type CartaWhereInput = {
    AND?: CartaWhereInput | CartaWhereInput[]
    OR?: CartaWhereInput[]
    NOT?: CartaWhereInput | CartaWhereInput[]
    id?: IntFilter<"Carta"> | number
    partida_id?: IntFilter<"Carta"> | number
    jogador_partida_id?: IntNullableFilter<"Carta"> | number | null
    valor?: IntFilter<"Carta"> | number
    tipo?: StringFilter<"Carta"> | string
    quantidade?: IntFilter<"Carta"> | number
    partida?: XOR<PartidaScalarRelationFilter, PartidaWhereInput>
    jogadorPartida?: XOR<JogadorPartidaNullableScalarRelationFilter, JogadorPartidaWhereInput> | null
  }

  export type CartaOrderByWithRelationInput = {
    id?: SortOrder
    partida_id?: SortOrder
    jogador_partida_id?: SortOrderInput | SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    partida?: PartidaOrderByWithRelationInput
    jogadorPartida?: JogadorPartidaOrderByWithRelationInput
  }

  export type CartaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CartaWhereInput | CartaWhereInput[]
    OR?: CartaWhereInput[]
    NOT?: CartaWhereInput | CartaWhereInput[]
    partida_id?: IntFilter<"Carta"> | number
    jogador_partida_id?: IntNullableFilter<"Carta"> | number | null
    valor?: IntFilter<"Carta"> | number
    tipo?: StringFilter<"Carta"> | string
    quantidade?: IntFilter<"Carta"> | number
    partida?: XOR<PartidaScalarRelationFilter, PartidaWhereInput>
    jogadorPartida?: XOR<JogadorPartidaNullableScalarRelationFilter, JogadorPartidaWhereInput> | null
  }, "id">

  export type CartaOrderByWithAggregationInput = {
    id?: SortOrder
    partida_id?: SortOrder
    jogador_partida_id?: SortOrderInput | SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    _count?: CartaCountOrderByAggregateInput
    _avg?: CartaAvgOrderByAggregateInput
    _max?: CartaMaxOrderByAggregateInput
    _min?: CartaMinOrderByAggregateInput
    _sum?: CartaSumOrderByAggregateInput
  }

  export type CartaScalarWhereWithAggregatesInput = {
    AND?: CartaScalarWhereWithAggregatesInput | CartaScalarWhereWithAggregatesInput[]
    OR?: CartaScalarWhereWithAggregatesInput[]
    NOT?: CartaScalarWhereWithAggregatesInput | CartaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Carta"> | number
    partida_id?: IntWithAggregatesFilter<"Carta"> | number
    jogador_partida_id?: IntNullableWithAggregatesFilter<"Carta"> | number | null
    valor?: IntWithAggregatesFilter<"Carta"> | number
    tipo?: StringWithAggregatesFilter<"Carta"> | string
    quantidade?: IntWithAggregatesFilter<"Carta"> | number
  }

  export type ItemLojaWhereInput = {
    AND?: ItemLojaWhereInput | ItemLojaWhereInput[]
    OR?: ItemLojaWhereInput[]
    NOT?: ItemLojaWhereInput | ItemLojaWhereInput[]
    id?: IntFilter<"ItemLoja"> | number
    nome?: StringFilter<"ItemLoja"> | string
    tipo?: EnumTipoItemLojaFilter<"ItemLoja"> | $Enums.TipoItemLoja
    disponibilidade?: EnumDisponibilidadeItemFilter<"ItemLoja"> | $Enums.DisponibilidadeItem
    preco?: IntFilter<"ItemLoja"> | number
    usuarios?: ItemUsuarioListRelationFilter
  }

  export type ItemLojaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    disponibilidade?: SortOrder
    preco?: SortOrder
    usuarios?: ItemUsuarioOrderByRelationAggregateInput
  }

  export type ItemLojaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemLojaWhereInput | ItemLojaWhereInput[]
    OR?: ItemLojaWhereInput[]
    NOT?: ItemLojaWhereInput | ItemLojaWhereInput[]
    nome?: StringFilter<"ItemLoja"> | string
    tipo?: EnumTipoItemLojaFilter<"ItemLoja"> | $Enums.TipoItemLoja
    disponibilidade?: EnumDisponibilidadeItemFilter<"ItemLoja"> | $Enums.DisponibilidadeItem
    preco?: IntFilter<"ItemLoja"> | number
    usuarios?: ItemUsuarioListRelationFilter
  }, "id">

  export type ItemLojaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    disponibilidade?: SortOrder
    preco?: SortOrder
    _count?: ItemLojaCountOrderByAggregateInput
    _avg?: ItemLojaAvgOrderByAggregateInput
    _max?: ItemLojaMaxOrderByAggregateInput
    _min?: ItemLojaMinOrderByAggregateInput
    _sum?: ItemLojaSumOrderByAggregateInput
  }

  export type ItemLojaScalarWhereWithAggregatesInput = {
    AND?: ItemLojaScalarWhereWithAggregatesInput | ItemLojaScalarWhereWithAggregatesInput[]
    OR?: ItemLojaScalarWhereWithAggregatesInput[]
    NOT?: ItemLojaScalarWhereWithAggregatesInput | ItemLojaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemLoja"> | number
    nome?: StringWithAggregatesFilter<"ItemLoja"> | string
    tipo?: EnumTipoItemLojaWithAggregatesFilter<"ItemLoja"> | $Enums.TipoItemLoja
    disponibilidade?: EnumDisponibilidadeItemWithAggregatesFilter<"ItemLoja"> | $Enums.DisponibilidadeItem
    preco?: IntWithAggregatesFilter<"ItemLoja"> | number
  }

  export type ItemUsuarioWhereInput = {
    AND?: ItemUsuarioWhereInput | ItemUsuarioWhereInput[]
    OR?: ItemUsuarioWhereInput[]
    NOT?: ItemUsuarioWhereInput | ItemUsuarioWhereInput[]
    id?: IntFilter<"ItemUsuario"> | number
    usuario_id?: IntFilter<"ItemUsuario"> | number
    item_loja_id?: IntFilter<"ItemUsuario"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    itemLoja?: XOR<ItemLojaScalarRelationFilter, ItemLojaWhereInput>
  }

  export type ItemUsuarioOrderByWithRelationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    item_loja_id?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    itemLoja?: ItemLojaOrderByWithRelationInput
  }

  export type ItemUsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemUsuarioWhereInput | ItemUsuarioWhereInput[]
    OR?: ItemUsuarioWhereInput[]
    NOT?: ItemUsuarioWhereInput | ItemUsuarioWhereInput[]
    usuario_id?: IntFilter<"ItemUsuario"> | number
    item_loja_id?: IntFilter<"ItemUsuario"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    itemLoja?: XOR<ItemLojaScalarRelationFilter, ItemLojaWhereInput>
  }, "id">

  export type ItemUsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    item_loja_id?: SortOrder
    _count?: ItemUsuarioCountOrderByAggregateInput
    _avg?: ItemUsuarioAvgOrderByAggregateInput
    _max?: ItemUsuarioMaxOrderByAggregateInput
    _min?: ItemUsuarioMinOrderByAggregateInput
    _sum?: ItemUsuarioSumOrderByAggregateInput
  }

  export type ItemUsuarioScalarWhereWithAggregatesInput = {
    AND?: ItemUsuarioScalarWhereWithAggregatesInput | ItemUsuarioScalarWhereWithAggregatesInput[]
    OR?: ItemUsuarioScalarWhereWithAggregatesInput[]
    NOT?: ItemUsuarioScalarWhereWithAggregatesInput | ItemUsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemUsuario"> | number
    usuario_id?: IntWithAggregatesFilter<"ItemUsuario"> | number
    item_loja_id?: IntWithAggregatesFilter<"ItemUsuario"> | number
  }

  export type UsuarioCreateInput = {
    email: string
    senha: string
    nome: string
    moedas?: number
    data_criacao?: Date | string
    partidas_ganhas?: number
    partidas_totais?: number
    avatar_ativo: number
    fundo_ativo: number
    deck_ativo: number
    status: $Enums.StatusUsuario
    cargo: $Enums.CargoUsuario
    jogadorPartidas?: JogadorPartidaCreateNestedManyWithoutUsuarioInput
    itens?: ItemUsuarioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    email: string
    senha: string
    nome: string
    moedas?: number
    data_criacao?: Date | string
    partidas_ganhas?: number
    partidas_totais?: number
    avatar_ativo: number
    fundo_ativo: number
    deck_ativo: number
    status: $Enums.StatusUsuario
    cargo: $Enums.CargoUsuario
    jogadorPartidas?: JogadorPartidaUncheckedCreateNestedManyWithoutUsuarioInput
    itens?: ItemUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    moedas?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    partidas_ganhas?: IntFieldUpdateOperationsInput | number
    partidas_totais?: IntFieldUpdateOperationsInput | number
    avatar_ativo?: IntFieldUpdateOperationsInput | number
    fundo_ativo?: IntFieldUpdateOperationsInput | number
    deck_ativo?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusUsuarioFieldUpdateOperationsInput | $Enums.StatusUsuario
    cargo?: EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario
    jogadorPartidas?: JogadorPartidaUpdateManyWithoutUsuarioNestedInput
    itens?: ItemUsuarioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    moedas?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    partidas_ganhas?: IntFieldUpdateOperationsInput | number
    partidas_totais?: IntFieldUpdateOperationsInput | number
    avatar_ativo?: IntFieldUpdateOperationsInput | number
    fundo_ativo?: IntFieldUpdateOperationsInput | number
    deck_ativo?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusUsuarioFieldUpdateOperationsInput | $Enums.StatusUsuario
    cargo?: EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario
    jogadorPartidas?: JogadorPartidaUncheckedUpdateManyWithoutUsuarioNestedInput
    itens?: ItemUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    email: string
    senha: string
    nome: string
    moedas?: number
    data_criacao?: Date | string
    partidas_ganhas?: number
    partidas_totais?: number
    avatar_ativo: number
    fundo_ativo: number
    deck_ativo: number
    status: $Enums.StatusUsuario
    cargo: $Enums.CargoUsuario
  }

  export type UsuarioUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    moedas?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    partidas_ganhas?: IntFieldUpdateOperationsInput | number
    partidas_totais?: IntFieldUpdateOperationsInput | number
    avatar_ativo?: IntFieldUpdateOperationsInput | number
    fundo_ativo?: IntFieldUpdateOperationsInput | number
    deck_ativo?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusUsuarioFieldUpdateOperationsInput | $Enums.StatusUsuario
    cargo?: EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    moedas?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    partidas_ganhas?: IntFieldUpdateOperationsInput | number
    partidas_totais?: IntFieldUpdateOperationsInput | number
    avatar_ativo?: IntFieldUpdateOperationsInput | number
    fundo_ativo?: IntFieldUpdateOperationsInput | number
    deck_ativo?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusUsuarioFieldUpdateOperationsInput | $Enums.StatusUsuario
    cargo?: EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario
  }

  export type PartidaCreateInput = {
    nome: string
    data_inicio?: Date | string
    data_fim: Date | string
    status: $Enums.StatusPartida
    vagas?: number
    senha?: string | null
    jogadores?: JogadorPartidaCreateNestedManyWithoutPartidaInput
    cartas?: CartaCreateNestedManyWithoutPartidaInput
  }

  export type PartidaUncheckedCreateInput = {
    id?: number
    nome: string
    data_inicio?: Date | string
    data_fim: Date | string
    status: $Enums.StatusPartida
    vagas?: number
    senha?: string | null
    jogadores?: JogadorPartidaUncheckedCreateNestedManyWithoutPartidaInput
    cartas?: CartaUncheckedCreateNestedManyWithoutPartidaInput
  }

  export type PartidaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPartidaFieldUpdateOperationsInput | $Enums.StatusPartida
    vagas?: IntFieldUpdateOperationsInput | number
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    jogadores?: JogadorPartidaUpdateManyWithoutPartidaNestedInput
    cartas?: CartaUpdateManyWithoutPartidaNestedInput
  }

  export type PartidaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPartidaFieldUpdateOperationsInput | $Enums.StatusPartida
    vagas?: IntFieldUpdateOperationsInput | number
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    jogadores?: JogadorPartidaUncheckedUpdateManyWithoutPartidaNestedInput
    cartas?: CartaUncheckedUpdateManyWithoutPartidaNestedInput
  }

  export type PartidaCreateManyInput = {
    id?: number
    nome: string
    data_inicio?: Date | string
    data_fim: Date | string
    status: $Enums.StatusPartida
    vagas?: number
    senha?: string | null
  }

  export type PartidaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPartidaFieldUpdateOperationsInput | $Enums.StatusPartida
    vagas?: IntFieldUpdateOperationsInput | number
    senha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PartidaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPartidaFieldUpdateOperationsInput | $Enums.StatusPartida
    vagas?: IntFieldUpdateOperationsInput | number
    senha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JogadorPartidaCreateInput = {
    ordem_jogada: number
    pontuacao?: number
    partida: PartidaCreateNestedOneWithoutJogadoresInput
    usuario: UsuarioCreateNestedOneWithoutJogadorPartidasInput
    cartas?: CartaCreateNestedManyWithoutJogadorPartidaInput
  }

  export type JogadorPartidaUncheckedCreateInput = {
    id?: number
    partida_id: number
    usuario_id: number
    ordem_jogada: number
    pontuacao?: number
    cartas?: CartaUncheckedCreateNestedManyWithoutJogadorPartidaInput
  }

  export type JogadorPartidaUpdateInput = {
    ordem_jogada?: IntFieldUpdateOperationsInput | number
    pontuacao?: IntFieldUpdateOperationsInput | number
    partida?: PartidaUpdateOneRequiredWithoutJogadoresNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutJogadorPartidasNestedInput
    cartas?: CartaUpdateManyWithoutJogadorPartidaNestedInput
  }

  export type JogadorPartidaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    partida_id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    ordem_jogada?: IntFieldUpdateOperationsInput | number
    pontuacao?: IntFieldUpdateOperationsInput | number
    cartas?: CartaUncheckedUpdateManyWithoutJogadorPartidaNestedInput
  }

  export type JogadorPartidaCreateManyInput = {
    id?: number
    partida_id: number
    usuario_id: number
    ordem_jogada: number
    pontuacao?: number
  }

  export type JogadorPartidaUpdateManyMutationInput = {
    ordem_jogada?: IntFieldUpdateOperationsInput | number
    pontuacao?: IntFieldUpdateOperationsInput | number
  }

  export type JogadorPartidaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    partida_id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    ordem_jogada?: IntFieldUpdateOperationsInput | number
    pontuacao?: IntFieldUpdateOperationsInput | number
  }

  export type CartaCreateInput = {
    valor: number
    tipo: string
    quantidade: number
    partida: PartidaCreateNestedOneWithoutCartasInput
    jogadorPartida?: JogadorPartidaCreateNestedOneWithoutCartasInput
  }

  export type CartaUncheckedCreateInput = {
    id?: number
    partida_id: number
    jogador_partida_id?: number | null
    valor: number
    tipo: string
    quantidade: number
  }

  export type CartaUpdateInput = {
    valor?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    partida?: PartidaUpdateOneRequiredWithoutCartasNestedInput
    jogadorPartida?: JogadorPartidaUpdateOneWithoutCartasNestedInput
  }

  export type CartaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    partida_id?: IntFieldUpdateOperationsInput | number
    jogador_partida_id?: NullableIntFieldUpdateOperationsInput | number | null
    valor?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type CartaCreateManyInput = {
    id?: number
    partida_id: number
    jogador_partida_id?: number | null
    valor: number
    tipo: string
    quantidade: number
  }

  export type CartaUpdateManyMutationInput = {
    valor?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type CartaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    partida_id?: IntFieldUpdateOperationsInput | number
    jogador_partida_id?: NullableIntFieldUpdateOperationsInput | number | null
    valor?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type ItemLojaCreateInput = {
    nome: string
    tipo: $Enums.TipoItemLoja
    disponibilidade: $Enums.DisponibilidadeItem
    preco: number
    usuarios?: ItemUsuarioCreateNestedManyWithoutItemLojaInput
  }

  export type ItemLojaUncheckedCreateInput = {
    id?: number
    nome: string
    tipo: $Enums.TipoItemLoja
    disponibilidade: $Enums.DisponibilidadeItem
    preco: number
    usuarios?: ItemUsuarioUncheckedCreateNestedManyWithoutItemLojaInput
  }

  export type ItemLojaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoItemLojaFieldUpdateOperationsInput | $Enums.TipoItemLoja
    disponibilidade?: EnumDisponibilidadeItemFieldUpdateOperationsInput | $Enums.DisponibilidadeItem
    preco?: IntFieldUpdateOperationsInput | number
    usuarios?: ItemUsuarioUpdateManyWithoutItemLojaNestedInput
  }

  export type ItemLojaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoItemLojaFieldUpdateOperationsInput | $Enums.TipoItemLoja
    disponibilidade?: EnumDisponibilidadeItemFieldUpdateOperationsInput | $Enums.DisponibilidadeItem
    preco?: IntFieldUpdateOperationsInput | number
    usuarios?: ItemUsuarioUncheckedUpdateManyWithoutItemLojaNestedInput
  }

  export type ItemLojaCreateManyInput = {
    id?: number
    nome: string
    tipo: $Enums.TipoItemLoja
    disponibilidade: $Enums.DisponibilidadeItem
    preco: number
  }

  export type ItemLojaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoItemLojaFieldUpdateOperationsInput | $Enums.TipoItemLoja
    disponibilidade?: EnumDisponibilidadeItemFieldUpdateOperationsInput | $Enums.DisponibilidadeItem
    preco?: IntFieldUpdateOperationsInput | number
  }

  export type ItemLojaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoItemLojaFieldUpdateOperationsInput | $Enums.TipoItemLoja
    disponibilidade?: EnumDisponibilidadeItemFieldUpdateOperationsInput | $Enums.DisponibilidadeItem
    preco?: IntFieldUpdateOperationsInput | number
  }

  export type ItemUsuarioCreateInput = {
    usuario: UsuarioCreateNestedOneWithoutItensInput
    itemLoja: ItemLojaCreateNestedOneWithoutUsuariosInput
  }

  export type ItemUsuarioUncheckedCreateInput = {
    id?: number
    usuario_id: number
    item_loja_id: number
  }

  export type ItemUsuarioUpdateInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutItensNestedInput
    itemLoja?: ItemLojaUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type ItemUsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    item_loja_id?: IntFieldUpdateOperationsInput | number
  }

  export type ItemUsuarioCreateManyInput = {
    id?: number
    usuario_id: number
    item_loja_id: number
  }

  export type ItemUsuarioUpdateManyMutationInput = {

  }

  export type ItemUsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    item_loja_id?: IntFieldUpdateOperationsInput | number
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

  export type EnumStatusUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusUsuario | EnumStatusUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.StatusUsuario[] | ListEnumStatusUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusUsuario[] | ListEnumStatusUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusUsuarioFilter<$PrismaModel> | $Enums.StatusUsuario
  }

  export type EnumCargoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.CargoUsuario | EnumCargoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.CargoUsuario[] | ListEnumCargoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.CargoUsuario[] | ListEnumCargoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumCargoUsuarioFilter<$PrismaModel> | $Enums.CargoUsuario
  }

  export type JogadorPartidaListRelationFilter = {
    every?: JogadorPartidaWhereInput
    some?: JogadorPartidaWhereInput
    none?: JogadorPartidaWhereInput
  }

  export type ItemUsuarioListRelationFilter = {
    every?: ItemUsuarioWhereInput
    some?: ItemUsuarioWhereInput
    none?: ItemUsuarioWhereInput
  }

  export type JogadorPartidaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemUsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    moedas?: SortOrder
    data_criacao?: SortOrder
    partidas_ganhas?: SortOrder
    partidas_totais?: SortOrder
    avatar_ativo?: SortOrder
    fundo_ativo?: SortOrder
    deck_ativo?: SortOrder
    status?: SortOrder
    cargo?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    moedas?: SortOrder
    partidas_ganhas?: SortOrder
    partidas_totais?: SortOrder
    avatar_ativo?: SortOrder
    fundo_ativo?: SortOrder
    deck_ativo?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    moedas?: SortOrder
    data_criacao?: SortOrder
    partidas_ganhas?: SortOrder
    partidas_totais?: SortOrder
    avatar_ativo?: SortOrder
    fundo_ativo?: SortOrder
    deck_ativo?: SortOrder
    status?: SortOrder
    cargo?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    moedas?: SortOrder
    data_criacao?: SortOrder
    partidas_ganhas?: SortOrder
    partidas_totais?: SortOrder
    avatar_ativo?: SortOrder
    fundo_ativo?: SortOrder
    deck_ativo?: SortOrder
    status?: SortOrder
    cargo?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    moedas?: SortOrder
    partidas_ganhas?: SortOrder
    partidas_totais?: SortOrder
    avatar_ativo?: SortOrder
    fundo_ativo?: SortOrder
    deck_ativo?: SortOrder
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

  export type EnumStatusUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusUsuario | EnumStatusUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.StatusUsuario[] | ListEnumStatusUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusUsuario[] | ListEnumStatusUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.StatusUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusUsuarioFilter<$PrismaModel>
    _max?: NestedEnumStatusUsuarioFilter<$PrismaModel>
  }

  export type EnumCargoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CargoUsuario | EnumCargoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.CargoUsuario[] | ListEnumCargoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.CargoUsuario[] | ListEnumCargoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumCargoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.CargoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCargoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumCargoUsuarioFilter<$PrismaModel>
  }

  export type EnumStatusPartidaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPartida | EnumStatusPartidaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPartida[] | ListEnumStatusPartidaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPartida[] | ListEnumStatusPartidaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPartidaFilter<$PrismaModel> | $Enums.StatusPartida
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

  export type CartaListRelationFilter = {
    every?: CartaWhereInput
    some?: CartaWhereInput
    none?: CartaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CartaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PartidaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    status?: SortOrder
    vagas?: SortOrder
    senha?: SortOrder
  }

  export type PartidaAvgOrderByAggregateInput = {
    id?: SortOrder
    vagas?: SortOrder
  }

  export type PartidaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    status?: SortOrder
    vagas?: SortOrder
    senha?: SortOrder
  }

  export type PartidaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    status?: SortOrder
    vagas?: SortOrder
    senha?: SortOrder
  }

  export type PartidaSumOrderByAggregateInput = {
    id?: SortOrder
    vagas?: SortOrder
  }

  export type EnumStatusPartidaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPartida | EnumStatusPartidaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPartida[] | ListEnumStatusPartidaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPartida[] | ListEnumStatusPartidaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPartidaWithAggregatesFilter<$PrismaModel> | $Enums.StatusPartida
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPartidaFilter<$PrismaModel>
    _max?: NestedEnumStatusPartidaFilter<$PrismaModel>
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

  export type PartidaScalarRelationFilter = {
    is?: PartidaWhereInput
    isNot?: PartidaWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type JogadorPartidaCountOrderByAggregateInput = {
    id?: SortOrder
    partida_id?: SortOrder
    usuario_id?: SortOrder
    ordem_jogada?: SortOrder
    pontuacao?: SortOrder
  }

  export type JogadorPartidaAvgOrderByAggregateInput = {
    id?: SortOrder
    partida_id?: SortOrder
    usuario_id?: SortOrder
    ordem_jogada?: SortOrder
    pontuacao?: SortOrder
  }

  export type JogadorPartidaMaxOrderByAggregateInput = {
    id?: SortOrder
    partida_id?: SortOrder
    usuario_id?: SortOrder
    ordem_jogada?: SortOrder
    pontuacao?: SortOrder
  }

  export type JogadorPartidaMinOrderByAggregateInput = {
    id?: SortOrder
    partida_id?: SortOrder
    usuario_id?: SortOrder
    ordem_jogada?: SortOrder
    pontuacao?: SortOrder
  }

  export type JogadorPartidaSumOrderByAggregateInput = {
    id?: SortOrder
    partida_id?: SortOrder
    usuario_id?: SortOrder
    ordem_jogada?: SortOrder
    pontuacao?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type JogadorPartidaNullableScalarRelationFilter = {
    is?: JogadorPartidaWhereInput | null
    isNot?: JogadorPartidaWhereInput | null
  }

  export type CartaCountOrderByAggregateInput = {
    id?: SortOrder
    partida_id?: SortOrder
    jogador_partida_id?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
  }

  export type CartaAvgOrderByAggregateInput = {
    id?: SortOrder
    partida_id?: SortOrder
    jogador_partida_id?: SortOrder
    valor?: SortOrder
    quantidade?: SortOrder
  }

  export type CartaMaxOrderByAggregateInput = {
    id?: SortOrder
    partida_id?: SortOrder
    jogador_partida_id?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
  }

  export type CartaMinOrderByAggregateInput = {
    id?: SortOrder
    partida_id?: SortOrder
    jogador_partida_id?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
  }

  export type CartaSumOrderByAggregateInput = {
    id?: SortOrder
    partida_id?: SortOrder
    jogador_partida_id?: SortOrder
    valor?: SortOrder
    quantidade?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumTipoItemLojaFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoItemLoja | EnumTipoItemLojaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoItemLoja[] | ListEnumTipoItemLojaFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoItemLoja[] | ListEnumTipoItemLojaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoItemLojaFilter<$PrismaModel> | $Enums.TipoItemLoja
  }

  export type EnumDisponibilidadeItemFilter<$PrismaModel = never> = {
    equals?: $Enums.DisponibilidadeItem | EnumDisponibilidadeItemFieldRefInput<$PrismaModel>
    in?: $Enums.DisponibilidadeItem[] | ListEnumDisponibilidadeItemFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisponibilidadeItem[] | ListEnumDisponibilidadeItemFieldRefInput<$PrismaModel>
    not?: NestedEnumDisponibilidadeItemFilter<$PrismaModel> | $Enums.DisponibilidadeItem
  }

  export type ItemLojaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    disponibilidade?: SortOrder
    preco?: SortOrder
  }

  export type ItemLojaAvgOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
  }

  export type ItemLojaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    disponibilidade?: SortOrder
    preco?: SortOrder
  }

  export type ItemLojaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    disponibilidade?: SortOrder
    preco?: SortOrder
  }

  export type ItemLojaSumOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
  }

  export type EnumTipoItemLojaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoItemLoja | EnumTipoItemLojaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoItemLoja[] | ListEnumTipoItemLojaFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoItemLoja[] | ListEnumTipoItemLojaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoItemLojaWithAggregatesFilter<$PrismaModel> | $Enums.TipoItemLoja
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoItemLojaFilter<$PrismaModel>
    _max?: NestedEnumTipoItemLojaFilter<$PrismaModel>
  }

  export type EnumDisponibilidadeItemWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DisponibilidadeItem | EnumDisponibilidadeItemFieldRefInput<$PrismaModel>
    in?: $Enums.DisponibilidadeItem[] | ListEnumDisponibilidadeItemFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisponibilidadeItem[] | ListEnumDisponibilidadeItemFieldRefInput<$PrismaModel>
    not?: NestedEnumDisponibilidadeItemWithAggregatesFilter<$PrismaModel> | $Enums.DisponibilidadeItem
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDisponibilidadeItemFilter<$PrismaModel>
    _max?: NestedEnumDisponibilidadeItemFilter<$PrismaModel>
  }

  export type ItemLojaScalarRelationFilter = {
    is?: ItemLojaWhereInput
    isNot?: ItemLojaWhereInput
  }

  export type ItemUsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    item_loja_id?: SortOrder
  }

  export type ItemUsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    item_loja_id?: SortOrder
  }

  export type ItemUsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    item_loja_id?: SortOrder
  }

  export type ItemUsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    item_loja_id?: SortOrder
  }

  export type ItemUsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    item_loja_id?: SortOrder
  }

  export type JogadorPartidaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<JogadorPartidaCreateWithoutUsuarioInput, JogadorPartidaUncheckedCreateWithoutUsuarioInput> | JogadorPartidaCreateWithoutUsuarioInput[] | JogadorPartidaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: JogadorPartidaCreateOrConnectWithoutUsuarioInput | JogadorPartidaCreateOrConnectWithoutUsuarioInput[]
    createMany?: JogadorPartidaCreateManyUsuarioInputEnvelope
    connect?: JogadorPartidaWhereUniqueInput | JogadorPartidaWhereUniqueInput[]
  }

  export type ItemUsuarioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ItemUsuarioCreateWithoutUsuarioInput, ItemUsuarioUncheckedCreateWithoutUsuarioInput> | ItemUsuarioCreateWithoutUsuarioInput[] | ItemUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ItemUsuarioCreateOrConnectWithoutUsuarioInput | ItemUsuarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: ItemUsuarioCreateManyUsuarioInputEnvelope
    connect?: ItemUsuarioWhereUniqueInput | ItemUsuarioWhereUniqueInput[]
  }

  export type JogadorPartidaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<JogadorPartidaCreateWithoutUsuarioInput, JogadorPartidaUncheckedCreateWithoutUsuarioInput> | JogadorPartidaCreateWithoutUsuarioInput[] | JogadorPartidaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: JogadorPartidaCreateOrConnectWithoutUsuarioInput | JogadorPartidaCreateOrConnectWithoutUsuarioInput[]
    createMany?: JogadorPartidaCreateManyUsuarioInputEnvelope
    connect?: JogadorPartidaWhereUniqueInput | JogadorPartidaWhereUniqueInput[]
  }

  export type ItemUsuarioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ItemUsuarioCreateWithoutUsuarioInput, ItemUsuarioUncheckedCreateWithoutUsuarioInput> | ItemUsuarioCreateWithoutUsuarioInput[] | ItemUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ItemUsuarioCreateOrConnectWithoutUsuarioInput | ItemUsuarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: ItemUsuarioCreateManyUsuarioInputEnvelope
    connect?: ItemUsuarioWhereUniqueInput | ItemUsuarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumStatusUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.StatusUsuario
  }

  export type EnumCargoUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.CargoUsuario
  }

  export type JogadorPartidaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<JogadorPartidaCreateWithoutUsuarioInput, JogadorPartidaUncheckedCreateWithoutUsuarioInput> | JogadorPartidaCreateWithoutUsuarioInput[] | JogadorPartidaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: JogadorPartidaCreateOrConnectWithoutUsuarioInput | JogadorPartidaCreateOrConnectWithoutUsuarioInput[]
    upsert?: JogadorPartidaUpsertWithWhereUniqueWithoutUsuarioInput | JogadorPartidaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: JogadorPartidaCreateManyUsuarioInputEnvelope
    set?: JogadorPartidaWhereUniqueInput | JogadorPartidaWhereUniqueInput[]
    disconnect?: JogadorPartidaWhereUniqueInput | JogadorPartidaWhereUniqueInput[]
    delete?: JogadorPartidaWhereUniqueInput | JogadorPartidaWhereUniqueInput[]
    connect?: JogadorPartidaWhereUniqueInput | JogadorPartidaWhereUniqueInput[]
    update?: JogadorPartidaUpdateWithWhereUniqueWithoutUsuarioInput | JogadorPartidaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: JogadorPartidaUpdateManyWithWhereWithoutUsuarioInput | JogadorPartidaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: JogadorPartidaScalarWhereInput | JogadorPartidaScalarWhereInput[]
  }

  export type ItemUsuarioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ItemUsuarioCreateWithoutUsuarioInput, ItemUsuarioUncheckedCreateWithoutUsuarioInput> | ItemUsuarioCreateWithoutUsuarioInput[] | ItemUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ItemUsuarioCreateOrConnectWithoutUsuarioInput | ItemUsuarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: ItemUsuarioUpsertWithWhereUniqueWithoutUsuarioInput | ItemUsuarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ItemUsuarioCreateManyUsuarioInputEnvelope
    set?: ItemUsuarioWhereUniqueInput | ItemUsuarioWhereUniqueInput[]
    disconnect?: ItemUsuarioWhereUniqueInput | ItemUsuarioWhereUniqueInput[]
    delete?: ItemUsuarioWhereUniqueInput | ItemUsuarioWhereUniqueInput[]
    connect?: ItemUsuarioWhereUniqueInput | ItemUsuarioWhereUniqueInput[]
    update?: ItemUsuarioUpdateWithWhereUniqueWithoutUsuarioInput | ItemUsuarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ItemUsuarioUpdateManyWithWhereWithoutUsuarioInput | ItemUsuarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ItemUsuarioScalarWhereInput | ItemUsuarioScalarWhereInput[]
  }

  export type JogadorPartidaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<JogadorPartidaCreateWithoutUsuarioInput, JogadorPartidaUncheckedCreateWithoutUsuarioInput> | JogadorPartidaCreateWithoutUsuarioInput[] | JogadorPartidaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: JogadorPartidaCreateOrConnectWithoutUsuarioInput | JogadorPartidaCreateOrConnectWithoutUsuarioInput[]
    upsert?: JogadorPartidaUpsertWithWhereUniqueWithoutUsuarioInput | JogadorPartidaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: JogadorPartidaCreateManyUsuarioInputEnvelope
    set?: JogadorPartidaWhereUniqueInput | JogadorPartidaWhereUniqueInput[]
    disconnect?: JogadorPartidaWhereUniqueInput | JogadorPartidaWhereUniqueInput[]
    delete?: JogadorPartidaWhereUniqueInput | JogadorPartidaWhereUniqueInput[]
    connect?: JogadorPartidaWhereUniqueInput | JogadorPartidaWhereUniqueInput[]
    update?: JogadorPartidaUpdateWithWhereUniqueWithoutUsuarioInput | JogadorPartidaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: JogadorPartidaUpdateManyWithWhereWithoutUsuarioInput | JogadorPartidaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: JogadorPartidaScalarWhereInput | JogadorPartidaScalarWhereInput[]
  }

  export type ItemUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ItemUsuarioCreateWithoutUsuarioInput, ItemUsuarioUncheckedCreateWithoutUsuarioInput> | ItemUsuarioCreateWithoutUsuarioInput[] | ItemUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ItemUsuarioCreateOrConnectWithoutUsuarioInput | ItemUsuarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: ItemUsuarioUpsertWithWhereUniqueWithoutUsuarioInput | ItemUsuarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ItemUsuarioCreateManyUsuarioInputEnvelope
    set?: ItemUsuarioWhereUniqueInput | ItemUsuarioWhereUniqueInput[]
    disconnect?: ItemUsuarioWhereUniqueInput | ItemUsuarioWhereUniqueInput[]
    delete?: ItemUsuarioWhereUniqueInput | ItemUsuarioWhereUniqueInput[]
    connect?: ItemUsuarioWhereUniqueInput | ItemUsuarioWhereUniqueInput[]
    update?: ItemUsuarioUpdateWithWhereUniqueWithoutUsuarioInput | ItemUsuarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ItemUsuarioUpdateManyWithWhereWithoutUsuarioInput | ItemUsuarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ItemUsuarioScalarWhereInput | ItemUsuarioScalarWhereInput[]
  }

  export type JogadorPartidaCreateNestedManyWithoutPartidaInput = {
    create?: XOR<JogadorPartidaCreateWithoutPartidaInput, JogadorPartidaUncheckedCreateWithoutPartidaInput> | JogadorPartidaCreateWithoutPartidaInput[] | JogadorPartidaUncheckedCreateWithoutPartidaInput[]
    connectOrCreate?: JogadorPartidaCreateOrConnectWithoutPartidaInput | JogadorPartidaCreateOrConnectWithoutPartidaInput[]
    createMany?: JogadorPartidaCreateManyPartidaInputEnvelope
    connect?: JogadorPartidaWhereUniqueInput | JogadorPartidaWhereUniqueInput[]
  }

  export type CartaCreateNestedManyWithoutPartidaInput = {
    create?: XOR<CartaCreateWithoutPartidaInput, CartaUncheckedCreateWithoutPartidaInput> | CartaCreateWithoutPartidaInput[] | CartaUncheckedCreateWithoutPartidaInput[]
    connectOrCreate?: CartaCreateOrConnectWithoutPartidaInput | CartaCreateOrConnectWithoutPartidaInput[]
    createMany?: CartaCreateManyPartidaInputEnvelope
    connect?: CartaWhereUniqueInput | CartaWhereUniqueInput[]
  }

  export type JogadorPartidaUncheckedCreateNestedManyWithoutPartidaInput = {
    create?: XOR<JogadorPartidaCreateWithoutPartidaInput, JogadorPartidaUncheckedCreateWithoutPartidaInput> | JogadorPartidaCreateWithoutPartidaInput[] | JogadorPartidaUncheckedCreateWithoutPartidaInput[]
    connectOrCreate?: JogadorPartidaCreateOrConnectWithoutPartidaInput | JogadorPartidaCreateOrConnectWithoutPartidaInput[]
    createMany?: JogadorPartidaCreateManyPartidaInputEnvelope
    connect?: JogadorPartidaWhereUniqueInput | JogadorPartidaWhereUniqueInput[]
  }

  export type CartaUncheckedCreateNestedManyWithoutPartidaInput = {
    create?: XOR<CartaCreateWithoutPartidaInput, CartaUncheckedCreateWithoutPartidaInput> | CartaCreateWithoutPartidaInput[] | CartaUncheckedCreateWithoutPartidaInput[]
    connectOrCreate?: CartaCreateOrConnectWithoutPartidaInput | CartaCreateOrConnectWithoutPartidaInput[]
    createMany?: CartaCreateManyPartidaInputEnvelope
    connect?: CartaWhereUniqueInput | CartaWhereUniqueInput[]
  }

  export type EnumStatusPartidaFieldUpdateOperationsInput = {
    set?: $Enums.StatusPartida
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type JogadorPartidaUpdateManyWithoutPartidaNestedInput = {
    create?: XOR<JogadorPartidaCreateWithoutPartidaInput, JogadorPartidaUncheckedCreateWithoutPartidaInput> | JogadorPartidaCreateWithoutPartidaInput[] | JogadorPartidaUncheckedCreateWithoutPartidaInput[]
    connectOrCreate?: JogadorPartidaCreateOrConnectWithoutPartidaInput | JogadorPartidaCreateOrConnectWithoutPartidaInput[]
    upsert?: JogadorPartidaUpsertWithWhereUniqueWithoutPartidaInput | JogadorPartidaUpsertWithWhereUniqueWithoutPartidaInput[]
    createMany?: JogadorPartidaCreateManyPartidaInputEnvelope
    set?: JogadorPartidaWhereUniqueInput | JogadorPartidaWhereUniqueInput[]
    disconnect?: JogadorPartidaWhereUniqueInput | JogadorPartidaWhereUniqueInput[]
    delete?: JogadorPartidaWhereUniqueInput | JogadorPartidaWhereUniqueInput[]
    connect?: JogadorPartidaWhereUniqueInput | JogadorPartidaWhereUniqueInput[]
    update?: JogadorPartidaUpdateWithWhereUniqueWithoutPartidaInput | JogadorPartidaUpdateWithWhereUniqueWithoutPartidaInput[]
    updateMany?: JogadorPartidaUpdateManyWithWhereWithoutPartidaInput | JogadorPartidaUpdateManyWithWhereWithoutPartidaInput[]
    deleteMany?: JogadorPartidaScalarWhereInput | JogadorPartidaScalarWhereInput[]
  }

  export type CartaUpdateManyWithoutPartidaNestedInput = {
    create?: XOR<CartaCreateWithoutPartidaInput, CartaUncheckedCreateWithoutPartidaInput> | CartaCreateWithoutPartidaInput[] | CartaUncheckedCreateWithoutPartidaInput[]
    connectOrCreate?: CartaCreateOrConnectWithoutPartidaInput | CartaCreateOrConnectWithoutPartidaInput[]
    upsert?: CartaUpsertWithWhereUniqueWithoutPartidaInput | CartaUpsertWithWhereUniqueWithoutPartidaInput[]
    createMany?: CartaCreateManyPartidaInputEnvelope
    set?: CartaWhereUniqueInput | CartaWhereUniqueInput[]
    disconnect?: CartaWhereUniqueInput | CartaWhereUniqueInput[]
    delete?: CartaWhereUniqueInput | CartaWhereUniqueInput[]
    connect?: CartaWhereUniqueInput | CartaWhereUniqueInput[]
    update?: CartaUpdateWithWhereUniqueWithoutPartidaInput | CartaUpdateWithWhereUniqueWithoutPartidaInput[]
    updateMany?: CartaUpdateManyWithWhereWithoutPartidaInput | CartaUpdateManyWithWhereWithoutPartidaInput[]
    deleteMany?: CartaScalarWhereInput | CartaScalarWhereInput[]
  }

  export type JogadorPartidaUncheckedUpdateManyWithoutPartidaNestedInput = {
    create?: XOR<JogadorPartidaCreateWithoutPartidaInput, JogadorPartidaUncheckedCreateWithoutPartidaInput> | JogadorPartidaCreateWithoutPartidaInput[] | JogadorPartidaUncheckedCreateWithoutPartidaInput[]
    connectOrCreate?: JogadorPartidaCreateOrConnectWithoutPartidaInput | JogadorPartidaCreateOrConnectWithoutPartidaInput[]
    upsert?: JogadorPartidaUpsertWithWhereUniqueWithoutPartidaInput | JogadorPartidaUpsertWithWhereUniqueWithoutPartidaInput[]
    createMany?: JogadorPartidaCreateManyPartidaInputEnvelope
    set?: JogadorPartidaWhereUniqueInput | JogadorPartidaWhereUniqueInput[]
    disconnect?: JogadorPartidaWhereUniqueInput | JogadorPartidaWhereUniqueInput[]
    delete?: JogadorPartidaWhereUniqueInput | JogadorPartidaWhereUniqueInput[]
    connect?: JogadorPartidaWhereUniqueInput | JogadorPartidaWhereUniqueInput[]
    update?: JogadorPartidaUpdateWithWhereUniqueWithoutPartidaInput | JogadorPartidaUpdateWithWhereUniqueWithoutPartidaInput[]
    updateMany?: JogadorPartidaUpdateManyWithWhereWithoutPartidaInput | JogadorPartidaUpdateManyWithWhereWithoutPartidaInput[]
    deleteMany?: JogadorPartidaScalarWhereInput | JogadorPartidaScalarWhereInput[]
  }

  export type CartaUncheckedUpdateManyWithoutPartidaNestedInput = {
    create?: XOR<CartaCreateWithoutPartidaInput, CartaUncheckedCreateWithoutPartidaInput> | CartaCreateWithoutPartidaInput[] | CartaUncheckedCreateWithoutPartidaInput[]
    connectOrCreate?: CartaCreateOrConnectWithoutPartidaInput | CartaCreateOrConnectWithoutPartidaInput[]
    upsert?: CartaUpsertWithWhereUniqueWithoutPartidaInput | CartaUpsertWithWhereUniqueWithoutPartidaInput[]
    createMany?: CartaCreateManyPartidaInputEnvelope
    set?: CartaWhereUniqueInput | CartaWhereUniqueInput[]
    disconnect?: CartaWhereUniqueInput | CartaWhereUniqueInput[]
    delete?: CartaWhereUniqueInput | CartaWhereUniqueInput[]
    connect?: CartaWhereUniqueInput | CartaWhereUniqueInput[]
    update?: CartaUpdateWithWhereUniqueWithoutPartidaInput | CartaUpdateWithWhereUniqueWithoutPartidaInput[]
    updateMany?: CartaUpdateManyWithWhereWithoutPartidaInput | CartaUpdateManyWithWhereWithoutPartidaInput[]
    deleteMany?: CartaScalarWhereInput | CartaScalarWhereInput[]
  }

  export type PartidaCreateNestedOneWithoutJogadoresInput = {
    create?: XOR<PartidaCreateWithoutJogadoresInput, PartidaUncheckedCreateWithoutJogadoresInput>
    connectOrCreate?: PartidaCreateOrConnectWithoutJogadoresInput
    connect?: PartidaWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutJogadorPartidasInput = {
    create?: XOR<UsuarioCreateWithoutJogadorPartidasInput, UsuarioUncheckedCreateWithoutJogadorPartidasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutJogadorPartidasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CartaCreateNestedManyWithoutJogadorPartidaInput = {
    create?: XOR<CartaCreateWithoutJogadorPartidaInput, CartaUncheckedCreateWithoutJogadorPartidaInput> | CartaCreateWithoutJogadorPartidaInput[] | CartaUncheckedCreateWithoutJogadorPartidaInput[]
    connectOrCreate?: CartaCreateOrConnectWithoutJogadorPartidaInput | CartaCreateOrConnectWithoutJogadorPartidaInput[]
    createMany?: CartaCreateManyJogadorPartidaInputEnvelope
    connect?: CartaWhereUniqueInput | CartaWhereUniqueInput[]
  }

  export type CartaUncheckedCreateNestedManyWithoutJogadorPartidaInput = {
    create?: XOR<CartaCreateWithoutJogadorPartidaInput, CartaUncheckedCreateWithoutJogadorPartidaInput> | CartaCreateWithoutJogadorPartidaInput[] | CartaUncheckedCreateWithoutJogadorPartidaInput[]
    connectOrCreate?: CartaCreateOrConnectWithoutJogadorPartidaInput | CartaCreateOrConnectWithoutJogadorPartidaInput[]
    createMany?: CartaCreateManyJogadorPartidaInputEnvelope
    connect?: CartaWhereUniqueInput | CartaWhereUniqueInput[]
  }

  export type PartidaUpdateOneRequiredWithoutJogadoresNestedInput = {
    create?: XOR<PartidaCreateWithoutJogadoresInput, PartidaUncheckedCreateWithoutJogadoresInput>
    connectOrCreate?: PartidaCreateOrConnectWithoutJogadoresInput
    upsert?: PartidaUpsertWithoutJogadoresInput
    connect?: PartidaWhereUniqueInput
    update?: XOR<XOR<PartidaUpdateToOneWithWhereWithoutJogadoresInput, PartidaUpdateWithoutJogadoresInput>, PartidaUncheckedUpdateWithoutJogadoresInput>
  }

  export type UsuarioUpdateOneRequiredWithoutJogadorPartidasNestedInput = {
    create?: XOR<UsuarioCreateWithoutJogadorPartidasInput, UsuarioUncheckedCreateWithoutJogadorPartidasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutJogadorPartidasInput
    upsert?: UsuarioUpsertWithoutJogadorPartidasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutJogadorPartidasInput, UsuarioUpdateWithoutJogadorPartidasInput>, UsuarioUncheckedUpdateWithoutJogadorPartidasInput>
  }

  export type CartaUpdateManyWithoutJogadorPartidaNestedInput = {
    create?: XOR<CartaCreateWithoutJogadorPartidaInput, CartaUncheckedCreateWithoutJogadorPartidaInput> | CartaCreateWithoutJogadorPartidaInput[] | CartaUncheckedCreateWithoutJogadorPartidaInput[]
    connectOrCreate?: CartaCreateOrConnectWithoutJogadorPartidaInput | CartaCreateOrConnectWithoutJogadorPartidaInput[]
    upsert?: CartaUpsertWithWhereUniqueWithoutJogadorPartidaInput | CartaUpsertWithWhereUniqueWithoutJogadorPartidaInput[]
    createMany?: CartaCreateManyJogadorPartidaInputEnvelope
    set?: CartaWhereUniqueInput | CartaWhereUniqueInput[]
    disconnect?: CartaWhereUniqueInput | CartaWhereUniqueInput[]
    delete?: CartaWhereUniqueInput | CartaWhereUniqueInput[]
    connect?: CartaWhereUniqueInput | CartaWhereUniqueInput[]
    update?: CartaUpdateWithWhereUniqueWithoutJogadorPartidaInput | CartaUpdateWithWhereUniqueWithoutJogadorPartidaInput[]
    updateMany?: CartaUpdateManyWithWhereWithoutJogadorPartidaInput | CartaUpdateManyWithWhereWithoutJogadorPartidaInput[]
    deleteMany?: CartaScalarWhereInput | CartaScalarWhereInput[]
  }

  export type CartaUncheckedUpdateManyWithoutJogadorPartidaNestedInput = {
    create?: XOR<CartaCreateWithoutJogadorPartidaInput, CartaUncheckedCreateWithoutJogadorPartidaInput> | CartaCreateWithoutJogadorPartidaInput[] | CartaUncheckedCreateWithoutJogadorPartidaInput[]
    connectOrCreate?: CartaCreateOrConnectWithoutJogadorPartidaInput | CartaCreateOrConnectWithoutJogadorPartidaInput[]
    upsert?: CartaUpsertWithWhereUniqueWithoutJogadorPartidaInput | CartaUpsertWithWhereUniqueWithoutJogadorPartidaInput[]
    createMany?: CartaCreateManyJogadorPartidaInputEnvelope
    set?: CartaWhereUniqueInput | CartaWhereUniqueInput[]
    disconnect?: CartaWhereUniqueInput | CartaWhereUniqueInput[]
    delete?: CartaWhereUniqueInput | CartaWhereUniqueInput[]
    connect?: CartaWhereUniqueInput | CartaWhereUniqueInput[]
    update?: CartaUpdateWithWhereUniqueWithoutJogadorPartidaInput | CartaUpdateWithWhereUniqueWithoutJogadorPartidaInput[]
    updateMany?: CartaUpdateManyWithWhereWithoutJogadorPartidaInput | CartaUpdateManyWithWhereWithoutJogadorPartidaInput[]
    deleteMany?: CartaScalarWhereInput | CartaScalarWhereInput[]
  }

  export type PartidaCreateNestedOneWithoutCartasInput = {
    create?: XOR<PartidaCreateWithoutCartasInput, PartidaUncheckedCreateWithoutCartasInput>
    connectOrCreate?: PartidaCreateOrConnectWithoutCartasInput
    connect?: PartidaWhereUniqueInput
  }

  export type JogadorPartidaCreateNestedOneWithoutCartasInput = {
    create?: XOR<JogadorPartidaCreateWithoutCartasInput, JogadorPartidaUncheckedCreateWithoutCartasInput>
    connectOrCreate?: JogadorPartidaCreateOrConnectWithoutCartasInput
    connect?: JogadorPartidaWhereUniqueInput
  }

  export type PartidaUpdateOneRequiredWithoutCartasNestedInput = {
    create?: XOR<PartidaCreateWithoutCartasInput, PartidaUncheckedCreateWithoutCartasInput>
    connectOrCreate?: PartidaCreateOrConnectWithoutCartasInput
    upsert?: PartidaUpsertWithoutCartasInput
    connect?: PartidaWhereUniqueInput
    update?: XOR<XOR<PartidaUpdateToOneWithWhereWithoutCartasInput, PartidaUpdateWithoutCartasInput>, PartidaUncheckedUpdateWithoutCartasInput>
  }

  export type JogadorPartidaUpdateOneWithoutCartasNestedInput = {
    create?: XOR<JogadorPartidaCreateWithoutCartasInput, JogadorPartidaUncheckedCreateWithoutCartasInput>
    connectOrCreate?: JogadorPartidaCreateOrConnectWithoutCartasInput
    upsert?: JogadorPartidaUpsertWithoutCartasInput
    disconnect?: JogadorPartidaWhereInput | boolean
    delete?: JogadorPartidaWhereInput | boolean
    connect?: JogadorPartidaWhereUniqueInput
    update?: XOR<XOR<JogadorPartidaUpdateToOneWithWhereWithoutCartasInput, JogadorPartidaUpdateWithoutCartasInput>, JogadorPartidaUncheckedUpdateWithoutCartasInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ItemUsuarioCreateNestedManyWithoutItemLojaInput = {
    create?: XOR<ItemUsuarioCreateWithoutItemLojaInput, ItemUsuarioUncheckedCreateWithoutItemLojaInput> | ItemUsuarioCreateWithoutItemLojaInput[] | ItemUsuarioUncheckedCreateWithoutItemLojaInput[]
    connectOrCreate?: ItemUsuarioCreateOrConnectWithoutItemLojaInput | ItemUsuarioCreateOrConnectWithoutItemLojaInput[]
    createMany?: ItemUsuarioCreateManyItemLojaInputEnvelope
    connect?: ItemUsuarioWhereUniqueInput | ItemUsuarioWhereUniqueInput[]
  }

  export type ItemUsuarioUncheckedCreateNestedManyWithoutItemLojaInput = {
    create?: XOR<ItemUsuarioCreateWithoutItemLojaInput, ItemUsuarioUncheckedCreateWithoutItemLojaInput> | ItemUsuarioCreateWithoutItemLojaInput[] | ItemUsuarioUncheckedCreateWithoutItemLojaInput[]
    connectOrCreate?: ItemUsuarioCreateOrConnectWithoutItemLojaInput | ItemUsuarioCreateOrConnectWithoutItemLojaInput[]
    createMany?: ItemUsuarioCreateManyItemLojaInputEnvelope
    connect?: ItemUsuarioWhereUniqueInput | ItemUsuarioWhereUniqueInput[]
  }

  export type EnumTipoItemLojaFieldUpdateOperationsInput = {
    set?: $Enums.TipoItemLoja
  }

  export type EnumDisponibilidadeItemFieldUpdateOperationsInput = {
    set?: $Enums.DisponibilidadeItem
  }

  export type ItemUsuarioUpdateManyWithoutItemLojaNestedInput = {
    create?: XOR<ItemUsuarioCreateWithoutItemLojaInput, ItemUsuarioUncheckedCreateWithoutItemLojaInput> | ItemUsuarioCreateWithoutItemLojaInput[] | ItemUsuarioUncheckedCreateWithoutItemLojaInput[]
    connectOrCreate?: ItemUsuarioCreateOrConnectWithoutItemLojaInput | ItemUsuarioCreateOrConnectWithoutItemLojaInput[]
    upsert?: ItemUsuarioUpsertWithWhereUniqueWithoutItemLojaInput | ItemUsuarioUpsertWithWhereUniqueWithoutItemLojaInput[]
    createMany?: ItemUsuarioCreateManyItemLojaInputEnvelope
    set?: ItemUsuarioWhereUniqueInput | ItemUsuarioWhereUniqueInput[]
    disconnect?: ItemUsuarioWhereUniqueInput | ItemUsuarioWhereUniqueInput[]
    delete?: ItemUsuarioWhereUniqueInput | ItemUsuarioWhereUniqueInput[]
    connect?: ItemUsuarioWhereUniqueInput | ItemUsuarioWhereUniqueInput[]
    update?: ItemUsuarioUpdateWithWhereUniqueWithoutItemLojaInput | ItemUsuarioUpdateWithWhereUniqueWithoutItemLojaInput[]
    updateMany?: ItemUsuarioUpdateManyWithWhereWithoutItemLojaInput | ItemUsuarioUpdateManyWithWhereWithoutItemLojaInput[]
    deleteMany?: ItemUsuarioScalarWhereInput | ItemUsuarioScalarWhereInput[]
  }

  export type ItemUsuarioUncheckedUpdateManyWithoutItemLojaNestedInput = {
    create?: XOR<ItemUsuarioCreateWithoutItemLojaInput, ItemUsuarioUncheckedCreateWithoutItemLojaInput> | ItemUsuarioCreateWithoutItemLojaInput[] | ItemUsuarioUncheckedCreateWithoutItemLojaInput[]
    connectOrCreate?: ItemUsuarioCreateOrConnectWithoutItemLojaInput | ItemUsuarioCreateOrConnectWithoutItemLojaInput[]
    upsert?: ItemUsuarioUpsertWithWhereUniqueWithoutItemLojaInput | ItemUsuarioUpsertWithWhereUniqueWithoutItemLojaInput[]
    createMany?: ItemUsuarioCreateManyItemLojaInputEnvelope
    set?: ItemUsuarioWhereUniqueInput | ItemUsuarioWhereUniqueInput[]
    disconnect?: ItemUsuarioWhereUniqueInput | ItemUsuarioWhereUniqueInput[]
    delete?: ItemUsuarioWhereUniqueInput | ItemUsuarioWhereUniqueInput[]
    connect?: ItemUsuarioWhereUniqueInput | ItemUsuarioWhereUniqueInput[]
    update?: ItemUsuarioUpdateWithWhereUniqueWithoutItemLojaInput | ItemUsuarioUpdateWithWhereUniqueWithoutItemLojaInput[]
    updateMany?: ItemUsuarioUpdateManyWithWhereWithoutItemLojaInput | ItemUsuarioUpdateManyWithWhereWithoutItemLojaInput[]
    deleteMany?: ItemUsuarioScalarWhereInput | ItemUsuarioScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutItensInput = {
    create?: XOR<UsuarioCreateWithoutItensInput, UsuarioUncheckedCreateWithoutItensInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutItensInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ItemLojaCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<ItemLojaCreateWithoutUsuariosInput, ItemLojaUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: ItemLojaCreateOrConnectWithoutUsuariosInput
    connect?: ItemLojaWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<UsuarioCreateWithoutItensInput, UsuarioUncheckedCreateWithoutItensInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutItensInput
    upsert?: UsuarioUpsertWithoutItensInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutItensInput, UsuarioUpdateWithoutItensInput>, UsuarioUncheckedUpdateWithoutItensInput>
  }

  export type ItemLojaUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<ItemLojaCreateWithoutUsuariosInput, ItemLojaUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: ItemLojaCreateOrConnectWithoutUsuariosInput
    upsert?: ItemLojaUpsertWithoutUsuariosInput
    connect?: ItemLojaWhereUniqueInput
    update?: XOR<XOR<ItemLojaUpdateToOneWithWhereWithoutUsuariosInput, ItemLojaUpdateWithoutUsuariosInput>, ItemLojaUncheckedUpdateWithoutUsuariosInput>
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

  export type NestedEnumStatusUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusUsuario | EnumStatusUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.StatusUsuario[] | ListEnumStatusUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusUsuario[] | ListEnumStatusUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusUsuarioFilter<$PrismaModel> | $Enums.StatusUsuario
  }

  export type NestedEnumCargoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.CargoUsuario | EnumCargoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.CargoUsuario[] | ListEnumCargoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.CargoUsuario[] | ListEnumCargoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumCargoUsuarioFilter<$PrismaModel> | $Enums.CargoUsuario
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

  export type NestedEnumStatusUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusUsuario | EnumStatusUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.StatusUsuario[] | ListEnumStatusUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusUsuario[] | ListEnumStatusUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.StatusUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusUsuarioFilter<$PrismaModel>
    _max?: NestedEnumStatusUsuarioFilter<$PrismaModel>
  }

  export type NestedEnumCargoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CargoUsuario | EnumCargoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.CargoUsuario[] | ListEnumCargoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.CargoUsuario[] | ListEnumCargoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumCargoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.CargoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCargoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumCargoUsuarioFilter<$PrismaModel>
  }

  export type NestedEnumStatusPartidaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPartida | EnumStatusPartidaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPartida[] | ListEnumStatusPartidaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPartida[] | ListEnumStatusPartidaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPartidaFilter<$PrismaModel> | $Enums.StatusPartida
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

  export type NestedEnumStatusPartidaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPartida | EnumStatusPartidaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPartida[] | ListEnumStatusPartidaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPartida[] | ListEnumStatusPartidaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPartidaWithAggregatesFilter<$PrismaModel> | $Enums.StatusPartida
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPartidaFilter<$PrismaModel>
    _max?: NestedEnumStatusPartidaFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTipoItemLojaFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoItemLoja | EnumTipoItemLojaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoItemLoja[] | ListEnumTipoItemLojaFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoItemLoja[] | ListEnumTipoItemLojaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoItemLojaFilter<$PrismaModel> | $Enums.TipoItemLoja
  }

  export type NestedEnumDisponibilidadeItemFilter<$PrismaModel = never> = {
    equals?: $Enums.DisponibilidadeItem | EnumDisponibilidadeItemFieldRefInput<$PrismaModel>
    in?: $Enums.DisponibilidadeItem[] | ListEnumDisponibilidadeItemFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisponibilidadeItem[] | ListEnumDisponibilidadeItemFieldRefInput<$PrismaModel>
    not?: NestedEnumDisponibilidadeItemFilter<$PrismaModel> | $Enums.DisponibilidadeItem
  }

  export type NestedEnumTipoItemLojaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoItemLoja | EnumTipoItemLojaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoItemLoja[] | ListEnumTipoItemLojaFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoItemLoja[] | ListEnumTipoItemLojaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoItemLojaWithAggregatesFilter<$PrismaModel> | $Enums.TipoItemLoja
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoItemLojaFilter<$PrismaModel>
    _max?: NestedEnumTipoItemLojaFilter<$PrismaModel>
  }

  export type NestedEnumDisponibilidadeItemWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DisponibilidadeItem | EnumDisponibilidadeItemFieldRefInput<$PrismaModel>
    in?: $Enums.DisponibilidadeItem[] | ListEnumDisponibilidadeItemFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisponibilidadeItem[] | ListEnumDisponibilidadeItemFieldRefInput<$PrismaModel>
    not?: NestedEnumDisponibilidadeItemWithAggregatesFilter<$PrismaModel> | $Enums.DisponibilidadeItem
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDisponibilidadeItemFilter<$PrismaModel>
    _max?: NestedEnumDisponibilidadeItemFilter<$PrismaModel>
  }

  export type JogadorPartidaCreateWithoutUsuarioInput = {
    ordem_jogada: number
    pontuacao?: number
    partida: PartidaCreateNestedOneWithoutJogadoresInput
    cartas?: CartaCreateNestedManyWithoutJogadorPartidaInput
  }

  export type JogadorPartidaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    partida_id: number
    ordem_jogada: number
    pontuacao?: number
    cartas?: CartaUncheckedCreateNestedManyWithoutJogadorPartidaInput
  }

  export type JogadorPartidaCreateOrConnectWithoutUsuarioInput = {
    where: JogadorPartidaWhereUniqueInput
    create: XOR<JogadorPartidaCreateWithoutUsuarioInput, JogadorPartidaUncheckedCreateWithoutUsuarioInput>
  }

  export type JogadorPartidaCreateManyUsuarioInputEnvelope = {
    data: JogadorPartidaCreateManyUsuarioInput | JogadorPartidaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ItemUsuarioCreateWithoutUsuarioInput = {
    itemLoja: ItemLojaCreateNestedOneWithoutUsuariosInput
  }

  export type ItemUsuarioUncheckedCreateWithoutUsuarioInput = {
    id?: number
    item_loja_id: number
  }

  export type ItemUsuarioCreateOrConnectWithoutUsuarioInput = {
    where: ItemUsuarioWhereUniqueInput
    create: XOR<ItemUsuarioCreateWithoutUsuarioInput, ItemUsuarioUncheckedCreateWithoutUsuarioInput>
  }

  export type ItemUsuarioCreateManyUsuarioInputEnvelope = {
    data: ItemUsuarioCreateManyUsuarioInput | ItemUsuarioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type JogadorPartidaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: JogadorPartidaWhereUniqueInput
    update: XOR<JogadorPartidaUpdateWithoutUsuarioInput, JogadorPartidaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<JogadorPartidaCreateWithoutUsuarioInput, JogadorPartidaUncheckedCreateWithoutUsuarioInput>
  }

  export type JogadorPartidaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: JogadorPartidaWhereUniqueInput
    data: XOR<JogadorPartidaUpdateWithoutUsuarioInput, JogadorPartidaUncheckedUpdateWithoutUsuarioInput>
  }

  export type JogadorPartidaUpdateManyWithWhereWithoutUsuarioInput = {
    where: JogadorPartidaScalarWhereInput
    data: XOR<JogadorPartidaUpdateManyMutationInput, JogadorPartidaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type JogadorPartidaScalarWhereInput = {
    AND?: JogadorPartidaScalarWhereInput | JogadorPartidaScalarWhereInput[]
    OR?: JogadorPartidaScalarWhereInput[]
    NOT?: JogadorPartidaScalarWhereInput | JogadorPartidaScalarWhereInput[]
    id?: IntFilter<"JogadorPartida"> | number
    partida_id?: IntFilter<"JogadorPartida"> | number
    usuario_id?: IntFilter<"JogadorPartida"> | number
    ordem_jogada?: IntFilter<"JogadorPartida"> | number
    pontuacao?: IntFilter<"JogadorPartida"> | number
  }

  export type ItemUsuarioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ItemUsuarioWhereUniqueInput
    update: XOR<ItemUsuarioUpdateWithoutUsuarioInput, ItemUsuarioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ItemUsuarioCreateWithoutUsuarioInput, ItemUsuarioUncheckedCreateWithoutUsuarioInput>
  }

  export type ItemUsuarioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ItemUsuarioWhereUniqueInput
    data: XOR<ItemUsuarioUpdateWithoutUsuarioInput, ItemUsuarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type ItemUsuarioUpdateManyWithWhereWithoutUsuarioInput = {
    where: ItemUsuarioScalarWhereInput
    data: XOR<ItemUsuarioUpdateManyMutationInput, ItemUsuarioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ItemUsuarioScalarWhereInput = {
    AND?: ItemUsuarioScalarWhereInput | ItemUsuarioScalarWhereInput[]
    OR?: ItemUsuarioScalarWhereInput[]
    NOT?: ItemUsuarioScalarWhereInput | ItemUsuarioScalarWhereInput[]
    id?: IntFilter<"ItemUsuario"> | number
    usuario_id?: IntFilter<"ItemUsuario"> | number
    item_loja_id?: IntFilter<"ItemUsuario"> | number
  }

  export type JogadorPartidaCreateWithoutPartidaInput = {
    ordem_jogada: number
    pontuacao?: number
    usuario: UsuarioCreateNestedOneWithoutJogadorPartidasInput
    cartas?: CartaCreateNestedManyWithoutJogadorPartidaInput
  }

  export type JogadorPartidaUncheckedCreateWithoutPartidaInput = {
    id?: number
    usuario_id: number
    ordem_jogada: number
    pontuacao?: number
    cartas?: CartaUncheckedCreateNestedManyWithoutJogadorPartidaInput
  }

  export type JogadorPartidaCreateOrConnectWithoutPartidaInput = {
    where: JogadorPartidaWhereUniqueInput
    create: XOR<JogadorPartidaCreateWithoutPartidaInput, JogadorPartidaUncheckedCreateWithoutPartidaInput>
  }

  export type JogadorPartidaCreateManyPartidaInputEnvelope = {
    data: JogadorPartidaCreateManyPartidaInput | JogadorPartidaCreateManyPartidaInput[]
    skipDuplicates?: boolean
  }

  export type CartaCreateWithoutPartidaInput = {
    valor: number
    tipo: string
    quantidade: number
    jogadorPartida?: JogadorPartidaCreateNestedOneWithoutCartasInput
  }

  export type CartaUncheckedCreateWithoutPartidaInput = {
    id?: number
    jogador_partida_id?: number | null
    valor: number
    tipo: string
    quantidade: number
  }

  export type CartaCreateOrConnectWithoutPartidaInput = {
    where: CartaWhereUniqueInput
    create: XOR<CartaCreateWithoutPartidaInput, CartaUncheckedCreateWithoutPartidaInput>
  }

  export type CartaCreateManyPartidaInputEnvelope = {
    data: CartaCreateManyPartidaInput | CartaCreateManyPartidaInput[]
    skipDuplicates?: boolean
  }

  export type JogadorPartidaUpsertWithWhereUniqueWithoutPartidaInput = {
    where: JogadorPartidaWhereUniqueInput
    update: XOR<JogadorPartidaUpdateWithoutPartidaInput, JogadorPartidaUncheckedUpdateWithoutPartidaInput>
    create: XOR<JogadorPartidaCreateWithoutPartidaInput, JogadorPartidaUncheckedCreateWithoutPartidaInput>
  }

  export type JogadorPartidaUpdateWithWhereUniqueWithoutPartidaInput = {
    where: JogadorPartidaWhereUniqueInput
    data: XOR<JogadorPartidaUpdateWithoutPartidaInput, JogadorPartidaUncheckedUpdateWithoutPartidaInput>
  }

  export type JogadorPartidaUpdateManyWithWhereWithoutPartidaInput = {
    where: JogadorPartidaScalarWhereInput
    data: XOR<JogadorPartidaUpdateManyMutationInput, JogadorPartidaUncheckedUpdateManyWithoutPartidaInput>
  }

  export type CartaUpsertWithWhereUniqueWithoutPartidaInput = {
    where: CartaWhereUniqueInput
    update: XOR<CartaUpdateWithoutPartidaInput, CartaUncheckedUpdateWithoutPartidaInput>
    create: XOR<CartaCreateWithoutPartidaInput, CartaUncheckedCreateWithoutPartidaInput>
  }

  export type CartaUpdateWithWhereUniqueWithoutPartidaInput = {
    where: CartaWhereUniqueInput
    data: XOR<CartaUpdateWithoutPartidaInput, CartaUncheckedUpdateWithoutPartidaInput>
  }

  export type CartaUpdateManyWithWhereWithoutPartidaInput = {
    where: CartaScalarWhereInput
    data: XOR<CartaUpdateManyMutationInput, CartaUncheckedUpdateManyWithoutPartidaInput>
  }

  export type CartaScalarWhereInput = {
    AND?: CartaScalarWhereInput | CartaScalarWhereInput[]
    OR?: CartaScalarWhereInput[]
    NOT?: CartaScalarWhereInput | CartaScalarWhereInput[]
    id?: IntFilter<"Carta"> | number
    partida_id?: IntFilter<"Carta"> | number
    jogador_partida_id?: IntNullableFilter<"Carta"> | number | null
    valor?: IntFilter<"Carta"> | number
    tipo?: StringFilter<"Carta"> | string
    quantidade?: IntFilter<"Carta"> | number
  }

  export type PartidaCreateWithoutJogadoresInput = {
    nome: string
    data_inicio?: Date | string
    data_fim: Date | string
    status: $Enums.StatusPartida
    vagas?: number
    senha?: string | null
    cartas?: CartaCreateNestedManyWithoutPartidaInput
  }

  export type PartidaUncheckedCreateWithoutJogadoresInput = {
    id?: number
    nome: string
    data_inicio?: Date | string
    data_fim: Date | string
    status: $Enums.StatusPartida
    vagas?: number
    senha?: string | null
    cartas?: CartaUncheckedCreateNestedManyWithoutPartidaInput
  }

  export type PartidaCreateOrConnectWithoutJogadoresInput = {
    where: PartidaWhereUniqueInput
    create: XOR<PartidaCreateWithoutJogadoresInput, PartidaUncheckedCreateWithoutJogadoresInput>
  }

  export type UsuarioCreateWithoutJogadorPartidasInput = {
    email: string
    senha: string
    nome: string
    moedas?: number
    data_criacao?: Date | string
    partidas_ganhas?: number
    partidas_totais?: number
    avatar_ativo: number
    fundo_ativo: number
    deck_ativo: number
    status: $Enums.StatusUsuario
    cargo: $Enums.CargoUsuario
    itens?: ItemUsuarioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutJogadorPartidasInput = {
    id?: number
    email: string
    senha: string
    nome: string
    moedas?: number
    data_criacao?: Date | string
    partidas_ganhas?: number
    partidas_totais?: number
    avatar_ativo: number
    fundo_ativo: number
    deck_ativo: number
    status: $Enums.StatusUsuario
    cargo: $Enums.CargoUsuario
    itens?: ItemUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutJogadorPartidasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutJogadorPartidasInput, UsuarioUncheckedCreateWithoutJogadorPartidasInput>
  }

  export type CartaCreateWithoutJogadorPartidaInput = {
    valor: number
    tipo: string
    quantidade: number
    partida: PartidaCreateNestedOneWithoutCartasInput
  }

  export type CartaUncheckedCreateWithoutJogadorPartidaInput = {
    id?: number
    partida_id: number
    valor: number
    tipo: string
    quantidade: number
  }

  export type CartaCreateOrConnectWithoutJogadorPartidaInput = {
    where: CartaWhereUniqueInput
    create: XOR<CartaCreateWithoutJogadorPartidaInput, CartaUncheckedCreateWithoutJogadorPartidaInput>
  }

  export type CartaCreateManyJogadorPartidaInputEnvelope = {
    data: CartaCreateManyJogadorPartidaInput | CartaCreateManyJogadorPartidaInput[]
    skipDuplicates?: boolean
  }

  export type PartidaUpsertWithoutJogadoresInput = {
    update: XOR<PartidaUpdateWithoutJogadoresInput, PartidaUncheckedUpdateWithoutJogadoresInput>
    create: XOR<PartidaCreateWithoutJogadoresInput, PartidaUncheckedCreateWithoutJogadoresInput>
    where?: PartidaWhereInput
  }

  export type PartidaUpdateToOneWithWhereWithoutJogadoresInput = {
    where?: PartidaWhereInput
    data: XOR<PartidaUpdateWithoutJogadoresInput, PartidaUncheckedUpdateWithoutJogadoresInput>
  }

  export type PartidaUpdateWithoutJogadoresInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPartidaFieldUpdateOperationsInput | $Enums.StatusPartida
    vagas?: IntFieldUpdateOperationsInput | number
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    cartas?: CartaUpdateManyWithoutPartidaNestedInput
  }

  export type PartidaUncheckedUpdateWithoutJogadoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPartidaFieldUpdateOperationsInput | $Enums.StatusPartida
    vagas?: IntFieldUpdateOperationsInput | number
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    cartas?: CartaUncheckedUpdateManyWithoutPartidaNestedInput
  }

  export type UsuarioUpsertWithoutJogadorPartidasInput = {
    update: XOR<UsuarioUpdateWithoutJogadorPartidasInput, UsuarioUncheckedUpdateWithoutJogadorPartidasInput>
    create: XOR<UsuarioCreateWithoutJogadorPartidasInput, UsuarioUncheckedCreateWithoutJogadorPartidasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutJogadorPartidasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutJogadorPartidasInput, UsuarioUncheckedUpdateWithoutJogadorPartidasInput>
  }

  export type UsuarioUpdateWithoutJogadorPartidasInput = {
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    moedas?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    partidas_ganhas?: IntFieldUpdateOperationsInput | number
    partidas_totais?: IntFieldUpdateOperationsInput | number
    avatar_ativo?: IntFieldUpdateOperationsInput | number
    fundo_ativo?: IntFieldUpdateOperationsInput | number
    deck_ativo?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusUsuarioFieldUpdateOperationsInput | $Enums.StatusUsuario
    cargo?: EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario
    itens?: ItemUsuarioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutJogadorPartidasInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    moedas?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    partidas_ganhas?: IntFieldUpdateOperationsInput | number
    partidas_totais?: IntFieldUpdateOperationsInput | number
    avatar_ativo?: IntFieldUpdateOperationsInput | number
    fundo_ativo?: IntFieldUpdateOperationsInput | number
    deck_ativo?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusUsuarioFieldUpdateOperationsInput | $Enums.StatusUsuario
    cargo?: EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario
    itens?: ItemUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type CartaUpsertWithWhereUniqueWithoutJogadorPartidaInput = {
    where: CartaWhereUniqueInput
    update: XOR<CartaUpdateWithoutJogadorPartidaInput, CartaUncheckedUpdateWithoutJogadorPartidaInput>
    create: XOR<CartaCreateWithoutJogadorPartidaInput, CartaUncheckedCreateWithoutJogadorPartidaInput>
  }

  export type CartaUpdateWithWhereUniqueWithoutJogadorPartidaInput = {
    where: CartaWhereUniqueInput
    data: XOR<CartaUpdateWithoutJogadorPartidaInput, CartaUncheckedUpdateWithoutJogadorPartidaInput>
  }

  export type CartaUpdateManyWithWhereWithoutJogadorPartidaInput = {
    where: CartaScalarWhereInput
    data: XOR<CartaUpdateManyMutationInput, CartaUncheckedUpdateManyWithoutJogadorPartidaInput>
  }

  export type PartidaCreateWithoutCartasInput = {
    nome: string
    data_inicio?: Date | string
    data_fim: Date | string
    status: $Enums.StatusPartida
    vagas?: number
    senha?: string | null
    jogadores?: JogadorPartidaCreateNestedManyWithoutPartidaInput
  }

  export type PartidaUncheckedCreateWithoutCartasInput = {
    id?: number
    nome: string
    data_inicio?: Date | string
    data_fim: Date | string
    status: $Enums.StatusPartida
    vagas?: number
    senha?: string | null
    jogadores?: JogadorPartidaUncheckedCreateNestedManyWithoutPartidaInput
  }

  export type PartidaCreateOrConnectWithoutCartasInput = {
    where: PartidaWhereUniqueInput
    create: XOR<PartidaCreateWithoutCartasInput, PartidaUncheckedCreateWithoutCartasInput>
  }

  export type JogadorPartidaCreateWithoutCartasInput = {
    ordem_jogada: number
    pontuacao?: number
    partida: PartidaCreateNestedOneWithoutJogadoresInput
    usuario: UsuarioCreateNestedOneWithoutJogadorPartidasInput
  }

  export type JogadorPartidaUncheckedCreateWithoutCartasInput = {
    id?: number
    partida_id: number
    usuario_id: number
    ordem_jogada: number
    pontuacao?: number
  }

  export type JogadorPartidaCreateOrConnectWithoutCartasInput = {
    where: JogadorPartidaWhereUniqueInput
    create: XOR<JogadorPartidaCreateWithoutCartasInput, JogadorPartidaUncheckedCreateWithoutCartasInput>
  }

  export type PartidaUpsertWithoutCartasInput = {
    update: XOR<PartidaUpdateWithoutCartasInput, PartidaUncheckedUpdateWithoutCartasInput>
    create: XOR<PartidaCreateWithoutCartasInput, PartidaUncheckedCreateWithoutCartasInput>
    where?: PartidaWhereInput
  }

  export type PartidaUpdateToOneWithWhereWithoutCartasInput = {
    where?: PartidaWhereInput
    data: XOR<PartidaUpdateWithoutCartasInput, PartidaUncheckedUpdateWithoutCartasInput>
  }

  export type PartidaUpdateWithoutCartasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPartidaFieldUpdateOperationsInput | $Enums.StatusPartida
    vagas?: IntFieldUpdateOperationsInput | number
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    jogadores?: JogadorPartidaUpdateManyWithoutPartidaNestedInput
  }

  export type PartidaUncheckedUpdateWithoutCartasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPartidaFieldUpdateOperationsInput | $Enums.StatusPartida
    vagas?: IntFieldUpdateOperationsInput | number
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    jogadores?: JogadorPartidaUncheckedUpdateManyWithoutPartidaNestedInput
  }

  export type JogadorPartidaUpsertWithoutCartasInput = {
    update: XOR<JogadorPartidaUpdateWithoutCartasInput, JogadorPartidaUncheckedUpdateWithoutCartasInput>
    create: XOR<JogadorPartidaCreateWithoutCartasInput, JogadorPartidaUncheckedCreateWithoutCartasInput>
    where?: JogadorPartidaWhereInput
  }

  export type JogadorPartidaUpdateToOneWithWhereWithoutCartasInput = {
    where?: JogadorPartidaWhereInput
    data: XOR<JogadorPartidaUpdateWithoutCartasInput, JogadorPartidaUncheckedUpdateWithoutCartasInput>
  }

  export type JogadorPartidaUpdateWithoutCartasInput = {
    ordem_jogada?: IntFieldUpdateOperationsInput | number
    pontuacao?: IntFieldUpdateOperationsInput | number
    partida?: PartidaUpdateOneRequiredWithoutJogadoresNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutJogadorPartidasNestedInput
  }

  export type JogadorPartidaUncheckedUpdateWithoutCartasInput = {
    id?: IntFieldUpdateOperationsInput | number
    partida_id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    ordem_jogada?: IntFieldUpdateOperationsInput | number
    pontuacao?: IntFieldUpdateOperationsInput | number
  }

  export type ItemUsuarioCreateWithoutItemLojaInput = {
    usuario: UsuarioCreateNestedOneWithoutItensInput
  }

  export type ItemUsuarioUncheckedCreateWithoutItemLojaInput = {
    id?: number
    usuario_id: number
  }

  export type ItemUsuarioCreateOrConnectWithoutItemLojaInput = {
    where: ItemUsuarioWhereUniqueInput
    create: XOR<ItemUsuarioCreateWithoutItemLojaInput, ItemUsuarioUncheckedCreateWithoutItemLojaInput>
  }

  export type ItemUsuarioCreateManyItemLojaInputEnvelope = {
    data: ItemUsuarioCreateManyItemLojaInput | ItemUsuarioCreateManyItemLojaInput[]
    skipDuplicates?: boolean
  }

  export type ItemUsuarioUpsertWithWhereUniqueWithoutItemLojaInput = {
    where: ItemUsuarioWhereUniqueInput
    update: XOR<ItemUsuarioUpdateWithoutItemLojaInput, ItemUsuarioUncheckedUpdateWithoutItemLojaInput>
    create: XOR<ItemUsuarioCreateWithoutItemLojaInput, ItemUsuarioUncheckedCreateWithoutItemLojaInput>
  }

  export type ItemUsuarioUpdateWithWhereUniqueWithoutItemLojaInput = {
    where: ItemUsuarioWhereUniqueInput
    data: XOR<ItemUsuarioUpdateWithoutItemLojaInput, ItemUsuarioUncheckedUpdateWithoutItemLojaInput>
  }

  export type ItemUsuarioUpdateManyWithWhereWithoutItemLojaInput = {
    where: ItemUsuarioScalarWhereInput
    data: XOR<ItemUsuarioUpdateManyMutationInput, ItemUsuarioUncheckedUpdateManyWithoutItemLojaInput>
  }

  export type UsuarioCreateWithoutItensInput = {
    email: string
    senha: string
    nome: string
    moedas?: number
    data_criacao?: Date | string
    partidas_ganhas?: number
    partidas_totais?: number
    avatar_ativo: number
    fundo_ativo: number
    deck_ativo: number
    status: $Enums.StatusUsuario
    cargo: $Enums.CargoUsuario
    jogadorPartidas?: JogadorPartidaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutItensInput = {
    id?: number
    email: string
    senha: string
    nome: string
    moedas?: number
    data_criacao?: Date | string
    partidas_ganhas?: number
    partidas_totais?: number
    avatar_ativo: number
    fundo_ativo: number
    deck_ativo: number
    status: $Enums.StatusUsuario
    cargo: $Enums.CargoUsuario
    jogadorPartidas?: JogadorPartidaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutItensInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutItensInput, UsuarioUncheckedCreateWithoutItensInput>
  }

  export type ItemLojaCreateWithoutUsuariosInput = {
    nome: string
    tipo: $Enums.TipoItemLoja
    disponibilidade: $Enums.DisponibilidadeItem
    preco: number
  }

  export type ItemLojaUncheckedCreateWithoutUsuariosInput = {
    id?: number
    nome: string
    tipo: $Enums.TipoItemLoja
    disponibilidade: $Enums.DisponibilidadeItem
    preco: number
  }

  export type ItemLojaCreateOrConnectWithoutUsuariosInput = {
    where: ItemLojaWhereUniqueInput
    create: XOR<ItemLojaCreateWithoutUsuariosInput, ItemLojaUncheckedCreateWithoutUsuariosInput>
  }

  export type UsuarioUpsertWithoutItensInput = {
    update: XOR<UsuarioUpdateWithoutItensInput, UsuarioUncheckedUpdateWithoutItensInput>
    create: XOR<UsuarioCreateWithoutItensInput, UsuarioUncheckedCreateWithoutItensInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutItensInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutItensInput, UsuarioUncheckedUpdateWithoutItensInput>
  }

  export type UsuarioUpdateWithoutItensInput = {
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    moedas?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    partidas_ganhas?: IntFieldUpdateOperationsInput | number
    partidas_totais?: IntFieldUpdateOperationsInput | number
    avatar_ativo?: IntFieldUpdateOperationsInput | number
    fundo_ativo?: IntFieldUpdateOperationsInput | number
    deck_ativo?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusUsuarioFieldUpdateOperationsInput | $Enums.StatusUsuario
    cargo?: EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario
    jogadorPartidas?: JogadorPartidaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutItensInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    moedas?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    partidas_ganhas?: IntFieldUpdateOperationsInput | number
    partidas_totais?: IntFieldUpdateOperationsInput | number
    avatar_ativo?: IntFieldUpdateOperationsInput | number
    fundo_ativo?: IntFieldUpdateOperationsInput | number
    deck_ativo?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusUsuarioFieldUpdateOperationsInput | $Enums.StatusUsuario
    cargo?: EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario
    jogadorPartidas?: JogadorPartidaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ItemLojaUpsertWithoutUsuariosInput = {
    update: XOR<ItemLojaUpdateWithoutUsuariosInput, ItemLojaUncheckedUpdateWithoutUsuariosInput>
    create: XOR<ItemLojaCreateWithoutUsuariosInput, ItemLojaUncheckedCreateWithoutUsuariosInput>
    where?: ItemLojaWhereInput
  }

  export type ItemLojaUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: ItemLojaWhereInput
    data: XOR<ItemLojaUpdateWithoutUsuariosInput, ItemLojaUncheckedUpdateWithoutUsuariosInput>
  }

  export type ItemLojaUpdateWithoutUsuariosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoItemLojaFieldUpdateOperationsInput | $Enums.TipoItemLoja
    disponibilidade?: EnumDisponibilidadeItemFieldUpdateOperationsInput | $Enums.DisponibilidadeItem
    preco?: IntFieldUpdateOperationsInput | number
  }

  export type ItemLojaUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoItemLojaFieldUpdateOperationsInput | $Enums.TipoItemLoja
    disponibilidade?: EnumDisponibilidadeItemFieldUpdateOperationsInput | $Enums.DisponibilidadeItem
    preco?: IntFieldUpdateOperationsInput | number
  }

  export type JogadorPartidaCreateManyUsuarioInput = {
    id?: number
    partida_id: number
    ordem_jogada: number
    pontuacao?: number
  }

  export type ItemUsuarioCreateManyUsuarioInput = {
    id?: number
    item_loja_id: number
  }

  export type JogadorPartidaUpdateWithoutUsuarioInput = {
    ordem_jogada?: IntFieldUpdateOperationsInput | number
    pontuacao?: IntFieldUpdateOperationsInput | number
    partida?: PartidaUpdateOneRequiredWithoutJogadoresNestedInput
    cartas?: CartaUpdateManyWithoutJogadorPartidaNestedInput
  }

  export type JogadorPartidaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    partida_id?: IntFieldUpdateOperationsInput | number
    ordem_jogada?: IntFieldUpdateOperationsInput | number
    pontuacao?: IntFieldUpdateOperationsInput | number
    cartas?: CartaUncheckedUpdateManyWithoutJogadorPartidaNestedInput
  }

  export type JogadorPartidaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    partida_id?: IntFieldUpdateOperationsInput | number
    ordem_jogada?: IntFieldUpdateOperationsInput | number
    pontuacao?: IntFieldUpdateOperationsInput | number
  }

  export type ItemUsuarioUpdateWithoutUsuarioInput = {
    itemLoja?: ItemLojaUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type ItemUsuarioUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    item_loja_id?: IntFieldUpdateOperationsInput | number
  }

  export type ItemUsuarioUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    item_loja_id?: IntFieldUpdateOperationsInput | number
  }

  export type JogadorPartidaCreateManyPartidaInput = {
    id?: number
    usuario_id: number
    ordem_jogada: number
    pontuacao?: number
  }

  export type CartaCreateManyPartidaInput = {
    id?: number
    jogador_partida_id?: number | null
    valor: number
    tipo: string
    quantidade: number
  }

  export type JogadorPartidaUpdateWithoutPartidaInput = {
    ordem_jogada?: IntFieldUpdateOperationsInput | number
    pontuacao?: IntFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneRequiredWithoutJogadorPartidasNestedInput
    cartas?: CartaUpdateManyWithoutJogadorPartidaNestedInput
  }

  export type JogadorPartidaUncheckedUpdateWithoutPartidaInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    ordem_jogada?: IntFieldUpdateOperationsInput | number
    pontuacao?: IntFieldUpdateOperationsInput | number
    cartas?: CartaUncheckedUpdateManyWithoutJogadorPartidaNestedInput
  }

  export type JogadorPartidaUncheckedUpdateManyWithoutPartidaInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    ordem_jogada?: IntFieldUpdateOperationsInput | number
    pontuacao?: IntFieldUpdateOperationsInput | number
  }

  export type CartaUpdateWithoutPartidaInput = {
    valor?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    jogadorPartida?: JogadorPartidaUpdateOneWithoutCartasNestedInput
  }

  export type CartaUncheckedUpdateWithoutPartidaInput = {
    id?: IntFieldUpdateOperationsInput | number
    jogador_partida_id?: NullableIntFieldUpdateOperationsInput | number | null
    valor?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type CartaUncheckedUpdateManyWithoutPartidaInput = {
    id?: IntFieldUpdateOperationsInput | number
    jogador_partida_id?: NullableIntFieldUpdateOperationsInput | number | null
    valor?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type CartaCreateManyJogadorPartidaInput = {
    id?: number
    partida_id: number
    valor: number
    tipo: string
    quantidade: number
  }

  export type CartaUpdateWithoutJogadorPartidaInput = {
    valor?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    partida?: PartidaUpdateOneRequiredWithoutCartasNestedInput
  }

  export type CartaUncheckedUpdateWithoutJogadorPartidaInput = {
    id?: IntFieldUpdateOperationsInput | number
    partida_id?: IntFieldUpdateOperationsInput | number
    valor?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type CartaUncheckedUpdateManyWithoutJogadorPartidaInput = {
    id?: IntFieldUpdateOperationsInput | number
    partida_id?: IntFieldUpdateOperationsInput | number
    valor?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type ItemUsuarioCreateManyItemLojaInput = {
    id?: number
    usuario_id: number
  }

  export type ItemUsuarioUpdateWithoutItemLojaInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutItensNestedInput
  }

  export type ItemUsuarioUncheckedUpdateWithoutItemLojaInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
  }

  export type ItemUsuarioUncheckedUpdateManyWithoutItemLojaInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
  }



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