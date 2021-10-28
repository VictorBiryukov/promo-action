**# Использование API DataSpace через GraphQL

Сервис DataSpace Core предоставляет потребителю возможность вызывать основные функции по протоколу [GraphQL][101]. При этом схема GraphQL строится на основе модели данных предметной области потребителя.

# Элементы схемы

## Примитивные типы

Примитивные типы модели отображаются в следующие скалярные типы схемы:

Примитивный тип модели | Скалярный тип схемы | Формат | Пример значения
---------------------- | ------------------- | ------ | ---------------
`Character` | `Char` | | `"a"`
`String` | `String` | | `"Hello!"`
`Text` | `String` | | `"Text!"`
`Byte` | `Byte` | | `123`
`Short` | `Short` | | `12345`
`Integer` | `Int` | | `1234567890`
`Long` | `Long` | | `1234567890123456789`
`Float` | `_Float4` | | `1234.567`
`Double` | `Float` | | `1234567890.012345`
`BigDecimal` | `BigDecimal` | | `1234567890123456789.0123456789`
`Date` | `_DateTime` | [ISO 8601][102] | `"2020-02-22T11:49:10.123"`
`LocalDate` | `_Date` | [ISO 8601][102] | `"2020-02-22"`
`LocalDateTime` | `_DateTime` | [ISO 8601][102] | `"2020-02-22T11:49:10.123"`
`OffsetDateTime` | `_OffsetDateTime` | [ISO 8601][102] | `"2020-02-22T08:49:10.123Z"`
`Boolean` | `Boolean` | | `true`
`byte[]` | `_ByteArray` | [Base64][103] | `"SGVsbG8h"`

В случае, если в модели используются коллекции примитивов, то для них дополнительно инициализируются типы объектов
`_${наименование скалярного типа без префикса '_'}Collection` со следующими полями:

* `elems: [${наименование скалярного типа}!]!`: элементы коллекции;
* `count: Int!`: количество элементов в коллекции.

---

**Пример: Коллекция символов и коллекция дат.**

```graphql
type _CharCollection {
    elems: [Char!]!
    count: Int!
}

type _DateCollection {
    elems: [_Date!]!
    count: Int!
}
```

## Технические элементы

Для поддержки работы основных функций на схеме введены различные технические элементы:

* директива `mergeReqSpec` (спецификация запроса для слияния) для встроенных фрагментов с аргументом
  `cond: String!`: условие поиска в грамматике [строковых выражений][104];
* интерфейс `_Entity` (сущность) с полем `id: ID!`: идентификатор сущности;
* перечисление `_SortOrder` (порядок сортировки) с двумя допустимыми значениями
  `ASC` (по возрастанию) и `DESC` (по убыванию);
* входной тип `_SortCriterionSpecification` (спецификация критерия сортировки) с полями:
    * `crit: String!`: критерий сортировки в грамматике [строковых выражений][104];
    * `order: _SortOrder! = ASC`: порядок сортировки;
    * `nullsLast: Boolean`: признак следования null-значений в конце;
* тип объекта `_MergedEntitiesCollection` (коллекция слитых сущностей) с полями:
    * `elems: [_Entity!]!`: элементы коллекции;
    * `count: Int!`: количество элементов в коллекции;
* входной тип `_SingleReferenceInput` (входные данные внешней ссылки на агрегат) с полями:
    * `entityId: String!`: идентификатор сущности;
* входной тип `_SingleReferenceSetInput` (входные данные коллекции внешних ссылок на агрегаты) с полями:
    * `add: [_SingleReferenceInput]`: список ссылок для добавления;
    * `remove: [_SingleReferenceInput]`: список ссылок для удаления;
    * `clear: Boolean`: признак очистки коллекции;
* входной тип `_DoubleReferenceInput` (входные данные внешней ссылки на сущность) с полями:
    * `entityId: String!`: идентификатор сущности;
    * `rootEntityId: String!`: идентификатор агрегата;
* входной тип `_DoubleReferenceSetInput` (входные данные коллекции внешних ссылок на сущности) с полями:
    * `add: [_DoubleReferenceInput]`: список ссылок для добавления;
    * `remove: [_DoubleReferenceInput]`: список ссылок для удаления;
    * `clear: Boolean`: признак очистки коллекции;
* входной тип `_StatusInput` (входные данные статуса) с полями:
    * `code: String!`: код статуса;
    * `reason: String`: причина изменения статуса;
* входной тип `_TryLockInput` (входные данные установки прикладной блокировки) с полями:
    * `id: ID!`: идентификатор сущности;
    * `token: String`: токен блокировки;
    * `timeout: Long!`: таймаут блокировки:
    * `reason: String`: причина блокировки;
* входной тип `_UnlockInput` (входные данные снятия прикладной блокировки) с полями:
    * `id: ID!`: идентификатор сущности;
    * `token: String!`: токен блокировки;
* тип объекта `LockOutput` (вывод блокировки) с полями:
    * `token: String`: токен блокировки;
    * `result: Boolean`: результат (успех блокировки);
    * `failReason: String`: причина неудачи;
    * `timeoutEndTime: Long`: время окончания таймаута.

Вот как выглядят их описания на схеме:

```graphql
interface _Entity {
    id: ID!
}

enum _SortOrder {
    ASC
    DESC
}

input _SortCriterionSpecification {
    crit: String!
    order: _SortOrder! = ASC
    nullsLast: Boolean
}

type _MergedEntitiesCollection {
    elems: [_Entity!]!
    count: Int!
}

input _SingleReferenceInput {
    entityId: String!
}

input _SingleReferenceSetInput {
    add: [_SingleReferenceInput]
    remove: [_SingleReferenceInput]
    clear: Boolean
}

input _DoubleReferenceInput {
    entityId: String!
    rootEntityId: String!
}

input _DoubleReferenceSetInput {
    add: [_DoubleReferenceInput]
    remove: [_DoubleReferenceInput]
    clear: Boolean
}

input _StatusInput {
    code: String!
    reason: String
}

input _TryLockInput {
    id: ID!
    token: String
    timeout: Long!
    reason: String
}

input _UnlockInput {
    id: ID!
    token: String!
}

type LockOutput {
    token: String
    result: Boolean
    failReason: String
    timeoutEndTime: Long
}
```

## Типы перечисления

Типы перечислений модели отображаются в типы перечислений схемы `_EN_${наименование типа перечисления модели}` с
переносом допустимых значений без изменений.

---

**Пример: Атрибут.**

```graphql
enum _EN_Attribute {
    SYSTEM
    READ_ONLY
    HIDDEN
}
```

---

В случае, если в модели используются коллекции перечислений, то для них дополнительно инициализируются типы объектов
`_ENC_${наименование типа перечисления модели}` со следующими полями:
* `elems: [${тип объекта перечисления}!]!`: элементы коллекции;
* `count: Int!`: количество элементов в коллекции.

---

**Пример: Коллекция атрибутов.**



```graphql
type _ENC_Attribute {
    elems: [_EN_Attribute!]!
    count: Int!
}
```

---

## Классы модели

В протоколе GraphQL нет поддержки наследования типов объектов. Поэтому, для поддержки наследования классов в модели
на схеме GraphQL, для каждого класса модели выполняется следующее:
* создается интерфейс `${наименование класса модели}` с полями:
    * `id: ID!`: идентификатор сущности;
    * `aggVersion: Long!`: версия агрегата сущности;
    * поля для вычислимых свойств, имеющих вид
      `_get${наименование скалярного типа}(expression: String!): ${наименование скалярного типа}`,
      где `expression`: выражение в терминах грамматики [строковых выражений][104];
    * поля для каждого свойства класса модели включая свойства родительского класса;
* создается тип объекта `_E_${наименование класса модели}`?:
    * реализующий:
        * интерфейс `_Entity`;
        * интерфейс соответствующий классу модели;
        * интерфейсы, соответствующие всем родительским классам модели;
    * с полями:
        * `id: ID!` - идентификатор сущности;
        * `aggVersion: Long!` - версия агрегата сущности;
        * поля для вычислимых свойств, имеющих вид
          `_get${наименование скалярного типа}(expression: String!): ${наименование скалярного типа}`,
          где `expression` - выражение в терминах грамматики [строковых выражений][104];
        * поля для каждого свойства класса модели включая свойства родительского класса;
* создается тип объекта для коллекции сущностей `_EC_${наименование класса модели}` с полями:
    * `elems: [${интерфейс класса модели}!]!` - элементы коллекции;
    * `count: Int!` - количество элементов в коллекции;
* если имеются внешние ссылки на данный класс модели, то создается тип объекта для внешней ссылки
  `_G_${наименование класса модели}Reference` с полями:
    * `entityId: String` - идентификатор сущности;
    * `rootEntityId: String` - идентификатор агрегата сущности
      (есть только в случае, если класс модели не является агрегатом);
    * `entity: ${наименование класса модели}` - ссылка на сущность для запроса данных в текущей шарде;
* создается тип объекта `_SE_${наименование класса модели}` с полями:
    * `id: ID!` - идентификатор сущности;
    * `aggVersion: Long!` - версия агрегата сущности;
    * поля для вычислимых свойств, имеющих вид
      `_get${наименование скалярного типа}(expression: String!): ${наименование скалярного типа}`,
      где `expression` - выражение в терминах грамматики [строковых выражений][104];
    * поля для примитивных свойства класса модели включая свойства родительского класса;
* создается тип объекта для коллекции наборов свойств `_SEC_${наименование класса модели}` со следующими полями:
    * `elems: [_SE_${наименование класса модели}!]!` - элементы коллекции;
    * `count: Int!` - количество элементов в коллекции.

В зависимости от типа свойства, соответствующее поле имеет определенный тип и аргументы:
* примитив/перечисление - соответствующий скалярный тип/тип перечисления и не имеет аргументов;
* коллекция примитивов/перечислений - соответствующий примитиву/перечислению тип объекта коллекции и аргументы:
    * `cond: String` - условие фильтрации в грамматике [строковых выражений][104];
    * `limit: Int` - ограничение на количество элементов;
    * `offset: Int` - смещение;
    * `sort: [_SortCriterionSpecification!]` - сортировка;
* ссылка - соответствующий классу модели интерфейс и аргументы:
    * `alias: String` - псевдоним;
* коллекция ссылок - соответствующий классу модели тип объекта коллекции и аргументы:
    * `elemAlias: String` - псевдоним элемента;
    * `cond: String` - условие фильтрации в грамматике [строковых выражений][104];
    * `limit: Int` - ограничение на количество элементов;
    * `offset: Int` - смещение;
    * `sort: [_SortCriterionSpecification!]` - сортировка.

Данные типы преимущественно используются для запроса данных у сервиса.

Помимо этого, для поддержки мутаций для каждого класса модели выполняется:
* создается входной тип для создания сущности `_Create${наименование класса модели}Input` с полями:
    * поля для каждого свойства класса модели включая свойства родительского класса за исключением свойств,
      являющихся mappedBy-ссылками/коллекциями ссылок;
    * поля для каждого наблюдателя статуса класса модели `statusFor${наименование наблюдателя}: _StatusInput`
* создается входной тип для обновления сущности `_Update${наименование класса модели}Input` с полями:
    * `id: ID!` - идентификатор сущности.
    * поля для каждого свойства класса модели включая свойства родительского класса за исключением:
        * свойств, являющихся mappedBy-ссылками/коллекциями ссылок;
        * свойств, имеющих признак `parent=true`.

В зависимости от типа свойства соответствующее поле имеет определенный тип:
* примитив/перечисление - соответствующий скалярный тип/тип перечисления;
* коллекция примитивов/перечислений - `[${наименование соответствующего скалярного типа/типа перечисления}]`;
* ссылка - `ID`;
* внешняя ссылка на агрегат - `_SingleReferenceInput`;
* коллекция внешних ссылок на агрегаты - `[_SingleReferenceSetInput]`;
* внешняя ссылка на сущность- `_DoubleReferenceInput`;
* коллекция внешних ссылок на агрегаты - `[_DoubleReferenceSetInput]`.

---

**Пример: Элементы для поддержки работы с продуктами и депозитами.**


```graphql
interface Product {
    id: ID!
    aggVersion: Long!
    _getChar(expression: String!): Char
    _getString(expression: String!): String
    _getByte(expression: String!): Byte
    _getShort(expression: String!): Short
    _getInt(expression: String!): Int
    _getLong(expression: String!): Long
    _getFloat(expression: String!): _Float4
    _getDouble(expression: String!): Float
    _getBigDecimal(expression: String!): BigDecimal
    _getDate(expression: String!): _Date
    _getDateTime(expression: String!): _DateTime
    _getOffsetDateTime(expression: String!): _OffsetDateTime
    _getBoolean(expression: String!): Boolean
    _getByteArray(expression: String!): _ByteArray
    type: String!
    lastChangeDate: _DateTime
    chgCnt: Long
    code: String!
    states(cond: String, limit: Int, offset: Int, sort: [_SortCriterionSpecification!]): _StringCollection!
    document(alias: String): Document
    services(cond: String, elemAlias: String, limit: Int, offset: Int, sort: [_SortCriterionSpecification!]): _EC_Service!
    contract: _G_ContractReference!
    relatedProducts(cond: String, elemAlias: String, limit: Int, offset: Int, sort: [_SortCriterionSpecification!]): _EC_ProductProductElementReference!
    statusForPlatform(alias: String): Status
    statusForService(alias: String): Status
}

type _E_Product implements Product & _Entity {
    id: ID!
    aggVersion: Long!
    _getChar(expression: String!): Char
    _getString(expression: String!): String
    _getByte(expression: String!): Byte
    _getShort(expression: String!): Short
    _getInt(expression: String!): Int
    _getLong(expression: String!): Long
    _getFloat(expression: String!): _Float4
    _getDouble(expression: String!): Float
    _getBigDecimal(expression: String!): BigDecimal
    _getDate(expression: String!): _Date
    _getDateTime(expression: String!): _DateTime
    _getOffsetDateTime(expression: String!): _OffsetDateTime
    _getBoolean(expression: String!): Boolean
    _getByteArray(expression: String!): _ByteArray
    type: String!
    lastChangeDate: _DateTime
    chgCnt: Long
    code: String!
    states(cond: String, limit: Int, offset: Int, sort: [_SortCriterionSpecification!]): _StringCollection!
    document(alias: String): Document
    services(cond: String, elemAlias: String, limit: Int, offset: Int, sort: [_SortCriterionSpecification!]): _EC_Service!
    contract: _G_ContractReference!
    relatedProducts(cond: String, elemAlias: String, limit: Int, offset: Int, sort: [_SortCriterionSpecification!]): _EC_ProductProductElementReference!
    statusForPlatform(alias: String): Status
    statusForService(alias: String): Status
}

type _EC_Product {
    elems: [Product!]!
    count: Int!
}

type _G_ProductReference {
    entityId: String
    entity: Product
}

type _SE_Product {
    id: ID!
    aggVersion: Long!
    _getChar(expression: String!): Char
    _getString(expression: String!): String
    _getByte(expression: String!): Byte
    _getShort(expression: String!): Short
    _getInt(expression: String!): Int
    _getLong(expression: String!): Long
    _getFloat(expression: String!): _Float4
    _getDouble(expression: String!): Float
    _getBigDecimal(expression: String!): BigDecimal
    _getDate(expression: String!): _Date
    _getDateTime(expression: String!): _DateTime
    _getOffsetDateTime(expression: String!): _OffsetDateTime
    _getBoolean(expression: String!): Boolean
    _getByteArray(expression: String!): _ByteArray
    type: String!
    lastChangeDate: _DateTime
    chgCnt: Long
    code: String!
}

type _SEC_Product {
    elems: [_SE_Product!]!
    count: Int!
}

input _CreateProductInput {
    code: String!
    states: [String]
    contract: _SingleReferenceInput
    relatedProducts: _SingleReferenceSetInput
    statusForPlatform: _StatusInput
    statusForService: _StatusInput
}

input _UpdateProductInput {
    id: ID!
    code: String
    states: [String]
    contract: _SingleReferenceInput
    relatedProducts: _SingleReferenceSetInput
    statusForPlatform: _StatusInput
    statusForService: _StatusInput
}

interface Deposit {
    id: ID!
    aggVersion: Long!
    _getChar(expression: String!): Char
    _getString(expression: String!): String
    _getByte(expression: String!): Byte
    _getShort(expression: String!): Short
    _getInt(expression: String!): Int
    _getLong(expression: String!): Long
    _getFloat(expression: String!): _Float4
    _getDouble(expression: String!): Float
    _getBigDecimal(expression: String!): BigDecimal
    _getDate(expression: String!): _Date
    _getDateTime(expression: String!): _DateTime
    _getOffsetDateTime(expression: String!): _OffsetDateTime
    _getBoolean(expression: String!): Boolean
    _getByteArray(expression: String!): _ByteArray
    type: String!
    lastChangeDate: _DateTime
    chgCnt: Long
    code: String!
    rate: BigDecimal
    states(cond: String, limit: Int, offset: Int, sort: [_SortCriterionSpecification!]): _StringCollection!
    document(alias: String): Document
    services(cond: String, elemAlias: String, limit: Int, offset: Int, sort: [_SortCriterionSpecification!]): _EC_Service!
    contract: _G_ContractReference!
    relatedProducts(cond: String, elemAlias: String, limit: Int, offset: Int, sort: [_SortCriterionSpecification!]): _EC_ProductProductElementReference!
    statusForPlatform(alias: String): Status
    statusForService(alias: String): Status
}

type _E_Deposit implements Deposit & Product & _Entity {
    id: ID!
    aggVersion: Long!
    _getChar(expression: String!): Char
    _getString(expression: String!): String
    _getByte(expression: String!): Byte
    _getShort(expression: String!): Short
    _getInt(expression: String!): Int
    _getLong(expression: String!): Long
    _getFloat(expression: String!): _Float4
    _getDouble(expression: String!): Float
    _getBigDecimal(expression: String!): BigDecimal
    _getDate(expression: String!): _Date
    _getDateTime(expression: String!): _DateTime
    _getOffsetDateTime(expression: String!): _OffsetDateTime
    _getBoolean(expression: String!): Boolean
    _getByteArray(expression: String!): _ByteArray
    type: String!
    lastChangeDate: _DateTime
    chgCnt: Long
    code: String!
    rate: BigDecimal
    states(cond: String, limit: Int, offset: Int, sort: [_SortCriterionSpecification!]): _StringCollection!
    document(alias: String): Document
    services(cond: String, elemAlias: String, limit: Int, offset: Int, sort: [_SortCriterionSpecification!]): _EC_Service!
    contract: _G_ContractReference!
    relatedProducts(cond: String, elemAlias: String, limit: Int, offset: Int, sort: [_SortCriterionSpecification!]): _EC_ProductProductElementReference!
    statusForPlatform(alias: String): Status
    statusForService(alias: String): Status
}

type _EC_Deposit {
    elems: [Deposit!]!
    count: Int!
}

type _SE_Deposit {
    id: ID!
    aggVersion: Long!
    _getChar(expression: String!): Char
    _getString(expression: String!): String
    _getByte(expression: String!): Byte
    _getShort(expression: String!): Short
    _getInt(expression: String!): Int
    _getLong(expression: String!): Long
    _getFloat(expression: String!): _Float4
    _getDouble(expression: String!): Float
    _getBigDecimal(expression: String!): BigDecimal
    _getDate(expression: String!): _Date
    _getDateTime(expression: String!): _DateTime
    _getOffsetDateTime(expression: String!): _OffsetDateTime
    _getBoolean(expression: String!): Boolean
    _getByteArray(expression: String!): _ByteArray
    type: String!
    lastChangeDate: _DateTime
    chgCnt: Long
    code: String!
    rate: BigDecimal
}

type _SEC_Deposit {
    elems: [_SE_Deposit!]!
    count: Int!
}

input _CreateDepositInput {
    code: String!
    rate: BigDecimal
    states: [String]
    contract: _SingleReferenceInput
    relatedProducts: _SingleReferenceSetInput
    statusForPlatform: _StatusInput
    statusForService: _StatusInput
}

input _UpdateDepositInput {
    id: ID!
    code: String
    rate: BigDecimal
    states: [String]
    contract: _SingleReferenceInput
    relatedProducts: _SingleReferenceSetInput
    statusForPlatform: _StatusInput
    statusForService: _StatusInput
}
```

---

## Статусы сущностей

Если для какой-либо сущности описаны ее наблюдатели, статусы и переходы между ними, то в модели неявно создаются:
* класс `Stakeholder` (наблюдатель) со свойствами:
    * `code: String` - код наблюдателя;
    * `name: String` - наименование наблюдателя;
* класс `Status` (статус) со свойствами:
    * `code: String` - код статуса;
    * `name: String` - наименование статуса;
    * `description: String` - описание статуса;
    * `statusType: String` - тип статуса;
    * `initial: Boolean` - признак является ли статус начальным;
    * `stakeholder: Stateholder` - ссылка на наблюдателя;
* класс `StatusGraph` (переход между статусами) со свойствами:
    * `code: String` - код перехода;
    * `name: String` - наименование перехода;
    * `statusFrom: Status` - статус, из которого происходит переход;
    * `statusTo: Status` - статус, в которой происходит переход;

Для данных классов генерируются те же интерфейсы и типы объектов, как и для обычных классов модели за исключением:
* типа объекта для внешней ссылки;
* входных типов для создания/обновления

Вот как выглядят их описания на схеме:

```graphql
interface Stakeholder {
    id: ID!
    aggVersion: Long!
    _getChar(expression: String!): Char
    _getString(expression: String!): String
    _getByte(expression: String!): Byte
    _getShort(expression: String!): Short
    _getInt(expression: String!): Int
    _getLong(expression: String!): Long
    _getFloat(expression: String!): _Float4
    _getDouble(expression: String!): Float
    _getBigDecimal(expression: String!): BigDecimal
    _getDate(expression: String!): _Date
    _getDateTime(expression: String!): _DateTime
    _getOffsetDateTime(expression: String!): _OffsetDateTime
    _getBoolean(expression: String!): Boolean
    _getByteArray(expression: String!): _ByteArray
    lastChangeDate: _DateTime
    chgCnt: Long
    code: String
    name: String
}

type _E_Stakeholder implements _Entity & Stakeholder {
    id: ID!
    aggVersion: Long!
    _getChar(expression: String!): Char
    _getString(expression: String!): String
    _getByte(expression: String!): Byte
    _getShort(expression: String!): Short
    _getInt(expression: String!): Int
    _getLong(expression: String!): Long
    _getFloat(expression: String!): _Float4
    _getDouble(expression: String!): Float
    _getBigDecimal(expression: String!): BigDecimal
    _getDate(expression: String!): _Date
    _getDateTime(expression: String!): _DateTime
    _getOffsetDateTime(expression: String!): _OffsetDateTime
    _getBoolean(expression: String!): Boolean
    _getByteArray(expression: String!): _ByteArray
    lastChangeDate: _DateTime
    chgCnt: Long
    code: String
    name: String
}

type _EC_Stakeholder {
    elems: [Stakeholder!]!
    count: Int!
}

interface Status {
    id: ID!
    aggVersion: Long!
    _getChar(expression: String!): Char
    _getString(expression: String!): String
    _getByte(expression: String!): Byte
    _getShort(expression: String!): Short
    _getInt(expression: String!): Int
    _getLong(expression: String!): Long
    _getFloat(expression: String!): _Float4
    _getDouble(expression: String!): Float
    _getBigDecimal(expression: String!): BigDecimal
    _getDate(expression: String!): _Date
    _getDateTime(expression: String!): _DateTime
    _getOffsetDateTime(expression: String!): _OffsetDateTime
    _getBoolean(expression: String!): Boolean
    _getByteArray(expression: String!): _ByteArray
    lastChangeDate: _DateTime
    chgCnt: Long
    code: String
    name: String
    description: String
    statusType: String
    initial: Boolean
    stakeholder(alias: String): Stakeholder
}

type _E_Status implements _Entity & Status {
    id: ID!
    aggVersion: Long!
    _getChar(expression: String!): Char
    _getString(expression: String!): String
    _getByte(expression: String!): Byte
    _getShort(expression: String!): Short
    _getInt(expression: String!): Int
    _getLong(expression: String!): Long
    _getFloat(expression: String!): _Float4
    _getDouble(expression: String!): Float
    _getBigDecimal(expression: String!): BigDecimal
    _getDate(expression: String!): _Date
    _getDateTime(expression: String!): _DateTime
    _getOffsetDateTime(expression: String!): _OffsetDateTime
    _getBoolean(expression: String!): Boolean
    _getByteArray(expression: String!): _ByteArray
    lastChangeDate: _DateTime
    chgCnt: Long
    code: String
    name: String
    description: String
    statusType: String
    initial: Boolean
    stakeholder(alias: String): Stakeholder
}

type _EC_Status {
    elems: [Status!]!
    count: Int!
}
```

## Тип объекта _Packet

Специализированный тип объекта `_Packet` используется для описания пакета.

Поля пакета делятся на две группы. К первой группе относятся поля описывающие результат выполнения уровня пакета:
* `aggregateVersion: Long` содержит версию агрегата, для которого выполнен пакет;
* `isIdempotenceResponse: Boolean` содержит признак идемпотентного вызова пакета.

Вторая группа полей описывает операции с объектами данных допустимых к исполнению в пакете.
Состав операций основывается на характеристиках пользовательских классов модели данных.
В общем случае для каждого класса модели формируются 4 поля:
* `create${наименование класса модели}(input: _Create${наименование класса модели}Input!): ${наименование класса модели}` -
  определяет команду создания сущности;
* `get${наименование класса модели}(id: ID!): ${наименование класса модели}` - определяет команду чтения сущности;
* `update${наименование класса модели}(input: _Update${наименование класса модели}Input!): ${наименование класса модели}` -
  определяет команду изменения сущности;
* `delete${наименование класса модели}(id: ID!): String` - определяет команду удаления сущности.

Для класс модели с указанной возможностью применения прикладной блокировки и всех его наследников дополнительно
формируются две операции:
* `tryLock${наименование класса модели}(input: _TryLockInput!): LockOutput` - определяет команду блокировки сущности;
* `unlock${наименование класса модели}(input: _UnlockInput!): LockOutput` - определяет команду разблокировки сущности.

---

**Пример: Поля пакета для работы с продуктом.**



```graphql
type _Packet {
    aggregateVersion: Long
    isIdempotenceResponse: Boolean
    # ...
    createProduct(input: _CreateProductInput!): Product
    updateProduct(input: _UpdateProductInput!): Product  
    deleteProduct(id: ID!): String
    getProduct(id: ID!): Product
    tryLockProduct(input: _TryLockInput!): _LockOutput
    unlockProduct(input: _UnlockInput!): _LockOutput
    # ...
}
```

---

## Запрос

Запрос в схеме представлен объектом с наименованием `_Query`. Объект включает в себя следующие поля:
* `merge(limit: Int, offset: Int, sort: [_SortCriterionSpecification!]): _MergedEntitiesCollection!` - для слияния поисковых запросов, где:
    * `limit` - ограничение на количество элементов;
    * `offset` - смещение;
    * `sort` - сортировка;
* для каждого класса модели содержит поле
  `search${наименование класса модели}(cond: String, limit: Int, offset: Int, sort: [_SortCriterionSpecification!]) : _EC_${наименование класса модели}!` - для поиска сущности соответствующего класса, где:
    * `cond` - условие фильтрации в грамматике [строковых выражений][104];
    * `limit`- ограничение на количество элементов;
    * `offset` - смещение;
    * `sort` - сортировка;
* для каждого класса модели содержит поле
  `selectionBy${наименование класса модели}(cond: String, distinct: Boolean, limit: Int, offset: Int, sort: [_SortCriterionSpecification!]): _SEC_${наименование класса модели}!` -
  для выборки свойств на основе поиска сущности одного типа, где:
    * `cond` - условие фильтрации в грамматике [строковых выражений][104];
    * `limit`- ограничение на количество элементов;
    * `offset` - смещение;
    * `sort` - сортировка.

---

**Пример **

Поля запроса для работы с продуктом.

```graphql
type _Query {
    merge(limit: Int, offset: Int, sort: [_SortCriterionSpecification!]): _MergedEntitiesCollection!
    # ...
    searchProduct(cond: String, limit: Int, offset: Int, sort: [_SortCriterionSpecification!]): _EC_Product!
    selectionByProduct(cond: String, distinct: Boolean, limit: Int, offset: Int, sort: [_SortCriterionSpecification!]): _SEC_Product!
    # ...
}
```

---

## Мутация

Мутация в схеме представлена объектом с наименованием `_Mutation`.
Данный объект содержит единственное поле `packet(aggregateVersion: Long, idempotencePacketId: String): _Packet`, где:
* `aggregateVersion` - версия агрегата для оптимистической блокировки. Если аргумент не указан, то проверка выполняться
  не будет. Версия агрегата после выполнения пакета может быть получена через запрос поля `aggregateVersion`
  типа объекта `_Packet`;
* `idempotencePacketId` - ключ идемпотентности пакета. Если аргумент не указан, то пакет не будет проверяться на
  идемпотентность.

Использование поле в мутации означает выполнение одной транзакции в базе данных. Состав операций с объектами
определяется составом и порядком полей `_Packet`.

Тип объекта `_Mutation` в схеме:

```graphql
type _Mutation {
    packet(aggregateVersion: Long, idempotencePacketId: String): _Packet
}
```


# Пример итоговой схемы

Пример схемы GraphQL можно увидеть во вложенном файле [graphql-schema-big](resources/graphql-schema-big.json).

# Виды запросов

## Поиск

Для поиска сущностей определенного типа, необходимо запрашивать search-поле, соответствующее классу модели.

Пример: **поиск продукта (`Product`) с идентификатором, равным 1; с запросом кода (`code`)**.

```
{
  searchProduct(cond: "it.$id == '1'") {
    elems {
      code
    }
  }
}
```

С помощью аргументов `limit`, `offset` можно управлять настройками пагинации. С помощью аргумента `sort` можно задавать настройки сортировки. А запросив поле `count`, можно получить общее количество элементов, удовлетворяющих условию поиска.

Пример: поиск продуктов (Product) с кодом (code), соответствующим шаблону `product%`; с запросом идентификатора и кода; отсортированных по коду по возрастанию, а затем по идентификатору по убыванию; с отображением только 10 элементов, пропуская первые 20; с запросом общего количества продуктов, удовлетворяющих условию поиска.

```
{
  searchProduct(cond: "it.code $like 'product%'", sort: [{crit: "it.code"}, {crit: "it.$id", order: DESC}], limit: 10, offset: 20) {
    elems {
      id
      code
    }
    count
  }
}
```

С помощью аргументов `cond`, `limit`, `offset`, `sort` для свойств-коллекций примитивов/ссылок можно также управлять настройками фильтрации, пагинации и сортировки. А запросив поле count - получить общее количество элементов, удовлетворяющих условию фильтрации.

Пример: поиск продукта (`Product`) с идентификатором, равным `1`; с запросом состояний (`states`) ( со значением, соответствующим шаблону state%; отсортированных по значению по возрастанию; с отображением только 10 элементов, пропуская первые 20; с запросом общего количества состояний, удовлетворяющих условию фильтрации); с запросом сервисов (`services`) (с кодом (`code`) соответствующим шаблону service%; с запросом идентификатора и кода; отсортированных по коду по возрастанию, а затем по идентификатору по убыванию; с отображением только 10 элементов, пропуская первые 20; с запросом общего количества продуктов, удовлетворяющих условию фильтрации).

```
{
  searchProduct(cond: "it.$id == '1'") {
    elems {
      states(cond: "it $like 'state%'", sort: {crit: "it"}, limit: 10, offset: 20) {
        elems
        count
      }
      services(cond: "it.code $like 'service%'", sort: [{crit: "it.code"}, {crit: "it.$id", order: DESC}], limit: 10, offset: 20) {
        elems {
          id
          code
        }
        count
      }
    }
  }
}
```

С помощью аргументов `alias` для свойств-ссылок и `elemAlias` для свойств-коллекций ссылок можно задавать псевдоним для ссылки/элемента коллекции ссылок, который можно использовать для фильтрации вложенных коллекций.

Пример: поиск продукта (`Product`) с идентификатором, равным 1; с запросом документа (`document`) ( с запросом состояний `states` ( со значением, соответствующим шаблону код документа (`code`) + `state%`)); с запросом сервисов (`services`) ( с запросом состояний `states` ( со значением, соответствующим шаблону код сервиса (`code`) + `state%`)).

```
{
  searchProduct(cond: "it.$id == '1'") {
    elems {
      document(alias: "document") {
        states(cond: "it $like @document.code + 'state%'") {
          elems
        }
      }
      services(elemAlias: "service") {
        elems {
          states(cond: "it $like @service.code + 'state%'") {
            elems
          }
        }
      }
    }
  }
}
```

С помощью фрагментов по интерфейсам можно запрашивать детализацию типа, т.е. дозапрашивать дополнительные поля для классов наследников.

Пример: поиск продуктов (Product) с кодом (code), соответствующим шаблону product%; с запросом идентификатора и кода; с запросом даты начала действия (beginDate) в случае, если продукт является депозитом (Deposit).

```
{
  searchProduct(cond: "it.code $like 'product%'") {
    elems {
      id
      code
      ... on Deposit {
        beginDate
      }
    }
  }
}
```

## Слияние запросов

Для слияния поисковых запросов по несвязанным наследованием типам, необходимо запрашивать merge-поле. Затем с помощью встроенных фрагментов по интерфесам, соответствующим классам модели, запросы по которым нужно слить; и директивы mergeReqSpec необходимо оформить поисковые запросы, которые нужно слить, по следующим правилам:

* Для поисковых запросов можно задать только условие поиска в аргументе cond директивы mergeReqSpec.
* В аргументах limit и offset поля можно задать настройки пагинации, действующие на все слияние.
* В аргементе sort поля можно задать настройки сортировки, действующие на все слияние с единственным ограничением: . критерии сортировки должны быть применимы к каждому поисковому запросу по отдельности.
* С помощью запроса поля count можно получить общее количество элементов.

> Пример:
>
> Слияние запросов (поиск продуктов (Product) с кодом (code), соответствующим шаблону product%; с запросом идентификатора и кода; с запросом даты начала действия (beginDate) в случае, если продукт является депозитом (Deposit)), (поиск сервисов (Service) с кодом (code), соответствующим шаблону service%; с запросом идентификатора и состояний (states)), (поиск документа (Document) с идентификатором в диапозоне [1, 2, 3]; с запросом продукта (product) ( с запросом кода (code))); с сортировкой по коду по возрастанию, а затем по идентификатору по убыванию; с отображением только 10 элементов, пропуская первые 20; с запросом общего количества продуктов, удовлетворяющих условию поиска.

```
{
  merge(sort: [{crit: "it.code"}, {crit: "it.$id", order: DESC}], limit: 10, offset: 20) {
    elems {
      ... on Product @mergeReqSpec(cond: "it.code $like 'product%'") {
        id
        code
        ... on Deposit {
          beginDate
        }
      }
      ... on Service @mergeReqSpec(cond: "it.code $like 'service%'") {
        id
        states {
          elems
        }
      }
      ... on Document @mergeReqSpec(cond: "it.$id $in ['1', '2', '3']") {
        product {
          code
        }
      }
    }
    count
  }
}
```

## Пакет

Для манипулирование данными используется пакет операций, которые выполняются в одной транзакции. В пакете могут выполняться операции по нескольким сущностям модели данных, но все они должны принадлежать одному экземпляру агрегата. Последовательность выполнения операций над объектами определяется порядком определения полей типа объекта `_Packet`. Чтение состояния сущностей в пакете будут возвращать промежуточное состояние в ходе выполнения транзакции.

Пример: **создание продукта (`Product`)**

Запрос:

```
mutation {
  packet {
    createProduct(input: {
      code: "product1"
    }) {
      id
      code
    }
  }
}
```

Результат:

```
{
  "data": {
    "packet": {
      "createProduct": {
        "id": "6934251168182108161",
        "code": "product1"
      }
    }
  }
}
```

В пакете могут быть выполнены операции над несколькими сущностями одного агрегата. Если в классе модели используется автоматическое формирование идентификатора, то для указания ссылки на создаваемый в пакете объект используется специализированный синтаксис описания идентификатора `ref:{псевдоним/наименование поля создания объекта}`.

Пример: **создание продукта (Product) и связанного с ним сервиса (Service)**.

Запрос:

```
mutation {
  packet {
    createProduct(input: {
      code: "product1"
    }) {
      id
    }
    createService(input: {
      product: "ref:createProduct"
      code: "service1"
    }) {
      id
      product {
        id
        code
      }
    }
  }
}
```

Результат:

```
{
  "data": {
    "packet": {
      "createProduct": {
        "id": "6934253088032489473"
      },
      "createService": {
        "id": "6934253088032489474",
        "product": {
          "id": "6934253088032489473",
          "code": "product1"
        }
      }
    }
  }
}
```

Пример: **создание продукта (Product) и связанного с ним сервиса (Service) (с использованием псевдонима)**.

```
mutation {
  packet {
    product1: createProduct(input: {
      code: "product1"
    }) {
      id
    }
    createService(input: {
      product: "ref:product1"
      code: "service1"
    }) {
      id
      product {
        id
        code
      }
    }
  }
}
```

Результат:

```
{
  "data": {
    "packet": {
      "product1": {
        "id": "6934253088032489473"
      },
      "createService": {
        "id": "6934253088032489474",
        "product": {
          "id": "6934253088032489473",
          "code": "product1"
        }
      }
    }
  }
}
```

Пример: **создание и обновление продукта (Product) с чтением промежуточных состаний**.

```
mutation {
  packet {
    product1: createProduct(input: {code: "product1"}) {
      id
      code
    }
    product1_afterCreate: getProduct(id: "ref:product1") {
      id
      code
    }
    product1_updated: updateProduct(input: {id: "ref:product1", code: "product1_new"}) {
      id
      code
    }
    product1_afterUpdate: getProduct(id: "ref:product1") {
      id
      code
    }
  }
}
```

Результат:

```
{
  "data": {
    "packet": {
      "product1": {
        "id": "6934262438176292865",
        "code": "product1"
      },
      "product1_afterCreate": {
        "id": "6934262438176292865",
        "code": "product1"
      },
      "product1_updated": {
        "id": "6934262438176292865",
        "code": "product1_new"
      },
      "product1_afterUpdate": {
        "id": "6934262438176292865",
        "code": "product1_new"
      }
    }
  }
}
```

В одной операции мутации может быть использовано несколько пакетов, но каждый пакет является самостоятельной транзакционной единицей.

Пример: **создание двух независимых продуктов (Product)**.

```
mutation {
  packet1: packet {
    createProduct(input:{ code: "product1" }) {
      id
    }
  }
 
  packet2: packet {
    createProduct(input:{ code: "product2" }) {
      id
    }
  }
}
```

Результат:

```
{
  "data": {
    "packet1": {
      "createProduct": {
        "id": "6934264250652491777"
      }
    },
    "packet2": {
      "createProduct": {
        "id": "6934264250652491778"
      }
    }
  }
}
```

Для обеспечения идемпотентного вызова пакета необходимо указать атрибут `idempotencePacketId` поля `packet`. Опциональное поле `isIdempotenceResponse` определяет состояние выполнения пакета.

Пример: **Создание продукта (Product) в идемпотентном вызове с проверкой состояния выполнения пакета**.

```
mutation {
  packet(idempotencePacketId: "1") {
    isIdempotenceResponse
 
    createProduct(input: {code: "product1"}) {
      id
    }
  }
}
```

Результат:

```
{
  "data": {
    "packet": {
      "isIdempotenceResponse": false,
      "createProduct": {
        "id": "6934265174070460417"
      }
    }
  }
}
```

Значение `isIdempotenceResponse`, равное `False`, указывает на то, что операция была фактически выполнена и создан новый объект. При повторном вызове этого кода результат будет следующий:

```
{
  "data": {
    "packet": {
      "isIdempotenceResponse": true,
      "createProduct": {
        "id": "6934265174070460417"
      }
    }
  }
}
```

Значение `isIdempotenceResponse`, равное `True`, указывает на то, что операция не была выполнена и получен ранее созданная сущность. Совпадение идентификаторов подтверждают это. Важно отметить, что идемпотентными являются операции создания и изменения сущности, но чтение данных выполняется всегда.

Пример: **создание продукта (Product) и сервиса (Service) с последующем удалением сервиса в идемпотентном вызове**.

```
mutation {
  packet(idempotencePacketId: "1") {
    createProduct(input: {code: "product1"}) {
      id
    }
    createService(input: {product: "ref:createProduct", code: "service1"}) {
      id
    }
    deleteService(id: "ref:createService")
  }
}
```

Результат:

```
{
  "data": {
    "packet": {
      "createProduct": {
        "id": "6934272192047022081"
      },
      "createService": {
        "id": "6934272192047022082"
      },
      "deleteService": "success"
    }
  }
}
```

При повторном выполнении этого кода возникнет следующая ошибка:

```
{
  "errors": [
    {
      "message": "Ошибка обработки команды id = 'createService#GET4GQL', name = 'get': Не найден экземпляр типа 'Service' с идентификатором '6934272192047022082'",
      "locations": [],
      "extensions": {
        "classification": "OBJECT_NOT_FOUND"
      }
    }
  ],
  "data": {
    "packet": null
  }
}
```

Для демонстрации работы оптимистической блокировки в пакете на первом шаге создается продукт (`Product`) с запросом текущей версии агрегата:

```
mutation {
  packet {
    aggregateVersion
     
    createProduct(input: {code: "product1"}) {
      id
    }
  }
}
```

Результат:

```
{
  "data": {
    "packet": {
      "aggregateVersion": 1,
      "createProduct": {
        "id": "6934266763208359937"
      }
    }
  }
}
```

На втором шаге выполняется обновление объекта с указанием текущей версии и запросом новой версии:

```
mutation {
  packet(aggregateVersion: 1) {
    aggregateVersion
     
    updateProduct(input: {id: "6934266763208359937", code: "product1_new"}) {
      id
    }
  }
}
```

Результат:

```
{
  "data": {
    "packet": {
      "aggregateVersion": 2,
      "updateProduct": {
        "id": "6934266763208359937"
      }
    }
  }
}
```

Если повторить мутацию второго шага, то результат выполнения будет содержать ошибку:

```
{
  "errors": [
    {
      "message": "Version 1 required but found 2 for object 6934266763208359937#local.coreaslib.sdk.jpa.Product",
      "locations": [],
      "extensions": {
        "classification": "AGGREGATE_VERSION_EXCEPTION"
      }
    }
  ],
  "data": {
    "packet": null
  }
}
```

[101]: https://graphql.org "GraphQL"
[102]: https://ru.wikipedia.org/wiki/ISO_8601 "ISO 8601"
[103]: https://ru.wikipedia.org/wiki/Base64 "Base64"
[104]: ../../string-expressions/md/index.md "Строковые выражения"**

