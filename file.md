Roadmap Golang

## 🧭 Mục lục

*   **Phần I – Basic**
    *   [1\. Kiểu dữ liệu cơ bản và khai báo biến](#1-kiểu-dữ-liệu-cơ-bản-và-khai-báo-biến)
    *   [2\. Cấu trúc điều kiện và vòng lặp](#2-cấu-trúc-điều-kiện-và-vòng-lặp)
    *   [3\. Hàm, Closure, và Hàm Variadic](#3-hàm-closure-và-hàm-variadic)
    *   [4\. Slice, Map, Array và Type Casting](#4-slice-map-array-và-type-casting)
    *   [5\. Struct, Method, và Embedded Struct](#5-struct-method-và-embedded-struct)
    *   [6\. Interface và Type Assertion](#6-interface-và-type-assertion)
    *   [7\. Module, Package và go mod](#7-module-package-và-go-mod)
*   **Phần II – Advance**
    *   [8\. Goroutine và Channel](#8-goroutine-và-channel)
    *   [9\. Đồng bộ hoá với Mutex, RWMutex, WaitGroup](#9-đồng-bộ-hoá-với-mutex-rwmutex-waitgroup)
    *   [10\. Context và Lifecycle Control](#10-context-và-lifecycle-control)
    *   [11\. Error Handling và Panic/Recover](#11-error-handling-và-panicrecover)
    *   [12\. Logging nâng cao với logrus, zap, zerolog](#12-logging-nâng-cao-với-logrus-zap-zerolog)
    *   [13\. Testing, Benchmark, Table-Driven Test](#13-testing-benchmark-table-driven-test)
    *   [14\. Debugging, Race Condition, Deadlock](#14-debugging-race-condition-deadlock)
*   **Phần III – System**
    *   [15\. Memory Management & Escape Analysis](#15-memory-management--escape-analysis)
    *   [16\. Garbage Collection và Runtime Scheduler](#16-garbage-collection-và-runtime-scheduler)
    *   [17\. Build System và Cross Compilation](#17-build-system-và-cross-compilation)
    *   [18\. Generics: Type Parameter và Constraint](#18-generics-type-parameter-và-constraint)
    *   [19\. API & Middleware: REST, gRPC, Interceptor](#19-api--middleware-rest-grpc-interceptor)
    *   [20\. Error Wrapping, Stacktrace, và Structured Logging](#20-error-wrapping-stacktrace-và-structured-logging)
    *   [21\. Staticcheck, GolangCI-Lint, go vet, go fmt](#21-staticcheck-golangci-lint-go-vet-go-fmt)
    *   [22\. Design Patterns trong Go](#22-design-patterns-trong-go)
    *   [23\. System Design: Worker Pool, Fan-in/out, Pipeline](#23-system-design-worker-pool-fan-inout-pipeline)
    *   [24\. Secure Coding và CI/CD Workflow](#24-secure-coding-và-cicd-workflow)
    *   [25\. Distributed Systems: Redis, Kafka, EnvoyProxy](#25-distributed-systems-redis-kafka-envoyproxy)
*   **Phần IV – Go Mistakes**
    *   [Mistake #1 – So sánh interface với nil](#mistake-1-interface-vs-nil)
    *   [Mistake #2 – Closure trong vòng lặp](#mistake-2-closure-trong-vòng-lặp)
    *   [Mistake #3 – Dùng defer trong vòng lặp](#mistake-3-defer-trong-vòng-lặp)
    *   [Mistake #4 – Truy cập map từ nhiều goroutine](#mistake-4-truy-cập-map-từ-nhiều-goroutine)
    *   [Mistake #5 – Goroutine leak vì không listen channel](#mistake-5-goroutine-leak-không-listen-channel)
    *   [Mistake #6 – Truyền slice mà tưởng rằng copy](#mistake-6-truyền-slice-mà-tưởng-rằng-copy)
    *   [Mistake #7 – Dùng value receiver khi cần pointer](#mistake-7-dùng-value-receiver-khi-cần-pointer)
    *   [Mistake #8 – Không cancel context → goroutine leak](#mistake-8-context-không-bị-cancel)
    *   [Mistake #9 – Panic không được recover đúng cách](#mistake-9-panic-không-được-recover)
    *   [Mistake #10 – Type assertion không check ok](#mistake-10-type-assertion-không-check-ok)
    *   [Mistake #11 – Slice giữ capacity ngầm gây memory leak](#mistake-11-slice-capacity-bị-giữ-ngầm)
    *   [Mistake #12 – Map khi marshal JSON có thứ tự không xác định](#mistake-12-ghi-map-ẩn-trong-json)
    *   [Mistake #13 – Nhầm lẫn thứ tự thực thi defer (LIFO)](#mistake-13-defer-có-thứ-tự-lifo)
    *   [Mistake #14 – Buffered channel vẫn có thể gây deadlock](#mistake-14-buffered-channel-vẫn-deadlock)
    *   [Mistake #15 – Trỏ tới biến vòng lặp → tất cả trỏ cùng địa chỉ](#mistake-15-pointer-trên-loop-variable)
    *   [Mistake #16 – fmt.Printf dùng sai format type](#mistake-16-lỗi-fmtprintf-sai-kiểu)
    *   [Mistake #17 – Struct tag bị lỗi vì không đúng format](#mistake-17-struct-tag-không-được-parser)
    *   [Mistake #18 – WaitGroup không gọi Done → block mãi mãi](#mistake-18-sync-waitgroup-dùng-thiếu-done)
    *   [Mistake #19 – Không wrap error → mất ngữ cảnh khi debug](#mistake-19-không-wrap-error-gốc)
    *   [Mistake #20 – Biến bị shadow trong block → bug khó phát hiện](#mistake-20-shadow-biến-làm-hiểu-nhầm-logic)

# 1\. Kiểu dữ liệu cơ bản và khai báo biến

- - -

## 🧠 Khái niệm tổng quát

Trong Golang, việc hiểu rõ **kiểu dữ liệu** và **cách khai báo biến** là bước nền tảng không thể thiếu. Từ việc xác định giá trị cụ thể được lưu trữ ở đâu trong bộ nhớ (stack vs heap), đến cách Go runtime tối ưu hóa truy cập, mọi thứ đều bắt đầu từ đây.

Ngôn ngữ Go có các nhóm dữ liệu chính:

*   **Số nguyên (Integer)**:  
    `int`, `int8`, `int16`, `int32`, `int64` và các biến thể không dấu như `uint`, `uint8`, `uint16`, `uint32`, `uint64`

*   **Số thực (Floating Point)**:  
    `float32`, `float64`

*   **Boolean**:  
    `true`, `false`

*   **Chuỗi (String)**:  
    Kiểu dữ liệu UTF-8 bất biến

*   **Ký tự đặc biệt**:  
    `byte` (alias của `uint8`), `rune` (alias của `int32`, đại diện cho Unicode code point)

*   **Cấu trúc dữ liệu tĩnh/động**:  
    `array`, `slice`


## 🔍 Phân tích chuyên sâu

*   `int` là kiểu phụ thuộc kiến trúc máy (32-bit hoặc 64-bit). Dùng mặc định nhưng **nên rõ ràng khi cần tính toán chính xác kích thước bộ nhớ**.
*   `string` trong Go là immutable — mọi thao tác như cắt, nối chuỗi đều tạo bản sao mới.
*   `rune` đại diện 1 ký tự Unicode, dùng để xử lý ký tự đa byte như tiếng Việt, emoji.
*   `slice` không phải là mảng. Nó là một “view” gồm: pointer tới underlying array, độ dài và capacity. Rất nhẹ, dễ truyền qua hàm mà không copy dữ liệu.
*   `const` được xử lý ở thời điểm compile. Giá trị `const` không chiếm vùng nhớ runtime.

- - -

## 💡 Ví dụ: Các kiểu dữ liệu

`package main  import "fmt"  func main() {     var age int = 30              // biến kiểu số nguyên, 32 hoặc 64-bit tùy OS     const Pi float64 = 3.1415     // hằng số kiểu số thực (float64)     isAdmin := true               // boolean với short declaration :=      var letter rune = '𝔊'         // ký tự Unicode (rune = int32)     var data byte = 'A'           // byte là alias của uint8      var name string = "Gopher"    // chuỗi UTF-8, immutable      nums := []int{1, 2, 3}        // slice động chứa int     arr := [3]int{1, 2, 3}        // array tĩnh với độ dài cố định      fmt.Println("Age:", age)     fmt.Println("Pi:", Pi)     fmt.Println("Admin:", isAdmin)     fmt.Println("Letter:", string(letter)) // chuyển rune thành chuỗi     fmt.Println("Byte:", data)     fmt.Println("Name:", name)     fmt.Println("Slice:", nums)     fmt.Println("Array:", arr) }`

- - -

## 📊 Bảng giá trị (Range) các kiểu dữ liệu phổ biến

| Kiểu dữ liệu | Bit | Min Giá trị | Max Giá trị |
| --- | --- | --- | --- |
| int8 | 8   | \-128 | 127 |
| uint8 (byte) | 8   | 0   | 255 |
| int16 | 16  | \-32,768 | 32,767 |
| uint16 | 16  | 0   | 65,535 |
| int32 (rune) | 32  | \-2,147,483,648 | 2,147,483,647 |
| uint32 | 32  | 0   | 4,294,967,295 |
| int64 | 64  | \-9,223,372,036,854,775,808 | 9,223,372,036,854,775,807 |
| uint64 | 64  | 0   | 18,446,744,073,709,551,615 |
| float32 | 32  | ≈ -3.4e38 | ≈ +3.4e38 |
| float64 | 64  | ≈ -1.8e308 | ≈ +1.8e308 |
| bool | 1   | false | true |

## 📌 Ý nghĩa hệ thống

Việc nắm rõ các kiểu dữ liệu không chỉ giúp bạn tránh lỗi type mismatch, mà còn: - Tối ưu hiệu suất xử lý và quản lý bộ nhớ - Tránh bug liên quan đến Unicode/string slicing - Viết API rõ ràng, không ambiguous với kiểu dữ liệu cụ thể (`[]byte`, `string`, `rune`) - Phân biệt khi truyền dữ liệu qua hàm: array (copy toàn bộ) vs slice (chia sẻ vùng nhớ)

## 🎯 Câu hỏi phỏng vấn

*   **Câu hỏi:** Sự khác nhau giữa `array` và `slice` trong Go là gì?

    ```
    array: có độ dài cố định, là giá trị (value type), khi truyền vào hàm sẽ được copy.
    slice: là cấu trúc động gồm con trỏ, độ dài và capacity – khi truyền vào là tham chiếu đến mảng gốc.
    ```

*   **Câu hỏi:** `rune` và `byte` khác nhau như thế nào?

    ```
    byte là alias của uint8, dùng cho dữ liệu nhị phân/ASCII.
    rune là alias của int32, đại diện ký tự Unicode – dùng cho xử lý tiếng Việt, emoji.
    ```

*   **Câu hỏi:** `const` khác gì với `var`?

    ```
    const: hằng số, được tính ở compile-time, không chiếm bộ nhớ runtime.
    var: là biến – có thể thay đổi trong runtime.
    ```

*   **Câu hỏi:** Có nên dùng `float64` để lưu tiền không?

    ```
    Không nên – vì float dễ gây lỗi làm tròn. Hãy dùng kiểu số nguyên hoặc thư viện như shopspring/decimal.
    ```

*   **Câu hỏi:** Khi nào nên dùng `:=` và khi nào dùng `var`?

    ```
    :=: dùng nhanh trong hàm, khi không cần khai báo rõ kiểu.
    var: nên dùng ở ngoài hàm, export, hoặc khi cần kiểu cụ thể / zero value chính xác.
    ```

*   **Câu hỏi:** `string` trong Go có mutable không?

    ```
    Không. String trong Go là immutable – mọi thay đổi tạo chuỗi mới → ảnh hưởng hiệu suất nếu xử lý nhiều.
    ```

*   **Câu hỏi:** Vì sao `slice` được dùng nhiều thay vì array?

    ```
    Slice linh hoạt, nhẹ, truyền qua hàm không copy dữ liệu – đồng thời có thể mở rộng, cắt, clone dễ dàng.
    ```


- - -

# 2\. Cấu trúc điều kiện và vòng lặp

## 🧠 Khái niệm tổng quát

Golang cung cấp ba cấu trúc điều khiển cơ bản:

*   **if / else if / else**: kiểm tra điều kiện logic
*   **switch**: thay thế cho nhiều if lồng nhau, hỗ trợ fallthrough
*   **for**: vòng lặp duy nhất trong Go, dùng được cho loop, while, foreach

## 🔍 Phân tích chuyên sâu

*   `if` trong Go không cần dấu ngoặc tròn quanh điều kiện (như trong C).
*   `switch` trong Go không cần `break`; nó tự động không fallthrough, trừ khi được khai báo rõ ràng.
*   `for` có thể hoạt động như:
    *   vòng lặp chuẩn: `for i := 0; i < n; i++`
    *   vòng lặp while: `for cond`
    *   vòng lặp vô hạn: `for {}`
    *   range loop: `for i, v := range collection`

## 💡 Ví dụ code: if, switch, for

```
// Cấu trúc điều kiện với if/else
x := 5
if x > 10 {
    fmt.Println("Lớn hơn 10")
} else if x == 5 {
    fmt.Println("Bằng 5")
} else {
    fmt.Println("Khác")
}

// switch cơ bản không cần break
switch x {
case 1:
    fmt.Println("One")
case 5:
    fmt.Println("Five") // đúng
default:
    fmt.Println("Other")
}

// for chuẩn
for i := 0; i < 3; i++ {
    fmt.Println(i)
}

// for như while
i := 0
for i < 3 {
    fmt.Println(i)
    i++
}

// for vô hạn
// for {
//     fmt.Println("Chạy mãi mãi")
// }

// range trên slice
nums := []int{1, 2, 3}
for idx, val := range nums {
    fmt.Println("index:", idx, "value:", val)
}
```

## 📌 Ý nghĩa hệ thống

*   Việc sử dụng đúng cấu trúc điều khiển giúp mã rõ ràng, dễ đọc.
*   Go khuyến khích viết code đơn giản: `switch` thay vì nhiều `if` lồng nhau.
*   `range` rất mạnh với slice, map, channel — hỗ trợ clean code khi lặp.

## 🎯 Câu hỏi phỏng vấn

*   **Câu hỏi:** Go không có `while` hay `do-while` vì sao?

    ```
    Triết lý ngôn ngữ: đơn giản. for đủ dùng cho tất cả – giúp code ngắn, tránh lỗi logic lặp.
    ```

*   **Câu hỏi:** Dùng `range` với `slice` có rủi ro gì?

    ```
    Phần tử lấy ra là bản sao – nếu lấy địa chỉ (&v), tất cả trỏ cùng 1 vùng nhớ → bug khi dùng trong loop pointer.
    ```

*   **Câu hỏi:** `range map` có thứ tự không?

    ```
    Không. Từ Go 1.12+, range map được xáo trộn ngẫu nhiên để tránh việc phụ thuộc vào thứ tự.
    ```

*   **Câu hỏi:** Khi nào dùng `switch` thay vì `if`?

    ```
    Khi có nhiều nhánh kiểm tra giá trị cụ thể. switch rõ ràng, ngắn gọn, không cần break, hỗ trợ fallthrough.
    ```

*   **Câu hỏi:** Cách viết vòng lặp vô hạn an toàn trong Go?

    ```
    Viết for {}, kết hợp với select + ctx.Done() để cho phép graceful shutdown.
    ```

*   **Câu hỏi:** Có nên dùng `for i := 0; i < len(slice); i++` thay `range`?

    ```
    Có – nếu muốn truy cập và thay đổi chính xác phần tử gốc.
    range copy giá trị nên không thay đổi được gốc với kiểu không phải con trỏ.
    ```


- - -

# 3\. Hàm, Closure và Hàm Variadic

## 🧠 Khái niệm tổng quát

*   **Hàm (function)** trong Go là _first-class citizen_: có thể gán vào biến, truyền làm tham số, hoặc trả về từ hàm.
*   **Closure**: hàm bên trong có thể "bắt" và ghi nhớ giá trị từ scope bên ngoài.
*   **Variadic function**: hàm nhận số lượng đối số động, biểu diễn bằng `...` và hoạt động như slice trong runtime.

## 🔍 Phân tích chuyên sâu

*   Closure có thể làm biến escape sang heap nếu giữ tham chiếu ra ngoài vòng đời ban đầu.
*   Truyền hàm như parameter cho phép tách biệt logic và tuân thủ nguyên tắc SOLID.
*   Variadic function bản chất là nhận một slice — rất phổ biến trong logging, middleware, builder pattern.

## 💡 Ví dụ code nâng cao

```
// Hàm như biến
hello := func(name string) string {
    return "Hello " + name
}
fmt.Println(hello("Gopher"))

// Hàm nhận hàm khác làm tham số
func execute(fn func(string) string) {
    fmt.Println(fn("Golang"))
}
execute(hello) // truyền hàm

// Closure ghi nhớ giá trị bên ngoài
func counter() func() int {
    x := 0
    return func() int {
        x++
        return x
    }
}
c := counter()
fmt.Println(c()) // 1
fmt.Println(c()) // 2

// Hàm trả về hàm: factory pattern
func prefixer(prefix string) func(string) string {
    return func(s string) string {
        return prefix + s
    }
}
addGo := prefixer("Go-")
fmt.Println(addGo("Lang")) // Go-Lang

// Variadic function
func sum(nums ...int) int {
    total := 0
    for _, n := range nums {
        total += n
    }
    return total
}
fmt.Println(sum(1, 2, 3)) // 6

// Truyền slice vào hàm variadic
nums := []int{10, 20, 30}
fmt.Println(sum(nums...)) // cần dấu ...
```

## 📌 Góc nhìn hệ thống & tối ưu

*   Hàm như tham số là nền tảng của pattern functional (e.g., handler chain, config builder).
*   Closure có thể giúp "đóng gói logic + trạng thái" giống object — nhưng cần quản lý heap allocation.
*   Go không hỗ trợ default parameter — variadic function kết hợp với pattern giúp lấp chỗ trống này.

## 🎯 Câu hỏi phỏng vấn

*   **Câu hỏi:** Go có hỗ trợ `function as first-class citizen` không?

    ```
    Có. Hàm trong Go có thể gán vào biến, truyền vào hàm khác, trả về từ hàm → hỗ trợ lập trình hàm (functional).
    ```

*   **Câu hỏi:** Closure là gì? Khi nào biến trong closure escape lên heap?

    ```
    Closure là hàm "nhớ" được giá trị biến ngoài scope. Nếu closure giữ biến sau khi hàm cha kết thúc → biến đó sẽ escape lên heap.
    ```

*   **Câu hỏi:** Có thể khai báo hàm bên trong hàm không? Khi nào nên dùng?

    ```
    Có. Thường dùng để đóng gói logic phụ chỉ phục vụ hàm chính, giúp tách biệt và rõ ràng.
    ```

*   **Câu hỏi:** Ưu nhược điểm của `variadic function` trong Go?

    ```
    Ưu: truyền số lượng đối số linh hoạt, dùng như slice.
    Nhược: khó enforce type cho từng phần tử, dễ gây lỗi khi truyền nhầm kiểu.
    ```

*   **Câu hỏi:** Có thể truyền `slice` vào hàm variadic không?

    ```
    Có. Phải thêm ... sau slice để "giải nén" các phần tử → sum(nums...)
    ```

*   **Câu hỏi:** Hàm trả về hàm có ứng dụng gì trong thực tế?

    ```
    Dùng để tạo factory, builder, middleware, hoặc gắn logic theo context (e.g: prefixer, logWithLevel...)
    ```

*   **Câu hỏi:** So sánh `defer` vs `return` trong hàm → thứ tự thực thi?

    ```
    defer luôn chạy sau khi return được chuẩn bị nhưng trước khi rời khỏi hàm.
    Nếu có multiple defer → thứ tự chạy LIFO (stack).
    ```


- - -

# 4\. Slice, Map, Array và Type Casting

## 🧠 Khái niệm và khác biệt

*   **Array**: Kích thước cố định, là giá trị, khi gán là `copy`.
*   **Slice**: Trỏ vào underlying array, có `pointer + len + cap`, khi gán là `reference`.
*   **Map**: Reference type, ánh xạ key-value.
*   **Type Casting**: Ép kiểu tường minh, không có implicit conversion như C/C++.

## 🔍 Phân tích nâng cao

*   `slice1 := slice2` → cả 2 cùng trỏ 1 underlying array.
*   `copy(slice2, slice1)` để clone slice.
*   `map` không cần init với `make` sẽ panic khi gán.
*   Không thể ép kiểu `float64 → int` ngầm — cần `int(f)`.

## 💡 Ví dụ

```
arr := [3]int{1, 2, 3}
arr2 := arr
arr2[0] = 99 // arr[0] không đổi

slice := []int{1, 2, 3}
s2 := slice
s2[0] = 88 // ảnh hưởng slice gốc

clone := make([]int, len(slice))
copy(clone, slice) // đúng cách clone slice

m := make(map[string]int)
m["x"] = 100

var f float64 = 3.99
i := int(f) // ép kiểu rõ ràng
```

## 🎯 Câu hỏi phỏng vấn

*   **Câu hỏi:** Sự khác biệt giữa `slice` và `array` là gì?

    ```
    Slice: là reference type, gồm pointer + len + cap,
    trỏ vào underlying array, thay đổi phần tử sẽ ảnh hưởng dữ liệu gốc.
    
    Array: là value type, khi gán hoặc truyền vào hàm sẽ bị copy toàn bộ.
    ```

*   **Câu hỏi:** Tại sao `map` cần dùng `make()` trước khi gán?

    ```
    Vì map là reference type chưa được khởi tạo,
    nếu chưa dùng make() thì việc gán phần tử sẽ gây panic.
    ```

*   **Câu hỏi:** Gán `slice1 := slice2` có phải copy dữ liệu không?

    ```
    Không – chỉ copy struct slice (pointer + len + cap).
    
    Cả hai biến vẫn trỏ đến cùng 1 underlying array → thay đổi dữ liệu sẽ ảnh hưởng lẫn nhau.
    ```

*   **Câu hỏi:** Làm sao để clone slice mà không ảnh hưởng slice gốc?

    ```
    Dùng copy():
    clone := make([]int, len(src))
    copy(clone, src)
    ```

*   **Câu hỏi:** Có thể ép kiểu ngầm trong Go không?

    ```
    Không – Go yêu cầu explicit casting.
    
    Phải ép kiểu rõ ràng: int(f), float64(i)...
    ```

*   **Câu hỏi:** Map có được dùng trong nhiều goroutine không?

    ```
    Không – map không thread-safe.
    
    Dùng map trong nhiều goroutine cần bảo vệ bằng sync.Mutex
    hoặc thay thế bằng sync.Map.
    ```

*   **Câu hỏi:** Gán `map1 := map2` thì có độc lập không?

    ```
    Không – cả hai cùng trỏ đến cùng vùng nhớ underlying.
    
    Thay đổi trên một map sẽ ảnh hưởng map còn lại.
    ```


- - -

# 5\. Struct, Method và Embedded Struct

## 🧠 Khái niệm tổng quát

*   **Struct**: gom các field thành cấu trúc dữ liệu.
*   **Method**: hàm gắn với kiểu (có thể là pointer hoặc value).
*   **Embedded Struct**: cho phép kế thừa hành vi.

## 🔍 Phân tích chuyên sâu

*   `Value receiver`: dùng khi không cần thay đổi data, copy.
*   `Pointer receiver`: dùng để thay đổi trực tiếp hoặc tiết kiệm copy.
*   Sắp xếp field ảnh hưởng padding/memory layout.

```
type User struct {
    ID   int64
    Name string
    Age  int8
    Flag bool
}

// memory align tốt hơn nếu sắp: int64, string, bool, int8

func (u User) Greet() string {
    return "Hi " + u.Name
}
func (u *User) SetAge(age int8) {
    u.Age = age
}

type Admin struct {
    User
    Role string
}
```

## 🎯 Câu hỏi phỏng vấn

*   **Câu hỏi:** Khác biệt giữa value receiver và pointer receiver?

    ```
    Value receiver: nhận bản sao → không thay đổi giá trị gốc.
    
    Pointer receiver: thao tác trực tiếp trên vùng nhớ gốc → thay đổi được struct.
    ```

*   **Câu hỏi:** Có nên mix cả pointer và value receiver trong cùng struct?

    ```
    Không nên – dù Go cho phép, nhưng dễ gây rối logic.
    
    Nên thống nhất: nếu có method dùng pointer → toàn bộ struct nên dùng pointer receiver.
    ```

*   **Câu hỏi:** Embedded struct khác gì inheritance trong OOP?

    ```
    Embedded struct là composition – không phải kế thừa thực sự.
    
    Không có override, không gọi được super(), nhưng cho phép reuse field và method.
    ```

*   **Câu hỏi:** Có thể override method từ embedded struct không?

    ```
    Không. Nếu định nghĩa method trùng tên → sẽ shadow method của embedded struct.
    
    Không có cơ chế override thực sự như trong Java hay C++.
    ```

*   **Câu hỏi:** Sắp xếp field trong struct ảnh hưởng gì?

    ```
    Ảnh hưởng đến memory padding.
    
    Nếu sắp không hợp lý → bị thừa padding → struct tốn bộ nhớ hơn.
    
    Nên sắp theo thứ tự giảm dần kích thước: int64 → int32 → bool → int8...
    ```

*   **Câu hỏi:** Có thể gán method cho kiểu alias không?

    ```
    Chỉ gán được method cho custom type, không phải alias trực tiếp của built-in.
    
    Ví dụ: type MyInt int → được. Nhưng type MyInt = int → không được.
    ```

*   **Câu hỏi:** Có thể dùng struct anonymous trong Go không?

    ```
    Có – dùng trong phạm vi hàm như:
    
    tmp := struct {
      Name string
      Age  int
    }{Name: "A", Age: 20}
    ```


- - -

# 6\. Interface và Type Assertion

## 🧠 Khái niệm chuyên sâu

*   Interface gồm 2 phần: `type` + `value`.
*   Empty interface `interface{{}}`: chấp nhận mọi kiểu, dùng trong JSON, log...
*   Interface lưu **bản sao** giá trị (không trỏ trực tiếp unless pointer).

## 💡 Phân tích

*   `type assertion` ép về kiểu cụ thể `val.(string)`.
*   `type switch` dùng để xử lý đa kiểu khi biết là interface.

```
type Printer interface {
    Print()
}

type File struct{ Path string }

func (f File) Print() {
    fmt.Println("File:", f.Path)
}

func inspect(i interface{}) {
    switch v := i.(type) {
    case string:
        fmt.Println("string:", v)
    case int:
        fmt.Println("int:", v)
    default:
        fmt.Println("unknown")
    }
}
```

## 🎯 Câu hỏi phỏng vấn

*   **Câu hỏi:** Interface trong Go lưu trữ những gì?

    ```
    Interface lưu 2 phần:
    - type (loại thực tế)
    - value (giá trị thực tế)
    
    Đây là lý do interface có thể giữ mọi giá trị – kể cả pointer hay nil.
    ```

*   **Câu hỏi:** Sự khác biệt giữa `interface{} == nil` và `val == nil` là gì?

    ```
    interface{} == nil chỉ true nếu cả type và value đều nil.
    
    Nhưng nếu interface chứa type non-nil (vd: *MyStruct) nhưng value là nil,
    → vẫn khác nil → dễ gây bug.
    ```

*   **Câu hỏi:** Khi nào nên dùng `interface{}` trong hệ thống?

    ```
    Chỉ dùng khi cần generic hóa: log, JSON marshal, middleware...
    
    Không nên dùng ở business logic vì mất type safety, dễ gây lỗi runtime.
    ```

*   **Câu hỏi:** `type assertion` có an toàn không? So với `type switch`?

    ```
    val.(T) sẽ panic nếu sai kiểu.
    
    Dùng val, ok := val.(T) để tránh panic.
    
    type switch an toàn hơn khi kiểm tra nhiều kiểu – nên ưu tiên trong handler.
    ```

*   **Câu hỏi:** Interface có thể implement method pointer và value khác nhau không?

    ```
    Có. Nếu method có pointer receiver → chỉ pointer mới implement được.
    
    Nếu method có value receiver → cả value và pointer đều dùng được.
    ```

*   **Câu hỏi:** Interface có tốn bộ nhớ hơn struct không?

    ```
    Có – vì interface lưu thêm metadata (type + value).
    
    Ngoài ra, nếu interface chứa giá trị escape heap → tăng áp lực GC.
    ```

*   **Câu hỏi:** Làm sao kiểm tra runtime 1 biến có implement interface hay không?

    ```
    Dùng _, ok := val.(TargetInterface) để kiểm tra nhanh.
    
    Nếu cần kiểm tra sâu hơn → dùng reflect.TypeOf(val).Implements().
    ```


- - -

# 7\. Module, Package và go mod

## 🧠 Khái niệm

*   **Package**: nhóm logic nhỏ, mỗi thư mục có file `package x`.
*   **Module**: tập hợp package, bắt đầu từ thư mục có file `go.mod`.

## 📌 Các lệnh quan trọng

*   `go mod init module_name`: khởi tạo module
*   `go mod tidy`: dọn dependency, xóa unused
*   `go get`: thêm thư viện
*   `go mod edit`: sửa go.mod thủ công

## 💡 Ví dụ

```
// go.mod
module github.com/example/myapp

go 1.21

require (
    github.com/sirupsen/logrus v1.9.0
)

// thư mục project
myapp/
├── go.mod
├── main.go
├── util/
│   └── math.go  (package util)
```

## 🎯 Câu hỏi phỏng vấn

*   **Câu hỏi:** Sự khác nhau giữa `package` và `module` trong Go là gì?

    ```
    Package: là đơn vị tổ chức code nhỏ nhất – mỗi thư mục là một package.
    
    Module: là tập hợp nhiều package, được quản lý qua go.mod – cho phép khai báo version, dependency.
    ```

*   **Câu hỏi:** Một project Go có thể chứa nhiều module được không?

    ```
    Có – nhưng không nên trừ khi bạn cần tách version độc lập.
    
    Thường mỗi repo chỉ nên có 1 module để đơn giản hoá quản lý dependency và CI/CD.
    ```

*   **Câu hỏi:** `go mod tidy` khác gì `go get`?

    ```
    go mod tidy: tự động dọn dẹp dependency không dùng, thêm cái còn thiếu.
    
    go get: thêm hoặc cập nhật module theo version cụ thể (Go < 1.17).
    ```

*   **Câu hỏi:** Làm sao để import local package trong cùng module?

    ```
    Import theo tên logic trong go.mod:
    
    Ví dụ: nếu go.mod là module github.com/abc/app,
    thì file ở thư mục utils/log sẽ được import là:
    import "github.com/abc/app/utils/log"
    ```

*   **Câu hỏi:** Điều gì xảy ra khi bạn đổi tên module trong `go.mod`?

    ```
    Tất cả các import path theo module đó cần được cập nhật tương ứng.
    
    Nếu không sẽ gây lỗi compile hoặc mismatch module path.
    ```

*   **Câu hỏi:** Có thể dùng 2 version khác nhau của cùng 1 module trong go mod không?

    ```
    Không – Go không hỗ trợ multiple version cho cùng một module trong cùng thời điểm build.
    
    Go sẽ chọn version cao nhất thoả dependency graph.
    ```

*   **Câu hỏi:** `replace` directive trong `go.mod` dùng để làm gì?

    ```
    Dùng để thay đổi source module khi build.
    
    Ví dụ: dùng local path hoặc fork thay vì module chính thức:
    replace github.com/lib/original => ../lib/fork
    ```


- - -

# 8\. Goroutine và Channel

## 🧠 Khái niệm tổng quát

*   **Goroutine** là đơn vị thực thi nhẹ của Go, hoạt động song song (concurrent) dựa trên cơ chế `M:N scheduling`.
*   **Channel** là cấu trúc truyền thông đồng bộ giữa các goroutine, giúp trao đổi dữ liệu an toàn.

## 🔍 Phân tích chuyên sâu

*   Goroutine rất nhẹ (~2KB stack), được Go runtime quản lý, có thể scale hàng nghìn.
*   Go sử dụng M:N scheduler: nhiều goroutine chạy trên nhiều OS thread thông qua logical processor (GOMAXPROCS).
*   `channel` có 2 loại: buffered và unbuffered — ảnh hưởng trực tiếp đến hành vi block.
*   **select** cho phép chờ nhiều channel cùng lúc.
*   `close(chan)` báo hiệu channel đã đóng, không gửi thêm được.

## 💡 Ví dụ thực tế

```
func worker(id int, jobs <-chan int, results chan<- int) {
    for j := range jobs {
        fmt.Printf("worker %d processing job %d\n", id, j)
        time.Sleep(time.Second)
        results <- j * 2
    }
}

func main() {
    jobs := make(chan int, 5)
    results := make(chan int, 5)

    for w := 1; w <= 3; w++ {
        go worker(w, jobs, results)
    }

    for j := 1; j <= 5; j++ {
        jobs <- j
    }
    close(jobs)

    for r := 1; r <= 5; r++ {
        fmt.Println("result:", <-results)
    }
}
```

## 📌 Tư duy hệ thống

*   **Fan-out:** nhiều goroutine cùng xử lý chung 1 channel đầu vào (như worker pool).
*   **Fan-in:** nhiều nguồn channel gộp lại về một channel đầu ra.
*   Tránh deadlock bằng việc luôn **đóng channel** nếu không dùng nữa, và kiểm soát kỹ unbuffered channel.
*   Dùng `select {}` kết hợp với `context` để xử lý timeout, cancel.

## 💡 Ví dụ thực tế

```
// Goroutine đơn giản
go func() {
    fmt.Println("Chạy song song")
}()

// Channel đồng bộ (unbuffered)
ch := make(chan int)
go func() {
    ch <- 10 // gửi dữ liệu
}()
val := <-ch // nhận dữ liệu
fmt.Println("Nhận được:", val)

// Buffered channel
cb := make(chan string, 2)
cb <- "hello"
cb <- "world"
fmt.Println(<-cb)
fmt.Println(<-cb)

// Select trên nhiều channel
c1 := make(chan string)
c2 := make(chan string)

go func() { c1 <- "one" }()
go func() { c2 <- "two" }()

select {
case msg1 := <-c1:
    fmt.Println("từ c1:", msg1)
case msg2 := <-c2:
    fmt.Println("từ c2:", msg2)
}

// Channel đóng
done := make(chan struct{})
close(done)
_, ok := <-done
fmt.Println("Channel đã đóng:", !ok)
```

## 📌 Ứng dụng hệ thống

*   Sử dụng goroutine để xây dựng mô hình **worker pool**, **fan-out**, **pipeline processing**.
*   Channel giúp loại bỏ lock trong nhiều tình huống, nhưng cũng dễ gây deadlock nếu không hiểu rõ blocking behavior.
*   Không bao giờ được `close()` channel ở phía nhận.
*   Nil channel sẽ block vĩnh viễn – cần tránh trong production logic.

## 🧠 Nâng cao: main cũng là một Goroutine

*   Hàm `main()` trong Go thực chất chạy trong một goroutine đầu tiên được tạo bởi runtime.
*   Khi `main()` kết thúc, toàn bộ chương trình sẽ **exit ngay lập tức**, kể cả các goroutine khác chưa hoàn tất.
*   Vì vậy: nếu bạn khởi tạo goroutine trong `main()` mà không dùng `WaitGroup`, `channel`, hoặc `sleep`, chương trình có thể kết thúc khi goroutine chưa chạy xong.

## 🧠 Khởi tạo và thứ tự thực thi: func init, import

*   Go tự động chạy tất cả `func init()` của từng file trước khi `main()` chạy.
*   Trong mỗi package:
    *   Biến toàn cục được khởi tạo trước
    *   Sau đó chạy `init()` theo thứ tự khai báo
*   Thứ tự import và khởi tạo package là **đệ quy theo dependency**: Go đảm bảo các package phụ thuộc được init trước khi package cha chạy init.

```
package main

import "fmt"

var G = initVar()

func initVar() int {
    fmt.Println("initVar gọi trước main")
    return 100
}

func init() {
    fmt.Println("init chạy trước main")
}

func main() {
    fmt.Println("main bắt đầu")
}
```

## 🎯 Câu hỏi phỏng vấn

*   **Câu hỏi:** Khi nào goroutine bị leak? Làm sao phát hiện?

    ```
    Goroutine bị leak khi:
    - Nó block mãi mãi (thường do chờ channel không ai gửi),
    - Hoặc context đã bị huỷ nhưng goroutine không kiểm tra ctx.Done().
    
    Phát hiện bằng: runtime.NumGoroutine(), pprof, hoặc log traceID không thoát.
    ```

*   **Câu hỏi:** So sánh `buffered` vs `unbuffered channel`. Dùng sai gây gì?

    ```
    Unbuffered: sender và receiver phải gặp nhau mới unblock → dễ deadlock nếu lệch.
    
    Buffered: sender có thể gửi trước, nhưng vẫn block nếu đầy → dùng sai vẫn có thể block!
    
    Cần hiểu kỹ luồng đi và thời điểm close() channel.
    ```

*   **Câu hỏi:** Điều gì xảy ra nếu đọc từ một channel đã bị close?

    ```
    Go không panic – giá trị zero sẽ được trả về, và biến ok sẽ là false.
    
    val, ok := <-ch → ok = false nếu channel đã close.
    ```

*   **Câu hỏi:** Tại sao không nên close channel ở bên nhận?

    ```
    Vì channel chỉ nên được close từ phía gửi.
    
    Close từ phía nhận dễ gây panic nếu bên gửi vẫn đang hoạt động.
    ```

*   **Câu hỏi:** Có nên dùng channel thay Mutex không?

    ```
    Có thể – nhưng chỉ khi mô hình là producer-consumer rõ ràng.
    
    Nếu logic là update dữ liệu shared ngẫu nhiên → dùng Mutex an toàn hơn.
    ```

*   **Câu hỏi:** Race condition khi dùng channel có thể xảy ra không?

    ```
    Có – ví dụ:
    - Ghi channel từ nhiều goroutine cùng lúc
    - Đọc/ghi cùng lúc khi không rõ control
    - Đóng channel nhiều nơi
    
    Channel là công cụ đồng bộ, nhưng không loại bỏ hết race nếu sai mô hình.
    ```

*   **Câu hỏi:** Goroutine thực chất chạy trên gì? GMP model là gì?

    ```
    Goroutine không phải thread – nó chạy trên GMP model:
    
    - G: goroutine (tác vụ logic)
    - M: OS thread
    - P: processor (bộ lên lịch)
    
    Go runtime ánh xạ G → M thông qua P, giúp hàng ngàn goroutine chia đều thread hiệu quả.
    ```

*   **Câu hỏi:** Nếu `main()` kết thúc trước khi goroutine hoàn thành thì sao?

    ```
    Toàn bộ chương trình sẽ exit ngay lập tức – không chờ goroutine chạy xong.
    
    Giải pháp: dùng sync.WaitGroup, chan, hoặc context để đảm bảo chờ.
    ```

*   **Câu hỏi:** Select trên nhiều channel có ưu điểm gì?

    ```
    Giúp chọn channel sẵn sàng – tránh block đơn luồng.
    
    Có thể dùng select + default để làm non-blocking receive/send.
    ```

*   **Câu hỏi:** Có thể gửi vào `nil channel` không?

    ```
    Không – sẽ block mãi mãi.
    
    Nil channel dùng để vô hiệu hóa select-case theo logic runtime, nhưng phải kiểm soát cực kỹ.
    ```


*   **Câu hỏi:** Các loại channel trong Go là gì? Dùng khi nào?

    ```
    Có 3 loại channel:
    
    🔹 Unbuffered channel: đồng bộ – gửi và nhận phải xảy ra đồng thời.
    → Dùng khi cần block cho đến khi có goroutine đối ứng → đảm bảo đồng bộ chặt.
    
    🔹 Buffered channel: không block ngay – cho phép gửi trước, nhận sau.
    → Dùng cho worker pool, pipeline, hoặc khi tốc độ gửi/nhận lệch nhau.
    
    🔹 Nil channel: không gửi/nhận được gì – luôn block.
    → Dùng để vô hiệu hoá logic trong select-case (như enable/disable dynamic).
    ```

*   **Câu hỏi:** Khi nào nên dùng buffered channel thay vì unbuffered?

    ```
    Khi muốn tăng throughput và không cần đồng bộ từng lệnh gửi/nhận.
    
    Ví dụ: xử lý log, job queue, worker pool – buffered giúp tránh block nếu consumer chậm.
    ```

*   **Câu hỏi:** Có nên dùng channel để thay thế cho mọi loại đồng bộ không?

    ```
    Không. Channel phù hợp với mô hình truyền dữ liệu (communication by sharing).
    
    Nếu chỉ cần đồng bộ hoá truy cập shared state → dùng sync.Mutex sẽ đơn giản và hiệu quả hơn.
    ```


- - -

# 9\. Đồng bộ hoá với Mutex, RWMutex, WaitGroup

## 🧠 Khái niệm tổng quát

*   **Mutex (Mutual Exclusion)**: dùng để bảo vệ vùng tài nguyên chỉ cho phép 1 goroutine truy cập tại 1 thời điểm.
*   **RWMutex**: cho phép nhiều goroutine đọc đồng thời (Read Lock), nhưng chỉ 1 ghi (Write Lock).
*   **WaitGroup**: dùng để chờ tất cả goroutine hoàn tất công việc trước khi tiếp tục.

## 🔍 Phân tích chuyên sâu

*   Mutex hoạt động giống như critical section – không dùng đúng có thể gây **deadlock**.
*   RWMutex dùng tốt khi tỉ lệ đọc cao hơn ghi, giúp tăng concurrency.
*   WaitGroup giúp bạn tránh gọi `time.Sleep` trong các tác vụ song song.
*   **Luôn** unlock sau lock – dùng `defer` để an toàn.

## 💡 Ví dụ thực tế

```
import (
    "fmt"
    "sync"
)

var mu sync.Mutex
var count int

func increment() {
    mu.Lock()
    defer mu.Unlock()
    count++
}

// RWMutex cho đọc nhiều - ghi 1
var rw sync.RWMutex
var data = make(map[string]string)

func readData(key string) string {
    rw.RLock()
    defer rw.RUnlock()
    return data[key]
}

func writeData(key, val string) {
    rw.Lock()
    defer rw.Unlock()
    data[key] = val
}

// WaitGroup ví dụ
var wg sync.WaitGroup

func worker(id int) {
    defer wg.Done()
    fmt.Printf("Worker %d xong việc\n", id)
}

func main() {
    for i := 1; i <= 3; i++ {
        wg.Add(1)
        go worker(i)
    }
    wg.Wait() // chờ tất cả worker kết thúc
    fmt.Println("Tất cả goroutine đã hoàn tất")
}
```

## 📌 Ứng dụng hệ thống

*   **Mutex**: dùng để đồng bộ hóa các biến toàn cục khi nhiều goroutine đọc/ghi cùng lúc.
*   **RWMutex**: tối ưu hoá hiệu suất khi số lượng đọc nhiều gấp nhiều lần ghi.
*   **WaitGroup**: thay thế cho sleep/wait thủ công, cực kỳ hiệu quả trong batch job, worker pool, async task.
*   **Tips:** Luôn unlock bằng `defer`, tránh quên và gây block toàn chương trình.

## 🎯 Câu hỏi phỏng vấn

*   **Câu hỏi:** Mutex trong Go hoạt động như thế nào? Có thể gây deadlock không?

    ```
    Mutex là primitive đảm bảo chỉ một goroutine được truy cập vùng dữ liệu tại một thời điểm.
    
    Có – nếu lock không được unlock, hoặc lock nhiều chiều (A → B và B → A) → sẽ gây deadlock.
    ```

*   **Câu hỏi:** Khác biệt giữa `sync.Mutex` và `sync.RWMutex`?

    ```
    Mutex: chỉ 1 goroutine được lock → tất cả block.
    
    RWMutex:
    - Nhiều goroutine được RLock cùng lúc (read concurrency).
    - Chỉ 1 goroutine được Lock (write) – block toàn bộ đọc & ghi khác.
    
    → RWMutex hiệu quả khi tỉ lệ đọc >> ghi.
    ```

*   **Câu hỏi:** Có nên lồng nhiều mutex không? Làm sao tránh deadlock?

    ```
    Không nên – nhưng nếu cần, phải đảm bảo thứ tự lock đồng nhất trên toàn hệ thống.
    
    Ví dụ:
    - Thread A lock(m1) → lock(m2)
    - Thread B cũng phải theo thứ tự đó – nếu đảo chiều sẽ deadlock.
    ```

*   **Câu hỏi:** Khi nào dùng WaitGroup? So với channel thì sao?

    ```
    WaitGroup: dùng để đợi tất cả goroutine hoàn tất.
    
    → Dễ dùng trong job batching, đồng bộ nhiều tác vụ song song.
    
    Channel: linh hoạt hơn – truyền dữ liệu, có thể kết hợp với select/context.
    WaitGroup không truyền dữ liệu, chỉ dùng để đợi.
    ```

*   **Câu hỏi:** Gọi `wg.Done()` nhiều hơn hoặc ít hơn `wg.Add()` có sao không?

    ```
    Có – nếu Done > Add → panic.
    
    Nếu thiếu Done → Wait sẽ block mãi mãi.
    
    Phải đảm bảo mỗi goroutine gọi Done đúng 1 lần → thường dùng defer wg.Done().
    ```

*   **Câu hỏi:** Làm sao để kiểm soát race khi cập nhật counter toàn cục?

    ```
    Dùng:
    - sync.Mutex hoặc sync/atomic để bảo vệ biến toàn cục.
    - Hoặc gom counter per-goroutine rồi tổng hợp sau → tránh contention.
    
    Không dùng biến toàn cục trực tiếp nếu nhiều goroutine cùng ghi.
    ```

*   **Câu hỏi:** Có cần unlock nếu panic xảy ra sau Lock() không?

    ```
    Có – nếu không unlock, các goroutine sau sẽ bị block mãi mãi.
    
    Luôn dùng defer mu.Unlock() ngay sau khi lock để tránh quên – best practice bắt buộc.
    ```

*   **Câu hỏi:** Mutex có ảnh hưởng gì tới performance? Tối ưu thế nào?

    ```
    Mutex gây block → nếu contention cao sẽ giảm throughput.
    
    Tối ưu:
    - Chỉ lock vùng critical – tránh lock bao toàn hàm.
    - Dùng RWMutex nếu chủ yếu là đọc.
    - Dùng channel hoặc sharding nếu muốn scale-out.
    ```

*   **Câu hỏi:** So sánh `sync.Mutex` với `sync/atomic` – khi nào dùng gì?

    ```
    sync/atomic: cực nhanh, không block → dùng khi thao tác đơn giản (int, flag).
    
    Mutex: dùng cho nhiều biến, logic phức tạp hoặc cần lock nhóm thao tác.
    
    Atomic không thay thế mutex trong mọi tình huống – dễ viết sai nếu không cẩn thận.
    ```

*   **Câu hỏi:** Cách test deadlock hoặc race trong code đồng bộ?

    ```
    ✔️ Dùng go run -race → phát hiện data race.
    
    ✔️ Dùng pprof để xem goroutine blocking.
    
    ✔️ Viết test cố tình tạo contention để verify logic đồng bộ.
    ```


- - -

# 10\. Context và Lifecycle Control

## 🧠 Khái niệm tổng quát

*   **Context** là chuẩn của Go để truyền timeout, deadline, cancel signal và dữ liệu nhẹ giữa các goroutine.
*   Nó giúp quản lý **vòng đời** của tác vụ hoặc request xuyên suốt hệ thống.

## 🔍 Phân tích chuyên sâu

*   Context nên được truyền dưới dạng parameter đầu tiên: `func(ctx context.Context, ...)`
*   Các loại context:
    *   `context.Background()`: gốc, không bao giờ bị cancel
    *   `context.TODO()`: placeholder khi chưa rõ context thực sự
    *   `context.WithCancel`, `WithTimeout`, `WithDeadline`: tạo context có khả năng dừng
*   Context tự động cancel khi deadline timeout hoặc cha bị cancel
*   Lý tưởng dùng trong: HTTP request, job, stream, signal handling, database...

## 💡 Ví dụ thực tế

```
import (
    "context"
    "fmt"
    "time"
)

func worker(ctx context.Context, name string) {
    for {
        select {
        case <-ctx.Done():
            fmt.Println("Stopped:", name)
            return
        default:
            fmt.Println("Working:", name)
            time.Sleep(500 * time.Millisecond)
        }
    }
}

func main() {
    ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
    defer cancel()

    go worker(ctx, "A")
    go worker(ctx, "B")

    <-ctx.Done()
    fmt.Println("Main: Timeout reached")
}
```

## 📌 Ứng dụng hệ thống

*   Context được dùng rộng rãi trong **HTTP server**, **database/sql**, **gRPC**, **Kafka**, etc.
*   Truyền `context.Context` đúng chuẩn giúp dễ debug, trace, stop task theo yêu cầu
*   Context hỗ trợ **cancel propagation** → goroutine con tự động dừng khi cha timeout
*   **Lưu ý:** Không dùng context để lưu dữ liệu lớn hoặc logic — chỉ dùng để truyền metadata nhẹ.

## 📊 Flow: Truyền context từ Envoy xuống các tầng trong hệ thống

Trong hệ thống microservice dùng Envoy hoặc gRPC gateway, context thường được truyền xuyên suốt từ request gốc tới từng tầng function và database.

```

┌──────────────┐
│ Envoy Proxy  │
│ - Truyền header: x-request-id, deadline, trace-id
│ - Forward HTTP/gRPC request
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Gateway API  │
│ - Tạo context gốc: context.WithTimeout(...)
│ - Đính trace-id vào context
└──────┬───────┘
       │
       ▼
┌────────────────────────────┐
│ Application Handler        │
│ - ctx được truyền vào hàm │
│   func(ctx context.Context)│
└──────┬─────────────────────┘
       │
       ▼
┌────────────────────────────┐
│ Service Layer / Usecase    │
│ - ctx tiếp tục được truyền│
│ - Add logging/tracing tag │
└──────┬─────────────────────┘
       │
       ▼
┌────────────────────────────┐
│ Database / Repository Layer│
│ - Dùng ctx trong query:    │
│   db.QueryContext(ctx, ...)│
└────────────────────────────┘
```

## 📌 Ý nghĩa thiết kế

*   **Truyền context xuyên suốt** giúp enforce timeout, cancel toàn bộ call chain khi request timeout từ đầu.
*   `ctx` chứa metadata như trace-id, user-id → dùng cho log/tracing/monitoring.
*   `db.QueryContext` giúp tự động abort query khi context bị cancel (timeout hoặc shutdown).
*   Việc propagate đúng context giúp bạn build hệ thống resilient, observable và debuggable.

## 🎯 Câu hỏi phỏng vấn

*   **Câu hỏi:** Context trong Go được thiết kế để giải quyết vấn đề gì?

    ```
    Quản lý vòng đời của tác vụ – truyền timeout, deadline, cancel signal xuyên suốt hệ thống (từ HTTP → DB → goroutine...).
    
    Giúp dừng task đúng lúc, tránh leak tài nguyên và hỗ trợ trace/log.
    ```

*   **Câu hỏi:** Sự khác nhau giữa `context.Background()` và `context.TODO()`?

    ```
    Background(): gốc, nên dùng cho main, init, hoặc test – không bao giờ bị cancel.
    
    TODO(): placeholder – dùng tạm khi chưa xác định được context cha.
    ```

*   **Câu hỏi:** So sánh `WithCancel`, `WithTimeout`, và `WithDeadline`

    ```
    - WithCancel(): tạo context có thể huỷ tay bằng hàm cancel()
    - WithTimeout(): huỷ sau khoảng thời gian xác định
    - WithDeadline(): huỷ tại thời điểm cố định (absolute time)
    
    Tất cả đều kế thừa từ context cha → huỷ truyền theo cha.
    ```

*   **Câu hỏi:** Khi nào context bị cancel?

    ```
    1. Khi cancel() được gọi thủ công
    2. Khi timeout hết hạn hoặc tới deadline
    3. Khi context cha bị cancel → lan xuống context con
    ```

*   **Câu hỏi:** Dữ liệu truyền qua context nên chứa gì?

    ```
    Chỉ truyền metadata nhẹ: request ID, user ID, trace ID, lang…
    
    Không truyền dữ liệu lớn, pointer phức tạp hoặc logic xử lý → context là control signal, không phải data bus.
    ```

*   **Câu hỏi:** Điều gì xảy ra nếu không gọi `cancel()`?

    ```
    Leak tài nguyên – context không bị huỷ, goroutine phụ thuộc vào nó sẽ không dừng.
    
    → luôn dùng defer cancel() sau context.With* để đảm bảo cleanup.
    ```

*   **Câu hỏi:** Context giúp xử lý graceful shutdown như thế nào?

    ```
    1. Bắt tín hiệu OS (SIGINT/SIGTERM)
    2. Gọi cancel() hoặc huỷ context gốc
    3. Các goroutine đang chạy kiểm tra ctx.Done() và thoát
    4. Đợi bằng WaitGroup → đảm bảo đóng hoàn toàn trước khi exit
    ```

*   **Câu hỏi:** Có nên truyền context qua global biến?

    ```
    Không – context nên được truyền qua function parameter để rõ ràng và tránh shared mutable state.
    
    → Giúp dễ trace, test, và tránh bug khi chạy đồng thời.
    ```

*   **Câu hỏi:** Gọi DB/API mà không truyền context có hậu quả gì?

    ```
    Không thể dừng đúng lúc nếu request bị huỷ (timeout/cancel) → gây leak connection, timeout trễ, tắc pool.
    
    → luôn dùng db.QueryContext(ctx, ...), http.NewRequestWithContext.
    ```

*   **Câu hỏi:** Có bao giờ nên `cancel()` context nhiều lần không?

    ```
    Không – chỉ cancel một lần duy nhất. Cancel nhiều không lỗi nhưng thừa logic → nên tách rõ chủ sở hữu context.
    ```


- - -

# 11\. Error Handling và Panic/Recover

## 🧠 Khái niệm tổng quát

*   **Error**: là giá trị trả về đầu tiên cho mọi hàm có thể thất bại – dạng `error` interface.
*   **Panic**: ngắt luồng xử lý hiện tại ngay lập tức – chỉ nên dùng cho lỗi lập trình nghiêm trọng.
*   **Recover**: giúp "bắt" panic trong `defer`, phục hồi điều khiển chương trình và tránh crash toàn bộ service.

## 🔍 Phân tích chuyên sâu

*   `error` nên được wrap lại để giữ ngữ cảnh: dùng `fmt.Errorf("thao tác thất bại: %w", err)`.
*   Dùng `errors.Is`, `errors.As`, `errors.Unwrap` để phân tích chain lỗi khi cần.
*   `recover()` chỉ hoạt động bên trong `defer`. Bên ngoài sẽ không ngăn panic.
*   Go runtime khi panic:
    *   Gọi toàn bộ defer stack
    *   Nếu có recover → lấy lại điều khiển
    *   Nếu không → in stacktrace và **exit**

## 💡 Ví dụ: error wrapping + panic/recover

```
func doSomething() error {
    err := errors.New("kết nối thất bại")
    return fmt.Errorf("lỗi khi gọi backend: %w", err)
}

func safeRun() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Đã recover từ panic:", r)
        }
    }()
    panic("hệ thống lỗi nghiêm trọng")
}
```

## 🧠 Graceful Shutdown hoạt động như thế nào?

*   Khi bạn nhấn `Ctrl+C` hoặc hệ thống gửi tín hiệu `SIGINT`, `SIGTERM` (từ orchestrator như Kubernetes), Go program có thể **bắt tín hiệu này** qua `os/signal`.
*   Khi bắt được tín hiệu, bạn gọi `cancel()` từ `context.WithCancel` để truyền tín hiệu dừng xuống tất cả các tầng bên dưới.
*   Mỗi goroutine đang chạy cần lắng nghe `ctx.Done()` để biết khi nào cần dừng.
*   Bạn có thể dùng `sync.WaitGroup` để đảm bảo tất cả goroutine xử lý xong trước khi main kết thúc.

## 💡 Ví dụ: shutdown đợi worker xử lý xong

```
func main() {
    ctx, cancel := context.WithCancel(context.Background())
    defer cancel()

    sig := make(chan os.Signal, 1)
    signal.Notify(sig, syscall.SIGINT, syscall.SIGTERM)

    go func() {
        <-sig
        fmt.Println("Nhận tín hiệu tắt, huỷ context...")
        cancel()
    }()

    var wg sync.WaitGroup
    wg.Add(1)

    go func() {
        defer wg.Done()
        runJob(ctx)
    }()

    wg.Wait() // đợi toàn bộ goroutine hoàn tất
    fmt.Println("Shutdown hoàn tất")
}

func runJob(ctx context.Context) {
    for {
        select {
        case <-ctx.Done():
            fmt.Println("Dừng xử lý công việc")
            return
        default:
            fmt.Println("Đang xử lý công việc...")
            time.Sleep(1 * time.Second)
        }
    }
}
```

## 📌 Tóm tắt lợi ích Graceful Shutdown

*   Cho phép hệ thống **hoàn tất công việc dang dở** trước khi thoát.
*   Giải phóng tài nguyên đúng cách (database, network, file, goroutine).
*   Không bị mất dữ liệu hoặc ngắt kết nối giữa chừng.
*   Chuẩn kỹ thuật bắt buộc với **microservice, HTTP/gRPC API, cronjob** production.

## 📌 Ứng dụng hệ thống

*   **Error wrapping**: duy trì stack trace, logic tầng cao dễ debug.
*   **Recover**: chống crash hệ thống — đặc biệt ở các goroutine, worker hoặc middleware.
*   **Graceful shutdown**: bắt buộc ở service production — tránh mất dữ liệu, close connection đúng cách.

## 🎯 Câu hỏi phỏng vấn

*   **Câu hỏi:** Vì sao Go không dùng try-catch như các ngôn ngữ khác?

    ```
    Triết lý của Go: lỗi là dữ liệu – cần xử lý tường minh bằng return.
    
    → Giúp logic rõ ràng, kiểm soát luồng tốt hơn, tránh swallow lỗi như try-catch.
    ```

*   **Câu hỏi:** Khi nào dùng `panic`? Khi nào không nên?

    ```
    Dùng panic cho lỗi không thể hoặc không nên recover:
    - Vi phạm bất biến (bug lập trình)
    - Lỗi cấu hình nghiêm trọng (không tìm thấy file env, DB init fail...)
    
    Không dùng panic trong luồng xử lý business logic → phải return error.
    ```

*   **Câu hỏi:** `recover()` dùng như thế nào? Có bắt được panic ngoài `defer` không?

    ```
    recover() chỉ hoạt động bên trong defer.
    
    → Nếu gọi ngoài defer hoặc sau khi panic thoát hàm → không có tác dụng.
    
    Nên dùng để ngăn hệ thống crash và ghi log → nhưng tránh dùng để "bắt lỗi như catch".
    ```

*   **Câu hỏi:** Tại sao cần `error wrapping`? Dùng thế nào?

    ```
    Giúp giữ gốc lỗi khi truyền qua nhiều tầng → dễ trace và debug.
    
    Dùng: fmt.Errorf("lỗi logic A: %w", err)
    → Tầng cao có thể dùng errors.Is hoặc errors.As để phân tích nguyên nhân gốc.
    ```

*   **Câu hỏi:** So sánh `errors.Is()` vs `errors.As()`

    ```
    - Is(): so sánh lỗi có giống 1 lỗi cụ thể không.
    - As(): check và ép kiểu lỗi về 1 struct cụ thể (e.g., *os.PathError).
    
    Dùng để xử lý khác nhau theo loại lỗi (IO, timeout, validation...).
    ```

*   **Câu hỏi:** Stacktrace trong Go có sẵn không? Làm sao lấy?

    ```
    Mặc định không – error không có stacktrace.
    
    Dùng thêm lib như:
    - pkg/errors (cũ)
    - github.com/pkg/errors
    - uber/zap hoặc log/slog → tích hợp stack nếu panic
    
    Hoặc: debug.PrintStack() trong defer/recover.
    ```

*   **Câu hỏi:** Nếu defer gọi panic → có chạy recover không?

    ```
    Không. recover chỉ bắt panic sinh ra trước nó.
    
    → Nếu panic xảy ra trong chính defer → sẽ không recover được.
    ```

*   **Câu hỏi:** Làm sao log error mà không mất stacktrace?

    ```
    Dùng fmt.Errorf(... %w, ...) để wrap.
    
    Log kèm stack:
    - Dùng lib hỗ trợ (zap, slog, errors.WithStack)
    - Ghi thêm stack vào log trong recover() khi panic.
    
    → Tránh log bằng fmt.Println – mất toàn bộ context.
    ```

*   **Câu hỏi:** Lỗi từ tầng trong truyền lên API trả về client nên format thế nào?

    ```
    Dùng:
    - Wrap lỗi ở tầng trong → để log chi tiết
    - Map lỗi ra mã code + message thân thiện ở tầng handler (e.g: 400 Bad Request)
    
    Không trả raw lỗi kỹ thuật ra client.
    ```

*   **Câu hỏi:** Khi nào nên dùng sentinel error? Khi nào nên dùng error struct?

    ```
    Sentinel (biến error cụ thể): dùng khi cần so sánh rõ ràng (e.g., ErrNotFound).
    
    Error struct: dùng khi cần đính kèm context (field, cause, domain, retryable…)
    
    → Kết hợp với errors.As() để phân loại xử lý.
    ```


- - -

# 12\. Logging nâng cao với logrus, zap, zerolog

## 🧠 Khái niệm tổng quát

*   Logging là thành phần cốt lõi trong mọi service để **trace, debug, audit** và **monitor**.
*   Go hỗ trợ logging qua nhiều thư viện nổi bật:
    *   **logrus**: phổ biến, đơn giản, dễ dùng.
    *   **zap**: hiệu năng cao, JSON structured log, production ready.
    *   **zerolog**: tốc độ cao, encode trực tiếp vào writer.

## 🔍 So sánh 3 thư viện phổ biến

| Thư viện | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| logrus | Dễ dùng, phổ biến | Hiệu năng thấp hơn (dùng reflection) |
| zap | Structured, nhanh, JSON tốt | API hơi verbose |
| zerolog | Rất nhanh, binary-safe | API khác biệt, khó debug nếu quen logrus |

## 💡 Ví dụ sử dụng logrus

```
import log "github.com/sirupsen/logrus"

func main() {
    log.SetFormatter(&log.JSONFormatter{})
    log.SetLevel(log.InfoLevel)

    log.WithFields(log.Fields{
        "user_id":  123,
        "action":   "login",
    }).Info("User logged in")
}
```

## 💡 Ví dụ zap production logger

```
import (
    "go.uber.org/zap"
)

func main() {
    logger, _ := zap.NewProduction()
    defer logger.Sync()

    logger.Info("Xử lý xong",
        zap.String("user", "abc"),
        zap.Int("duration_ms", 124),
    )
}
```

## 📌 Best Practice logging

*   **Không** dùng `fmt.Println` cho production log.
*   Sử dụng logging **structured (JSON)** để máy có thể parse được.
*   Log theo **ngữ cảnh**: user, request-id, trace-id (log-enrichment theo context).
*   Tách **stdout** (info, debug) và **stderr** (error) nếu chạy trong container/Kubernetes.
*   Kết hợp với tools như `ELK stack`, `Grafana Loki` để visualize và alert.

## 🎯 Câu hỏi phỏng vấn

*   **Câu hỏi:** Vì sao nên dùng structured logging thay vì `fmt.Println`?

    ```
    Structured logging (dạng JSON/key-value) cho phép:
    ✔ Dễ parse & search (qua Elastic, Loki…)
    ✔ Tích hợp alert & trace theo field (e.g. trace_id, user_id)
    ✔ Giảm lỗi do thiếu thông tin hoặc format sai
    
    fmt.Println chỉ log string → không phù hợp prod.
    ```

*   **Câu hỏi:** So sánh logrus, zap, zerolog – nên dùng gì trong hệ thống lớn?

    ```
    - logrus: dễ dùng, phổ biến nhưng chậm (dùng reflection)
    - zap: production-ready, high-perf, có stack trace, JSON log
    - zerolog: nhanh nhất, low alloc – nhưng API khác lạ
    
    Gợi ý: zap/zerolog cho backend nhiều traffic, logrus cho tool/dev.
    ```

*   **Câu hỏi:** Log nên chứa những thông tin gì trong hệ thống microservice?

    ```
    ✔ Trace ID, User ID, Request ID
    ✔ Tên service + method
    ✔ Latency, status code, retry count
    ✔ Error + stack trace (nếu có)
    ✔ Source IP hoặc auth context
    ```

*   **Câu hỏi:** Tại sao cần tách stderr và stdout khi log trong container?

    ```
    ✔ stdout → info/debug log
    ✔ stderr → error log (phân tích alert)
    
    Giúp orchestrator (e.g. Kubernetes, Docker) route log đúng stream → dễ filter + alerting.
    ```

*   **Câu hỏi:** Tích hợp trace-id vào log như thế nào?

    ```
    - Gắn trace_id vào context.Context (HTTP hoặc gRPC header)
    - Log nào cũng extract từ context ra rồi inject vào logger
    → Đảm bảo trace xuyên suốt toàn hệ thống
    ```

*   **Câu hỏi:** Có nên log toàn bộ request/response không?

    ```
    Không – chỉ log khi debug và phải mask dữ liệu nhạy cảm:
    ✔ Token, password
    ✔ Số tài khoản, email
    
    → Dùng log level và scrubber (filter middleware) để kiểm soát.
    ```

*   **Câu hỏi:** Làm sao log lỗi mà vẫn giữ stacktrace?

    ```
    - Dùng zap.Error(err) hoặc wrap lỗi chứa stack trace
    - Trong panic → log tại recover() kèm debug.Stack()
    
    → Tránh mất context khi log lỗi tầng sâu.
    ```

*   **Câu hỏi:** Có nên log ở từng tầng service không? Vì sao?

    ```
    Có – nhưng theo chuẩn:
    ✔ Business layer → log input/output logic chính
    ✔ Infra layer → log error kết nối, retry
    ✔ Middleware → log trace-id, latency, panic recover
    
    → Giúp trace theo chiều dọc, không log lặp.
    ```

*   **Câu hỏi:** Có nên log trong goroutine? Làm sao giữ được trace-id?

    ```
    Có – nhưng cần truyền context vào goroutine để lấy trace-id.
    
    Nếu tạo goroutine mà không truyền đúng context → log sẽ thiếu metadata → khó trace.
    ```

*   **Câu hỏi:** Cách đo hiệu năng logging trong hệ thống?

    ```
    - Dùng pprof để phân tích chi phí log
    - So sánh alloc / GC log giữa logrus/zap/zerolog
    - Benchmark log N dòng/s – xác định bottleneck nếu log quá nhiều
    ```


- - -

# 13\. Testing, Benchmark, Table-Driven Test

## 🧠 Tổng quan testing trong Go

*   Go cung cấp testing built-in qua package `testing`.
*   Test file có hậu tố `_test.go`, tên hàm bắt đầu bằng `Test*`.
*   Benchmark test dùng để đo hiệu năng (`Benchmark*`).

## 💡 Ví dụ đơn giản

```
func Add(a, b int) int {
    return a + b
}

func TestAdd(t *testing.T) {
    result := Add(2, 3)
    if result != 5 {
        t.Errorf("expected 5, got %d", result)
    }
}
```

## 🧪 Table-Driven Test (pattern chuẩn)

```
func TestAddTable(t *testing.T) {
    cases := []struct {
        name     string
        a, b, out int
    }{
        {"2+3", 2, 3, 5},
        {"-1+1", -1, 1, 0},
    }

    for _, c := range cases {
        t.Run(c.name, func(t *testing.T) {
            res := Add(c.a, c.b)
            if res != c.out {
                t.Errorf("got %d, want %d", res, c.out)
            }
        })
    }
}
```

## ⚙ Benchmark

```
func BenchmarkAdd(b *testing.B) {
    for i := 0; i < b.N; i++ {
        _ = Add(1, 2)
    }
}
```

## 📌 Tips

*   Dùng `go test -v ./...` để test toàn bộ module.
*   Dùng `-bench` để benchmark, `-cover` để đo coverage.
*   Dùng `assert` libs như `stretchr/testify` khi test lớn.

## 🎯 Câu hỏi phỏng vấn

*   **Câu hỏi:** Khi nào nên dùng Table-Driven Test trong Go?

    ```
    Khi test nhiều case giống nhau nhưng khác input/output:
    ✔ Dễ maintain
    ✔ Có thể đặt tên test từng case (dùng t.Run())
    ✔ Tránh lặp code → rõ ràng hơn trong CI/CD
    ```

*   **Câu hỏi:** Benchmark trong Go hoạt động như thế nào?

    ```
    Go sẽ chạy benchmark lặp đi lặp lại (b.N lần) để lấy số đo trung bình:
    ✔ Đo CPU time (ns/op)
    ✔ Đo số lần cấp phát bộ nhớ (alloc/op)
    ✔ Có thể dùng b.ReportAllocs() để hiện thông tin chi tiết
    
    → Dùng cho kiểm thử hiệu năng function, JSON, DB…
    ```

*   **Câu hỏi:** Sự khác biệt giữa `t.Fatal()` và `t.Error()`?

    ```
    - t.Fatal(): dừng test hiện tại → dùng khi lỗi nghiêm trọng, không thể tiếp tục.
    - t.Error(): log lỗi và chạy tiếp → phù hợp trong loop hoặc nhiều check.
    
    → Giúp tối ưu feedback trong test report.
    ```

*   **Câu hỏi:** Làm sao test code có goroutine hoặc concurrent logic?

    ```
    - Dùng sync.WaitGroup để chờ tất cả goroutine xong
    - Dùng channel để collect kết quả
    - Tránh race bằng -race flag khi chạy test
    
    → Không dùng time.Sleep – không ổn định và chậm.
    ```

*   **Câu hỏi:** Làm sao test function có dùng context?

    ```
    - Tạo context.Background() hoặc context.WithTimeout
    - Gắn trace-id nếu cần verify log
    - Đảm bảo test không leak goroutine bằng ctx.Done() trong worker
    
    → Quan trọng trong microservice và gRPC test.
    ```

*   **Câu hỏi:** Có nên mock trong test Go không? Nếu có thì khi nào?

    ```
    Có – nên mock khi:
    ✔ Gọi ra DB, network, Kafka
    ✔ Không muốn test logic bên thứ ba
    
    → Dùng interface + inject mock, hoặc tool như gomock, testify/mock.
    ```

*   **Câu hỏi:** Làm sao test function có panic?

    ```
    Wrap test trong defer func() { recover() } hoặc test log panic:
    ✔ Đảm bảo recover hoạt động
    ✔ Có thể kiểm tra nội dung panic
    
    → Không nên để panic thật xảy ra trong test → làm hỏng CI.
    ```

*   **Câu hỏi:** Các công cụ nào hỗ trợ test coverage tốt cho Go?

    ```
    - go test -cover → tổng quan
    - go tool cover -html=... → hiển thị chi tiết từng dòng
    - Tích hợp vào CI như GitHub Actions, GitLab, Jenkins để check % tối thiểu
    ```

*   **Câu hỏi:** Test nào không nên chạy trong CI/CD?

    ```
    - Test cần external dependency: database, Kafka… (nếu không mock)
    - Test có sleep/delay dài
    - Benchmark (trừ khi đo riêng)
    
    → Dùng tag // +build để tách test chạy riêng hoặc manual.
    ```

*   **Câu hỏi:** Có thể test private function trong Go không?

    ```
    Có – đặt test trong cùng package.
    
    Go không có visibility strict như Java/C# → test private function bằng cách đặt _test.go cùng thư mục.
    ```


- - -

# 14\. Debugging, Race Condition, Deadlock

## 🧠 Khái niệm tổng quát

*   **Race condition**: khi nhiều goroutine truy cập/ghi vào vùng nhớ mà không đồng bộ → dữ liệu không nhất quán, hành vi ngẫu nhiên.
*   **Deadlock**: khi tất cả goroutine đều block → chương trình đứng im vĩnh viễn.

## 🔍 Phân tích chuyên sâu: Các lỗi race phổ biến

*   **1\. Ghi/đọc vào shared variable mà không có lock**
*   **2\. Channel write không có goroutine nhận → block → deadlock**
*   **3\. Truy cập slice/map cùng lúc → race hoặc panic**
*   **4\. Database tx/context bị ghi đè qua goroutine**
*   **5\. Truy cập pointer không đồng bộ**

## 💣 Ví dụ lỗi Race Condition thực tế

```
// Ghi vào biến x từ nhiều goroutine (race)
var x int
for i := 0; i < 100; i++ {
    go func() {
        x++
    }()
}
```

```
// Race khi truy cập slice cùng lúc
var nums = []int{}
for i := 0; i < 10; i++ {
    go func(val int) {
        nums = append(nums, val) // race!
    }(i)
}
```

```
// Race khi dùng cùng transaction
func main() {
    tx, _ := db.BeginTx(ctx, nil)

    go func() {
        tx.Exec("UPDATE users SET ...") // lỗi nếu context bị cancel hoặc tx dùng sai thread
    }()
}
```

## 🧱 Deadlock thường gặp

```
// Channel không có người nhận → block mãi mãi
ch := make(chan int)
ch <- 1 // block
```

```
// Goroutine chờ nhau theo vòng tròn
mu1, mu2 := sync.Mutex{}, sync.Mutex{}

go func() {
    mu1.Lock(); defer mu1.Unlock()
    mu2.Lock(); defer mu2.Unlock()
}()

go func() {
    mu2.Lock(); defer mu2.Unlock()
    mu1.Lock(); defer mu1.Unlock()
}()
```

## 🔍 Phân tích nguyên nhân & fix

*   `append()` trên slice không đồng bộ cần dùng `sync.Mutex` hoặc `channel` làm queue
*   Không chia sẻ `tx` hoặc `context` giữa goroutine khi xử lý DB
*   Không dùng map hoặc slice không đồng bộ trong handler gốc
*   Luôn close channel ở phía gửi; tránh close 2 lần

## 🧪 Cách phát hiện bug race/deadlock

*   Dùng `go run -race` hoặc `go test -race` → hiển thị dòng code xảy ra race
*   Dùng `pprof` → theo dõi goroutine blocking
*   Dùng `runtime.NumGoroutine()` để kiểm soát leak

## 📌 Gợi ý kỹ thuật hệ thống

*   Luôn xác định biến shared cần bảo vệ bằng lock hoặc truyền dữ liệu qua channel
*   Truyền dữ liệu → dùng channel; chia sẻ trạng thái → dùng mutex
*   Tránh close channel từ nhiều nơi
*   Viết log theo traceID để dễ theo dấu goroutine trong production

## 🎯 Câu hỏi phỏng vấn

*   **Câu hỏi:** Race condition là gì? Khi nào xảy ra trong Go?

    ```
    Xảy ra khi 2+ goroutine truy cập/ghi cùng biến mà không đồng bộ hóa.
    
    → Dẫn đến hành vi ngẫu nhiên, dữ liệu sai, crash khó trace.
    
    Ví dụ: update biến global, slice, map cùng lúc mà không dùng mutex hoặc channel.
    ```

*   **Câu hỏi:** Làm sao detect race condition?

    ```
    Chạy Go với flag: go run -race hoặc go test -race.
    
    → In ra vị trí đọc/ghi trùng nhau giữa goroutine → dễ trace.
    
    Chỉ phát hiện được race thực sự xảy ra trong lúc chạy – cần đủ load.
    ```

*   **Câu hỏi:** Deadlock là gì? Có thể xảy ra khi nào trong Go?

    ```
    Khi tất cả goroutine đều block và không còn ai tiến lên → chương trình “treo”.
    
    Thường do:
    ✔ Gửi vào channel mà không ai nhận
    ✔ Goroutine chờ nhau (mutex vòng)
    ✔ Close channel không đúng luồng
    ```

*   **Câu hỏi:** Những kiểu resource nào dễ gây race trong Go?

    ```
    ✔ Map hoặc slice (không đồng bộ)
    ✔ Pointer dùng chung
    ✔ Counter, biến trạng thái toàn cục
    ✔ context hoặc tx của DB bị share giữa goroutine
    ```

*   **Câu hỏi:** Làm sao xử lý dữ liệu shared giữa goroutine an toàn?

    ```
    ✔ Dùng sync.Mutex hoặc sync.RWMutex
    ✔ Dùng channel để truyền dữ liệu thay vì chia sẻ
    ✔ Nếu là cấu trúc lớn – clone hoặc copy trước khi dùng
    ```

*   **Câu hỏi:** Có nên dùng map trong goroutine? Làm sao cho thread-safe?

    ```
    Mặc định map không thread-safe.
    
    → Dùng sync.Map hoặc lock thủ công (mutex) khi cần concurrent read/write.
    ```

*   **Câu hỏi:** Cách tránh deadlock khi dùng mutex?

    ```
    ✔ Luôn defer mu.Unlock() ngay sau lock
    ✔ Tránh lock lồng nhau hoặc nhiều mutex cùng lúc
    ✔ Nếu bắt buộc dùng 2+ mutex → định nghĩa rõ thứ tự lock (lock hierarchy)
    ```

*   **Câu hỏi:** Làm sao debug goroutine bị leak hoặc stuck?

    ```
    ✔ Dùng pprof + runtime.NumGoroutine() → kiểm tra số lượng goroutine sống
    ✔ Gửi SIGQUIT → lấy full stack trace của tất cả goroutine
    ✔ Log theo trace-id và trạng thái channel để trace dòng chảy
    ```

*   **Câu hỏi:** Khi nào nên dùng channel vs mutex?

    ```
    Channel: dùng khi truyền dữ liệu qua lại giữa goroutine (message passing).
    Mutex: dùng khi nhiều goroutine cần cùng đọc/ghi biến chung.
    
    Rule:
    ✔ Nếu chia sẻ → mutex
    ✔ Nếu trao đổi → channel
    ```

*   **Câu hỏi:** Gợi ý kỹ thuật nào giúp tránh bug race trong hệ thống lớn?

    ```
    ✔ Wrap shared resource trong struct + lock rõ ràng
    ✔ Hạn chế dùng biến global
    ✔ Viết test có -race + chạy stress test
    ✔ Ghi log theo trace-id
    ✔ Dùng context để lifecycle control (timeout/cancel đúng cách)
    ```


- - -

# 15\. Memory Management & Escape Analysis

## 🧠 Tổng quan về quản lý bộ nhớ trong Go

*   Go sử dụng **managed memory model** – bạn không cần malloc/free thủ công.
*   Go runtime quyết định biến được cấp phát trên stack hay heap.
*   **Escape Analysis**: quá trình xác định biến có “thoát” khỏi scope hiện tại không → nếu có → đưa lên heap.

## 🔍 Stack vs Heap

*   **Stack**: nhanh, vùng nhớ tạm thời, tự động reclaim.
*   **Heap**: cấp phát động, cần GC quét để reclaim, chậm hơn.
*   Escape sang heap = tăng áp lực GC, giảm hiệu năng.

## 💡 Ví dụ: khi nào biến escape

```
// Không escape - nằm trên stack
func stackAlloc() int {
    x := 42
    return x
}

// Escape - trả về pointer → lên heap
func heapAlloc() *int {
    x := 42
    return &x
}
```

## 🧪 Xem kết quả Escape Analysis

```
go build -gcflags="-m" ./main.go
```

Kết quả:

```
# command-line-arguments
./main.go:10:6: moved to heap: x
```

## 📌 Gợi ý tối ưu

*   Tránh trả về pointer đến local var nếu không cần thiết.
*   Tránh giữ reference đến biến lớn trong closure nếu closure sống lâu.
*   Chia nhỏ function để giúp compiler nhận ra vùng không cần escape.

## 🎯 Câu hỏi phỏng vấn

*   **Câu hỏi:** Stack và Heap khác nhau như thế nào trong Go?

    ```
    Stack:
    ✔ Nhanh, nhỏ (~KB)
    ✔ Auto reclaim khi hàm kết thúc
    ✔ Dùng cho biến local không escape
    
    Heap:
    ✔ Lớn, chậm hơn
    ✔ Cần GC để giải phóng
    ✔ Dùng cho biến escape ra ngoài scope
    ```

*   **Câu hỏi:** Escape Analysis là gì? Có tác dụng gì?

    ```
    Process compiler kiểm tra biến có “thoát” khỏi scope không.
    
    ✔ Nếu không escape → cấp phát trên stack (nhanh hơn)
    ✔ Nếu escape → lên heap → GC xử lý
    
    → Giúp tối ưu memory và giảm áp lực GC.
    ```

*   **Câu hỏi:** Làm sao kiểm tra biến có bị escape không?

    ```
    Chạy:
    go build -gcflags="-m"
    
    → Compiler sẽ in log:
    moved to heap → biến bị escape
    → Có thể refactor lại code để tránh.
    ```

*   **Câu hỏi:** Những tình huống phổ biến khiến biến escape?

    ```
    ✔ Trả về pointer đến local var
    ✔ Closure giữ biến ngoài scope
    ✔ Interface gán từ biến concrete
    ✔ Sử dụng reflect, fmt.Sprintf() với tham chiếu
    ```

*   **Câu hỏi:** Có nên return pointer của struct không?

    ```
    Nên nếu:
    ✔ Struct lớn → tránh copy
    ✔ Sống lâu hoặc cần mutate sau khi return
    
    Nhưng phải cân nhắc escape lên heap và GC cost.
    ```

*   **Câu hỏi:** Làm sao tránh escape không cần thiết?

    ```
    ✔ Dùng value thay vì pointer nếu không mutate
    ✔ Tránh closure giữ biến lớn
    ✔ Tránh trả pointer ra ngoài nếu không cần
    ✔ Sử dụng func nhỏ giúp compiler phân tích tốt hơn
    ```

*   **Câu hỏi:** Go có thể inline function không? Tác động đến memory?

    ```
    Có. Inline giúp giảm call overhead và giúp compiler phân tích escape tốt hơn.
    
    → Function nhỏ, không gọi nhiều hàm khác dễ được inline.
    ```

*   **Câu hỏi:** Cấp phát động nhiều có ảnh hưởng gì đến GC?

    ```
    ✔ Tăng heap size → GC chạy nhiều hơn
    ✔ Dễ tạo object sống lâu → cost lớn hơn khi mark/sweep
    → Nên reuse object (e.g. sync.Pool) khi cần.
    ```

*   **Câu hỏi:** Làm sao kiểm tra code có tạo nhiều GC pressure?

    ```
    ✔ Dùng pprof → profile alloc
    ✔ Dùng go test -bench -benchmem để đo alloc/op
    ✔ Kiểm tra lượng heap tăng và thời gian GC qua log / Prometheus
    ```

*   **Câu hỏi:** Có nên dùng `sync.Pool`? Khi nào dùng?

    ```
    Có – dùng để reuse object tạm thời (e.g. buffer, struct lớn) giúp:
    ✔ Giảm GC pressure
    ✔ Tăng performance
    
    Không dùng cho object sống lâu hoặc mang state quan trọng.
    ```


- - -

# 16\. Garbage Collection và Runtime Scheduler

## 🧠 Tổng quan GC và Scheduler

*   **Garbage Collection (GC)**: hệ thống tự động giải phóng bộ nhớ không còn dùng nữa trên heap.
*   **Go Scheduler**: cơ chế quản lý goroutine → ánh xạ M:N (many goroutine → many OS threads).

## 🧠 GC: cơ chế, đặc điểm

*   Go sử dụng GC kiểu **tracing + concurrent + generational**.
*   GC không dừng toàn bộ chương trình (stop-the-world rất ngắn).
*   Kích hoạt khi heap lớn, runtime trigger, hoặc gọi `runtime.GC()`.

## 💡 Scheduler và GOMAXPROCS

*   Scheduler gồm:
    *   **G**: Goroutine
    *   **M**: OS Thread
    *   **P**: Processor – phân phối G lên M
*   `GOMAXPROCS`: giới hạn số core Go được dùng đồng thời.

## 📌 Tối ưu

*   Dọn reference không dùng để GC thu hồi nhanh hơn.
*   Hạn chế object lớn sống lâu → giảm áp lực GC.
*   Dùng `sync.Pool` để reuse object.

## 🧠 GC hoạt động như thế nào (Deep Working)

*   Go GC hoạt động theo chu kỳ, gồm 3 phase chính:
    1.  **STW - Stop the World (Prepare)**: tạm dừng toàn bộ goroutine để xác định root set.
    2.  **Mark phase (concurrent)**: đánh dấu tất cả object còn được tham chiếu.
    3.  **Sweep phase**: thu dọn object không còn dùng, trả lại heap.
*   STW diễn ra ngắn (~100µs), sau đó goroutine tiếp tục chạy song song với phase mark.
*   GC sử dụng **tri-color marking**: white (chưa quét), grey (đang quét), black (quét xong).
*   Ưu tiên dọn object nhỏ, ngắn hạn (young gen) – giống generational GC trong JVM.

## ⏱ Khi nào GC được trigger?

*   Heap growth vượt ngưỡng (`GOGC` % growth)
*   Manually gọi `runtime.GC()`
*   Trình runtime thấy tỷ lệ goroutine idle phù hợp

## ⚙ Tham số điều chỉnh GC

*   `GOGC`: tỉ lệ tăng heap để kích hoạt GC (default 100 → GC chạy khi heap gấp đôi)
*   Set `GOGC=off` để disable GC (chỉ dùng khi debug)

## 📌 Ảnh hưởng hệ thống & Tối ưu

*   GC càng chạy thường xuyên → giảm memory usage nhưng tốn CPU.
*   GC chạy ít → tăng latency request do heap phình to.
*   **Optimize:**
    *   Tránh return pointer → giữ stack allocation
    *   Dọn nil object sớm (giúp mark nhanh)
    *   Dùng `sync.Pool` để giảm new()

## 🎯 Câu hỏi phỏng vấn

*   **Câu hỏi:** Garbage Collector (GC) trong Go hoạt động như thế nào?

    ```
    GC trong Go là dạng:
    ✔ Tracing → tìm object được tham chiếu
    ✔ Concurrent → chạy song song với goroutine
    ✔ Generational → ưu tiên dọn object mới
    
    Chu kỳ gồm:
    1. STW (Stop The World): xác định root
    2. Mark (concurrent): đánh dấu object còn sống
    3. Sweep: thu hồi vùng nhớ không còn dùng
    ```

*   **Câu hỏi:** GOGC là gì? Ảnh hưởng như thế nào đến GC?

    ```
    GOGC là tỉ lệ tăng heap để kích hoạt GC (default = 100):
    ✔ GOGC=100 → khi heap tăng 100% → GC chạy
    ✔ GOGC thấp → GC chạy thường xuyên hơn (CPU tốn), heap nhỏ
    ✔ GOGC cao → ít GC, heap lớn hơn (RAM nhiều)
    
    → Tuỳ chọn theo profile CPU/RAM hệ thống.
    ```

*   **Câu hỏi:** Khi nào GC được trigger?

    ```
    ✔ Heap vượt ngưỡng tăng của GOGC
    ✔ Manual gọi runtime.GC()
    ✔ Go runtime cảm nhận load phù hợp
    ✔ Khi không còn goroutine active (idle state)
    ```

*   **Câu hỏi:** Có nên dùng `runtime.GC()` không?

    ```
    Chỉ dùng khi thật sự cần:
    ✔ Benchmark test để đo clean memory
    ✔ Khi biết rõ thời điểm muốn quét sạch trước khi process lớn
    
    Không dùng trong code production thường xuyên → ảnh hưởng performance.
    ```

*   **Câu hỏi:** Những kỹ thuật tối ưu giúp giảm áp lực GC?

    ```
    ✔ Tránh cấp phát động không cần thiết
    ✔ Dùng sync.Pool để reuse object
    ✔ Xoá reference object sớm (gán nil)
    ✔ Tránh giữ object lâu trong closure hoặc global
    ```

*   **Câu hỏi:** Runtime scheduler của Go là gì? Làm việc ra sao?

    ```
    Là hệ thống M:N scheduler:
    ✔ G: Goroutine
    ✔ M: OS Thread
    ✔ P: Processor (runtime logical processor)
    
    → P lên lịch G chạy trên M. P nhiều = nhiều goroutine xử lý song song.
    → GOMAXPROCS điều chỉnh số P (số core dùng).
    ```

*   **Câu hỏi:** GOMAXPROCS là gì? Có ảnh hưởng gì?

    ```
    GOMAXPROCS = số core logic Go sử dụng song song:
    ✔ Default = runtime.NumCPU()
    ✔ Tăng/làm giảm concurrency xử lý
    ✔ Có thể điều chỉnh để kiểm soát load CPU
    
    → Dùng runtime.GOMAXPROCS(N) để thiết lập.
    ```

*   **Câu hỏi:** Go quản lý goroutine như thế nào?

    ```
    ✔ Goroutine rất nhẹ (~2KB stack)
    ✔ Khi block I/O → runtime chuyển goroutine khác lên thread
    ✔ Stack tự động grow/shrink → tránh lỗi stack overflow
    ✔ Scheduler chuyển goroutine liên tục (preemptive)
    ```

*   **Câu hỏi:** GC có ảnh hưởng đến latency không? Làm sao hạn chế?

    ```
    Có. Dù GC concurrent, nhưng vẫn có STW (ngắn).
    
    → Nếu object lớn hoặc quá nhiều → mark chậm, sweep tốn time → tăng latency.
    ✔ Dùng buffer object
    ✔ Giảm alloc per request
    ✔ Xem log GC hoặc Prometheus GC time
    ```

*   **Câu hỏi:** Dấu hiệu nào cho thấy hệ thống bị GC pressure?

    ```
    ✔ Tăng đột biến GC pause time
    ✔ Số lần GC nhiều bất thường
    ✔ CPU cao nhưng throughput thấp
    ✔ Memory graph "sawtooth" dày đặc
    
    → Phân tích bằng pprof hoặc Prometheus + grafana
    ```


- - -

# 17\. Build System và Cross Compilation

## 🧠 Tổng quan hệ thống build trong Go

*   Go dùng command line tool \`go build\` để biên dịch source code thành binary standalone.
*   Không cần makefile, không cần linker script – tất cả được tích hợp sẵn trong Go toolchain.

## 🔍 Cơ chế hoạt động build

*   `go build` thực hiện:
    1.  Phân tích dependency từ `import`
    2.  Resolve module qua `go.mod`
    3.  Compile từng package → assemble → link thành binary
*   Build output là binary tự đủ (no external runtime needed)

## 🌍 Cross Compilation

*   Go hỗ trợ cross-build mặc định – chỉ cần set biến môi trường:

```
GOOS=linux GOARCH=amd64 go build -o app-linux
GOOS=windows GOARCH=386 go build -o app.exe
```

## 📌 Ảnh hưởng hệ thống & Tối ưu

*   Go build nhanh, không cần toolchain ngoài → phù hợp CI/CD realtime.
*   Binary Go tự đủ → deploy cực kỳ dễ dàng.
*   Dọn dependency bằng `go mod tidy` để build sạch và nhẹ hơn.

## 🎯 Câu hỏi phỏng vấn

*   **Câu hỏi:** Go biên dịch code như thế nào? Có qua linker không?

    ```
    Có. go build thực hiện:
    1. Phân tích dependency từ import
    2. Compile từng package riêng biệt
    3. Dùng linker tích hợp để build ra binary
    
    → Binary là static, standalone – không cần external runtime.
    ```

*   **Câu hỏi:** Sự khác biệt giữa `go run` và `go build` là gì?

    ```
    go run: build tạm và chạy (file binary ở /tmp)
    go build: build binary vĩnh viễn → deploy, debug, profile
    
    → go run phù hợp test nhanh, go build dùng cho release.
    ```

*   **Câu hỏi:** Làm sao để build cho hệ điều hành khác?

    ```
    Set biến môi trường:
    GOOS: OS (linux, windows, darwin)
    GOARCH: CPU arch (amd64, arm64, 386,...)
    
    Ví dụ:
    GOOS=linux GOARCH=amd64 go build -o app
    ```

*   **Câu hỏi:** Có thể build Go binary không có symbol/debug info?

    ```
    Có. Dùng flags:
    go build -ldflags="-s -w"
    
    ✔ -s: bỏ symbol table
    ✔ -w: bỏ DWARF (debug info)
    
    → Binary nhỏ hơn → tốt cho release.
    ```

*   **Câu hỏi:** Có cần Makefile khi build Go project không?

    ```
    Không bắt buộc. Go đã có toolchain tích hợp:
    ✔ Dependency resolved qua go.mod
    ✔ Lệnh build/test/format/lint đều CLI native
    
    → Nhưng Makefile vẫn hữu ích khi cần orchestration nhiều bước hoặc multi target.
    ```

*   **Câu hỏi:** Làm sao kiểm tra version Go của 1 project?

    ```
    Kiểm tra file go.mod → dòng go 1.21
    → Đây là minimal version required (used for stdlib + syntax).
    ```

*   **Câu hỏi:** Build Go image nhỏ trong Docker như thế nào?

    ```
    Dùng multi-stage build:
    1. Base: build binary
    2. Final: copy binary vào image nhẹ (e.g. alpine)
    
    → Ví dụ:
    FROM golang:1.21 AS builder  
    WORKDIR /app  
    COPY . .  
    RUN go build -o main  
    
    FROM alpine  
    COPY --from=builder /app/main /main  
    ENTRYPOINT ["/main"]
    ```

*   **Câu hỏi:** Có thể build plugin động (shared object) trong Go không?

    ```
    Có – dùng:
    go build -buildmode=plugin
    
    → Nhưng chỉ hỗ trợ Linux, khó debug và có nhiều hạn chế → không phổ biến production.
    ```

*   **Câu hỏi:** Làm sao verify một binary build có đủ symbol/debug cho pprof?

    ```
    Chạy:
    go tool nm ./your_binary → kiểm tra symbol table
    
    Nếu bị strip (-ldflags="-s -w") → không dùng được pprof/tracing tốt.
    ```

*   **Câu hỏi:** Những tip để tối ưu tốc độ build Go project lớn?

    ```
    ✔ Dùng module riêng cho từng repo (module split)
    ✔ Tránh import vòng
    ✔ Dọn go.mod
    ```


- - -

# 18\. Generics: Type Parameter và Constraint

## 🧠 Tổng quan về Generics trong Go

*   Go hỗ trợ generics từ bản **1.18+** thông qua **type parameter**.
*   Generics giúp bạn viết function, struct, method có khả năng tái sử dụng, nhưng vẫn giữ **type-safety**.
*   Không còn cần ép kiểu bằng interface trống hay code lặp cho từng kiểu.

## 🔎 Tổng hợp các loại áp dụng generics

| Loại | Áp dụng | Ví dụ |
| --- | --- | --- |
| **Function** | Hàm dùng chung cho nhiều kiểu | `func Equal[T comparable](a, b T)` |
| **Struct** | Generic container, cache, stack... | `type Stack[T any]` |
| **Map** | Không generic trực tiếp  <br>nhưng có thể wrap qua struct | `type Store[K comparable, V any]` |
| **Slice** | Dùng tốt với hàm `Filter`, `Map`, `Reduce` | `func Filter[T any](in []T, fn func(T) bool)` |
| **Interface** | Gắn constraint để enforce behavior | `type Adder[T any] interface { Add(T) T }` |
| **Function type** | Generics áp dụng cho callback/higher order | `func Map[T any, R any](in []T, f func(T) R)` |

## 📦 Ví dụ tổng hợp áp dụng thực tế

```
// Generic function
func Max[T constraints.Ordered](a, b T) T {
    if a > b { return a }
    return b
}

// Generic struct
type Cache[K comparable, V any] struct {
    store map[K]V
}

// Generic slice operator
func Filter[T any](in []T, predicate func(T) bool) []T {
    var out []T
    for _, v := range in {
        if predicate(v) {
            out = append(out, v)
        }
    }
    return out
}
```

## 🧠 Về constraints

*   `any`: đại diện cho tất cả các kiểu
*   `comparable`: dùng cho key map, so sánh `==`, `!=`
*   `constraints.Ordered`: dùng cho kiểu có thể `<, >`
*   Có thể định nghĩa **interface constraint riêng** nếu muốn enforce method

## 🧠 Ưu điểm vượt trội

*   Loại bỏ lặp code cho mỗi kiểu
*   Đảm bảo type safety mà không cần interface{} + type assertion
*   Gần hơn với expressive pattern của functional programming

## ⚠️ Bất lợi và giới hạn hiện tại

*   Không có runtime type inference hoặc reflection trên T
*   Không thể dùng toán tử tùy ý (ngoài constraint)
*   Dễ lạm dụng → code khó đọc, debug kém
*   Không tương thích tốt với tất cả third-party lib

## 📌 Gợi ý khi dùng generics trong hệ thống

*   Dùng cho lib xử lý collection: Pagination, Filter, Sorting...
*   Tránh dùng generics trong API layer hoặc business logic đặc thù
*   Viết constraint rõ ràng để code dễ đọc, không để `[T any]` quá rộng
*   Dùng generics kết hợp interface để enforce behavior rõ ràng

## 🎯 Câu hỏi phỏng vấn

*   **Câu hỏi:** Go hỗ trợ Generics từ phiên bản nào? Vì sao trước đây không có?

    ```
    Từ Go 1.18+
    Trước đây Go ưu tiên đơn giản, explicit type, tránh runtime generic → khó maintain.
    Generics thêm vào để tăng reusability nhưng vẫn giữ compile-time safety.
    ```

*   **Câu hỏi:** Generics có thể áp dụng cho những loại nào?

    ```
    ✔ Function: func[T any](a T) T
    ✔ Struct: type Box[T any] struct
    ✔ Method receiver
    ✔ Interface constraint
    Không áp dụng cho constant/generic enum.
    ```

*   **Câu hỏi:** `comparable` và `constraints.Ordered` khác gì nhau?

    ```
    comparable: hỗ trợ ==, != (dùng làm key map, so sánh đơn giản)
    
    Ordered: hỗ trợ <, >, <=, >= (sắp xếp được)
    → Ordered bao gồm: int, float, string
    ```

*   **Câu hỏi:** Có thể dùng Generics cho interface được không?

    ```
    Có – định nghĩa interface constraint:
    type Adder[T any] interface { Add(T) T }
    
    → Áp dụng cho struct, func muốn enforce method cụ thể.
    ```

*   **Câu hỏi:** Ưu điểm và bất lợi của Generics trong Go là gì?

    ```
    Ưu điểm:
    ✔ Reuse code với type safety
    ✔ Không cần dùng interface{} + type assertion
    ✔ Gần với functional pattern (map/filter)
    
    Nhược điểm:
    ✘ Cú pháp dài, khó đọc khi lồng nhau
    ✘ IDE/debug support chưa tốt
    ✘ Không hỗ trợ tất cả pattern như overloading
    ```

*   **Câu hỏi:** Generics compile thành code như thế nào? Có bị tạo nhiều version không?

    ```
    Go sử dụng monomorphization partial:
    ✔ Với type cụ thể: tạo version riêng (như template C++)
    ✔ Với interface hoặc any: dùng 1 version dùng interface runtime
    
    → Không tạo quá nhiều binary bloating như C++, nhưng vẫn đảm bảo type safety.
    ```

*   **Câu hỏi:** Khi nào nên dùng Generics, khi nào nên tránh?

    ```
    Dùng:
    ✔ Collection utilities: Map, Filter, Stack, Pagination...
    ✔ Logic xử lý data không phụ thuộc type
    ✔ Middleware reusable
    
    Tránh:
    ✘ Business logic đặc thù
    ✘ Giao diện API public → không rõ ràng
    ✘ Khi cần reflection hoặc serialization phức tạp
    ```

*   **Câu hỏi:** Có thể gọi method cụ thể trên type param không?

    ```
    Chỉ khi constraint interface khai báo method đó:
    type JSONable interface { MarshalJSON() ([]byte, error) }
    func ToJSON[T JSONable](v T) []byte
    
    → Nếu T any, không thể gọi method vì không biết method tồn tại.
    ```

*   **Câu hỏi:** Generics có thể kết hợp với `sync.Pool` hay channel không?

    ```
    ✔ Có thể tạo GenericPool[T any] bọc sync.Pool → hỗ trợ reuse object theo kiểu cụ thể
    ✔ Channel hiện không hỗ trợ generic type param cho type channel declaration
    ```

*   **Câu hỏi:** Có cần viết test cho từng type khi dùng Generics không?

    ```
    Không bắt buộc, nhưng nên test các type phổ biến để đảm bảo logic đúng theo constraint.
    → Table-driven test nên dùng nhiều case type khác nhau.
    ```


- - -

# 19\. API & Middleware: REST, gRPC, Interceptor

## 🧠 So sánh HTTP vs gRPC

| Tiêu chí | HTTP REST | gRPC |
| --- | --- | --- |
| Protocol | HTTP/1.1, JSON | HTTP/2, Protocol Buffers |
| Contract | Không ràng buộc (OpenAPI optional) | Strict contract qua .proto |
| Serialization | Text (JSON) | Binary (Protobuf) – nhanh hơn |
| Streaming | Khó / chunked encoding | Built-in (client, server, bidi) |
| Tooling | Curl, Postman | grpcurl, Evans, protobuf compiler |
| Use case | Public API, Gateway, dễ debug | Service internal, high perf |

## 🧰 Các thư viện phổ biến

*   `net/http`: core lib, ổn định, native middleware
*   `gin`: nhanh, có middleware, bind JSON dễ
*   `echo`: giống gin, thêm nhiều tiện ích: group, context-rich
*   `grpc-go`: lib chính thống gRPC từ Google

## 📦 Middleware là gì?

*   Hàm bao ngoài handler chính → xử lý logic phụ: auth, log, recovery...
*   Dùng chain để xây dựng pipeline xử lý request.

```
// Middleware trong gin
func AuthMiddleware(c *gin.Context) {
    token := c.GetHeader("Authorization")
    if token == "" {
        c.AbortWithStatus(401)
        return
    }
    c.Next()
}
```

## 🔧 gRPC: cấu trúc và generate code

```
syntax = "proto3";

package helloworld;

service Greeter {
  rpc SayHello (HelloRequest) returns (HelloReply);
}

message HelloRequest {
  string name = 1;
}
message HelloReply {
  string message = 1;
}
```

```
# Generate Go code
protoc --go_out=. --go-grpc_out=. example.proto
```

## 💬 Interceptor (gRPC middleware)

*   Interceptor là middleware cho gRPC – hoạt động trước/sau RPC logic.
*   Áp dụng cho: logging, tracing, recovery, auth, inject header...
*   Chia 2 loại: `UnaryInterceptor` và `StreamInterceptor`

```
func UnaryLogger(
    ctx context.Context,
    req interface{},
    info *grpc.UnaryServerInfo,
    handler grpc.UnaryHandler,
) (resp interface{}, err error) {
    log.Println("RPC:", info.FullMethod)
    return handler(ctx, req)
}
```

## 📬 Header / Metadata truyền trong gRPC

```
// Client gửi header
md := metadata.Pairs("x-trace-id", "abc123")
ctx := metadata.NewOutgoingContext(context.Background(), md)

// Server đọc header
md, ok := metadata.FromIncomingContext(ctx)
traceID := md["x-trace-id"]
```

## 📌 Gợi ý hệ thống

*   REST phù hợp public API, dễ debug.
*   gRPC phù hợp nội bộ → high throughput, stream.
*   Dùng interceptor để không viết lại logging/auth/tracing ở mọi handler.
*   Header/metadata giúp trace qua nhiều service – nhất là trong hệ thống microservice.

## 🧠 Các loại RPC trong gRPC

*   **Unary RPC**: 1 request → 1 response (giống HTTP truyền thống)
*   **Server Streaming**: 1 request → nhiều response (client đọc liên tục)
*   **Client Streaming**: nhiều request → 1 response (client gửi liên tục rồi server trả kết quả)
*   **Bidirectional Streaming**: nhiều request ↔ nhiều response (giống WebSocket)

```
service Chat {
  rpc SendMessage (Message) returns (Ack);               // Unary
  rpc StreamMessages (Room) returns (stream Message);    // Server Stream
  rpc UploadFile (stream Chunk) returns (UploadStatus);  // Client Stream
  rpc ChatStream (stream Message) returns (stream Message); // BiDi Stream
}
```

## 📦 REST vs gRPC: Body và Serialization

| Aspect | REST (JSON) | gRPC (Protobuf) |
| --- | --- | --- |
| Request/Response | Body là JSON (text) | Binary protobuf |
| Size | Lớn hơn vì nhiều ký tự và field name | Nhỏ hơn nhờ encoding |
| Speed | Parse chậm hơn, dễ debug | Parse nhanh hơn, khó debug bằng tay |
| Streaming | Khó, cần chunked/long polling | Built-in stream HTTP/2 |

## 🔗 Giao tiếp giữa các service (microservice)

*   gRPC được tối ưu để dùng giữa các service trong nội bộ:
*   Ưu điểm:
    *   Strict schema (protoc)
    *   Compact binary → tiết kiệm băng thông
    *   Bi-directional streaming: realtime và push data dễ dàng
    *   Code generation: client/server auto → tránh bug manual
*   Các service gRPC có thể kết nối nhau qua:
    *   Static IP hoặc service discovery (Consul, Kubernetes DNS)
    *   gRPC-Gateway để expose HTTP → gRPC hybrid
    *   Interconnect thông qua Envoy Proxy hoặc gRPC LoadBalancer

## 🚀 Tối ưu hóa gRPC trong hệ thống

*   Định nghĩa proto rõ ràng, dùng option để map HTTP nếu cần gateway
*   Truyền trace-id qua metadata để theo dõi request
*   Dùng interceptor để chia nhỏ concern (log, validate, panic recovery)
*   Ưu tiên bidirectional stream cho các use case realtime (chat, tracking...)

## 🎯 Câu hỏi phỏng vấn

### 🔹 REST API

*   **Câu hỏi:** So sánh `net/http`, `gin`, `echo`?

    ```
    net/http: lib gốc, cần tự code nhiều.
    gin: nhanh, hỗ trợ middleware tốt.
    echo: tiện ích nhiều hơn gin, rõ ràng hơn.
    ```

*   **Câu hỏi:** Làm middleware auth hoặc log trong REST như thế nào?

    ```
    func Middleware(next http.Handler) http.Handler {
      return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        log.Println("request", r.URL.Path)
        next.ServeHTTP(w, r)
      })
    }
    ```

*   **Câu hỏi:** Truyền trace-id từ client đến log hệ thống?

    ```
    Header: x-trace-id
    → Đọc từ header, inject vào context, ghi log theo context.
    ```


### 🔹 gRPC (Unary, Stream)

*   **Câu hỏi:** Ưu điểm của gRPC so với REST?

    ```
    - Sử dụng Protobuf → nhỏ, nhanh
    - Hỗ trợ stream (2 chiều)
    - Contract rõ ràng → generate code
    - Thích hợp cho internal service
    ```

*   **Câu hỏi:** Có những kiểu RPC nào trong gRPC?

    ```
    1. Unary RPC (1-1)
    2. Server Stream (1 request → nhiều response)
    3. Client Stream (nhiều request → 1 response)
    4. Bidirectional Stream (2 chiều song song)
    ```

*   **Câu hỏi:** Khi nào dùng client stream?

    ```
    Upload file, push log batch → client gửi nhiều phần rồi CloseAndRecv()
    ```

*   **Câu hỏi:** Cách truyền metadata trong gRPC?

    ```
    ctx := metadata.NewOutgoingContext(ctx, metadata.Pairs("x-trace-id", "abc"))
    → Server dùng metadata.FromIncomingContext(ctx)
    ```

*   **Câu hỏi:** Có thể map gRPC → REST không?

    ```
    Có. Dùng grpc-gateway hoặc Envoy gRPC Transcoding:
    option (google.api.http) = { post: "/v1/foo", body: "*" }
    ```


### 🔹 Interceptor (gRPC Middleware)

*   **Câu hỏi:** Interceptor là gì? Có mấy loại?

    ```
    UnaryInterceptor → áp dụng cho RPC thường.
    StreamInterceptor → áp dụng cho RPC stream.
    → Tương đương middleware trong REST.
    ```

*   **Câu hỏi:** Viết interceptor logging đơn giản?

    ```
    func LogInterceptor(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {
      log.Println("gRPC:", info.FullMethod)
      return handler(ctx, req)
    }
    ```

*   **Câu hỏi:** Có thể chain nhiều interceptor không?

    ```
    grpc.NewServer(grpc.ChainUnaryInterceptor(Auth, Log, Recover))
    ```


### 🔸 So sánh tổng hợp

*   **Câu hỏi:** Khi nào chọn REST, khi nào chọn gRPC?

    ```
    REST: public API, dễ debug, dễ tích hợp frontend.
    gRPC: nội bộ service, cần hiệu năng cao, hỗ trợ stream.
    ```

*   **Câu hỏi:** Có nên dùng cả REST + gRPC trong hệ thống?

    ```
    Có. Dùng gRPC nội bộ, expose HTTP bằng grpc-gateway cho external.
    ```

*   **Câu hỏi:** gRPC stream có bị race không? Cách xử lý?

    ```
    Stream là shared object → không nên gọi Send/Recv từ nhiều goroutine cùng lúc.
    → Phải serialize việc gọi Send hoặc Recv bằng channel hoặc mutex.
    ```


- - -

# 20\. Error Wrapping, Stacktrace, và Structured Logging

## 🧠 Tổng quan

*   Go xử lý lỗi qua giá trị kiểu `error` thay vì throw/catch.
*   **Error Wrapping**: giúp giữ lại gốc lỗi khi truyền qua nhiều lớp.
*   **Stacktrace**: dùng để trace ngược nguồn gốc lỗi → debug production.
*   **Structured Logging**: log có field rõ ràng (JSON/key-value) → dễ search, index, alert.

## 🔍 Error Wrapping (Go 1.13+)

```
if err := doSomething(); err != nil {
    return fmt.Errorf("gọi xử lý thất bại: %w", err)
}

if errors.Is(err, os.ErrNotExist) {
    // lỗi cụ thể
}

var pathErr *os.PathError
if errors.As(err, &pathErr) {
    fmt.Println("Path lỗi:", pathErr.Path)
}
```

## 📦 Stacktrace (pkg/errors hoặc zap)

```
err := errors.Wrap(err, "ngữ cảnh thêm")
fmt.Printf("%+v\\n", err) // đầy đủ stack trace
```

## 💡 Structured Logging (logrus, zap, zerolog)

```
log.WithFields(log.Fields{
    "user_id": 42,
    "action":  "create_order",
}).Error("Xảy ra lỗi")
```

## 📌 Gợi ý hệ thống

*   Always wrap error tại biên (usecase/service boundary)
*   Structured log để theo dõi, alert qua ELK / Grafana
*   Đính trace-id vào log → trace toàn hành trình request
*   Middleware → log panic, recover, status code, latency

## 🎯 Câu hỏi phỏng vấn

### 🔹 Error Wrapping & Stacktrace

*   **Câu hỏi:** Lợi ích của việc wrap error trong Go?

    ```
    - Giữ ngữ cảnh lỗi khi truyền qua các tầng.
    - Hỗ trợ trace chính xác gốc lỗi khi log/debug.
    - Dùng được với errors.Is, errors.As để phân tích lỗi sâu.
    ```

*   **Câu hỏi:** Viết ví dụ wrap và unwrap error?

    ```
    err := fmt.Errorf("gọi thất bại: %w", dbErr)
    if errors.Is(err, sql.ErrNoRows) { ... }
    if e, ok := err.(*MyCustomError); ok { ... }
    ```

*   **Câu hỏi:** Làm sao lấy được stack trace khi lỗi?

    ```
    Dùng pkg/errors:
    err := errors.Wrap(err, "ngữ cảnh thêm")
    fmt.Printf("%+v", err)
    ```


### 🔹 Structured Logging

*   **Câu hỏi:** Structured logging là gì? Khác gì với print log thường?

    ```
    Structured log = log dạng JSON hoặc key-value.
    → Dễ parse, lọc theo field (user_id, trace_id...).
    → Phù hợp với ELK, Loki, GCP log viewer...
    ```

*   **Câu hỏi:** So sánh logrus, zap, zerolog?

    ```
    - logrus: dễ dùng, phổ biến, chậm hơn do reflection.
    - zap: rất nhanh, JSON log, production ready.
    - zerolog: cực nhanh, write trực tiếp, API hơi khác.
    ```

*   **Câu hỏi:** Làm sao enrich log bằng trace-id trong context?

    ```
    traceID := ctx.Value("trace_id").(string)
    log.WithField("trace_id", traceID).Info("processing...")
    ```

*   **Câu hỏi:** Có nên log error raw hay wrap lại?

    ```
    → Nên wrap trước rồi log:
    log.Errorf("gọi backend: %v", err)
    → Dễ trace lỗi cụ thể, stack đầy đủ.
    ```


### 🔹 Best Practice

*   **Câu hỏi:** Có nên log lỗi ở tầng usecase không?

    ```
    Không nên. Tầng usecase nên trả lỗi có ngữ cảnh.
    → Logging chỉ nên đặt tại boundary: handler, cron, job worker.
    ```

*   **Câu hỏi:** Nên dùng `log.Printf` hay structured log trong prod?

    ```
    Không nên dùng Printf.
    → Dùng structured log để có thể trace theo field.
    ```

*   **Câu hỏi:** Vì sao cần log kèm trace-id hoặc request-id?

    ```
    Để theo dõi toàn bộ flow xử lý của 1 request xuyên qua nhiều service → dễ debug & quan sát production.
    ```


- - -

# 21\. Staticcheck, GolangCI-Lint, go vet, go fmt

## 🧠 Mục tiêu

*   Phát hiện lỗi tiềm ẩn, anti-pattern, bug chưa lộ bằng runtime.
*   Chuẩn hoá style code, đảm bảo tính nhất quán trong team.

## 🔍 Công cụ phổ biến

| Công cụ | Chức năng |
| --- | --- |
| `go fmt` | Format lại code theo chuẩn Go |
| `go vet` | Bắt lỗi logic (shadow, sai kiểu printf...) |
| `staticcheck` | Phân tích logic nâng cao: unreachable, nil check... |
| `golangci-lint` | Chạy nhiều linter cùng lúc, tích hợp CI |

## 💡 Ví dụ lỗi

```
fmt.Printf("%d", "abc") // sai kiểu → vet

if x == nil || x == nil { } // check thừa → staticcheck

unused := 123 // không dùng → unused
```

## ⚙ Cấu hình GolangCI-Lint

```
linters:
  enable:
    - govet
    - errcheck
    - staticcheck
    - unused
run:
  timeout: 3m
  tests: true
```

## 📌 Gợi ý áp dụng

*   Dùng `go fmt` trong pre-commit hoặc CI
*   Tích hợp golangci-lint vào GitHub Actions để check toàn bộ project
*   Dùng `//nolint` đúng mục tiêu – không suppress toàn file

## 🎯 Câu hỏi phỏng vấn

### 🔹 Kiểm tra & định dạng code

*   **Câu hỏi:** Khác biệt giữa `go fmt` và `go vet`?

    ```
    go fmt: định dạng lại code theo chuẩn Go (spacing, bracket...).
    go vet: phát hiện lỗi logic tiềm ẩn (printf sai format, shadow...).
    ```

*   **Câu hỏi:** `go vet` phát hiện được những lỗi nào?

    ```
    - Gọi printf sai định dạng
    - Gán biến bị shadow
    - Struct tag lỗi
    - Unreachable code...
    ```


### 🔹 Staticcheck & GolangCI-Lint

*   **Câu hỏi:** Staticcheck kiểm tra những gì?

    ```
    - Dead code (hàm không gọi tới)
    - Unused variable
    - Check điều kiện lặp vô nghĩa
    - Interface bị dùng sai logic...
    ```

*   **Câu hỏi:** GolangCI-Lint là gì? Dùng thế nào?

    ```
    GolangCI-Lint là tool tổng hợp nhiều linter (staticcheck, errcheck, govet...).
    → Dùng để check toàn bộ project, tích hợp CI/CD.
    ```

*   **Câu hỏi:** Làm sao disable 1 warning trong 1 dòng?

    ```
    //nolint:errcheck
    doSomething() // không bắt lỗi trả về
    ```

*   **Câu hỏi:** Lint không fail CI, bạn xử lý thế nào?

    ```
    - Đọc chi tiết log: lỗi format, unused, logic?
    - Dùng goimports/go fmt trước.
    - Nếu bất hợp lý → disable từng dòng bằng //nolint.
    ```


### 🔹 Best Practice & CI

*   **Câu hỏi:** Dòng lệnh CI phổ biến bạn dùng?

    ```
    go fmt ./...
    go vet ./...
    golangci-lint run
    go test -cover ./...
    gosec ./... (check security)
    ```

*   **Câu hỏi:** Vì sao nên bắt buộc dùng lint trong team?

    ```
    Đảm bảo code rõ ràng, nhất quán.
    Phát hiện lỗi sớm → giảm bug runtime.
    Tiết kiệm thời gian review code.
    ```

*   **Câu hỏi:** Có nên tắt toàn bộ warning linter?

    ```
    Không. Chỉ tắt từng dòng khi chắc chắn không ảnh hưởng logic.
    → Nếu tắt toàn bộ sẽ mất ý nghĩa static analysis.
    ```


- - -

# 22\. Design Patterns trong Go

## 🧠 Tổng quan

*   Go không ép dùng OOP – nhiều pattern cổ điển cần viết lại theo idiomatic Go.
*   Go ưu tiên composition, interface nhẹ và function-first.

## 📦 Các Pattern phổ biến trong Go

*   **Factory**: sinh object theo config
*   **Singleton**: duy nhất 1 instance global
*   **Strategy**: inject logic runtime
*   **Builder**: khởi tạo có cấu hình theo bước
*   **Decorator**: thêm behavior qua wrapper
*   **Functional Option**: idiomatic Go cho config linh hoạt

## 🏗 Functional Option – pattern Go ưu tiên

```
type Option func(*Server)

func WithTLS(enable bool) Option {
    return func(s *Server) {
        s.TLS = enable
    }
}
```

## 🏗 Factory Pattern

```
type DB interface { Connect() error }

type MySQL struct{}
func (MySQL) Connect() error { return nil }

func NewDB(engine string) DB {
    switch engine {
    case "mysql":
        return MySQL{}
    default:
        panic("unsupported")
    }
}
```

## 🔁 Singleton Pattern

```
var instance *Logger
var once sync.Once

func GetLogger() *Logger {
    once.Do(func() {
        instance = &Logger{}
    })
    return instance
}
```

## ⚙ Strategy Pattern

```
type Compressor interface {
    Compress(data string) string
}

type Gzip struct{}
func (Gzip) Compress(data string) string { return "GZIP:" + data }

func Run(c Compressor, data string) {
    fmt.Println(c.Compress(data))
}
```

## 🛠 Builder Pattern

```
type UserBuilder struct {
    u User
}
func (b *UserBuilder) Name(name string) *UserBuilder {
    b.u.Name = name; return b
}
func (b *UserBuilder) Build() User { return b.u }
```

## 🎁 Decorator Pattern

```
func LogWrap(fn func(string) string) func(string) string {
    return func(s string) string {
        fmt.Println("Start")
        res := fn(s)
        fmt.Println("Done")
        return res
    }
}
```

## 🧩 Functional Option Pattern

```
type Server struct {
    Port int
}
type Option func(*Server)

func WithPort(p int) Option {
    return func(s *Server) { s.Port = p }
}
```

## 📌 Ứng dụng hệ thống

*   **Factory**: khởi tạo logger, db, gRPC client
*   **Strategy**: auth engine, retry logic
*   **Functional Option**: server config, middleware chain

## 🎯 Câu hỏi phỏng vấn

### 🔹 Tổng quan Design Pattern

*   **Câu hỏi:** Vì sao trong Go ít dùng inheritance? Thay thế bằng gì?

    ```
    Go không hỗ trợ class-based OOP → không có extends.
    → Thay bằng composition + interface → dễ kiểm soát, testable, clear.
    ```

*   **Câu hỏi:** Pattern nào phổ biến trong hệ thống backend Go?

    ```
    - Factory → khởi tạo instance (db, log, grpc...)
    - Singleton → giữ 1 instance dùng chung
    - Strategy → xử lý logic runtime (auth, retry...)
    - Functional Option → config linh hoạt khi init struct
    - Decorator → middleware, logging, wrapping handler
    ```


### 🔸 Factory

*   **Câu hỏi:** Viết factory init database theo engine khác nhau?

    ```
    func NewDB(engine string) DB {
      switch engine {
      case "mysql": return &MySQL{}
      case "pg": return &Postgres{}
      default: panic("unsupported")
    }
    ```


### 🔸 Singleton

*   **Câu hỏi:** Triển khai Singleton an toàn trong goroutine?

    ```
    var once sync.Once
    var instance *Logger
    
    func GetLogger() *Logger {
      once.Do(func() {
        instance = &Logger{}
      })
      return instance
    }
    ```


### 🔸 Strategy

*   **Câu hỏi:** Pattern Strategy được áp dụng như nào trong auth middleware?

    ```
    type AuthStrategy interface {
      Authenticate(token string) bool
    }
    
    func DoAuth(s AuthStrategy, token string) {
      if !s.Authenticate(token) {
        panic("unauthorized")
      }
    }
    ```


### 🔸 Functional Option

*   **Câu hỏi:** Ưu điểm của Functional Option trong khởi tạo object?

    ```
    - Tránh constructor quá dài
    - Hỗ trợ optional config dễ dàng
    - Không cần nhiều hàm NewXxx overload
    ```

*   **Câu hỏi:** Viết ví dụ Functional Option setup Server?

    ```
    type Option func(*Server)
    
    func WithPort(p int) Option {
      return func(s *Server) { s.Port = p }
    }
    
    func NewServer(opts ...Option) *Server {
      s := &Server{}
      for _, o := range opts {
        o(s)
      }
      return s
    }
    ```


### 🔸 Decorator

*   **Câu hỏi:** Decorator được dùng nhiều nhất ở đâu trong Go?

    ```
    - HTTP/gRPC middleware
    - Logging/Recovery Wrapper
    - Retry logic quanh hàm gọi API
    ```

*   **Câu hỏi:** Viết decorator đơn giản log thời gian chạy?

    ```
    func Timing(fn func()) func() {
      return func() {
        start := time.Now()
        fn()
        fmt.Println("took:", time.Since(start))
      }
    }
    ```


### 🔹 Best Practice

*   **Câu hỏi:** Pattern nào dễ bị lạm dụng và khó debug?

    ```
    Functional Option nếu không log rõ → cấu hình bị override ngầm.
    Singleton → dễ gây hidden state, khó test nếu không mockable.
    ```

*   **Câu hỏi:** Khi nào nên dùng Factory thay vì inject struct trực tiếp?

    ```
    - Khi cần quyết định runtime (giao thức, database, strategy...).
    - Khi init phức tạp → tách Factory ra dễ test và maintain.
    ```


- - -

# 23\. System Design: Worker Pool, Fan-in/out, Pipeline

## 🧠 Tổng quan

*   Go hỗ trợ xử lý song song qua goroutine và channel → dễ áp dụng các mô hình như pipeline, fan-out, worker pool.

## 🔁 Fan-out Pattern

```
jobs := make(chan int, 100)
for w := 1; w <= 3; w++ {
    go func(id int) {
        for j := range jobs {
            fmt.Println("Worker", id, "xử lý job", j)
        }
    }(w)
}
for j := 1; j <= 5; j++ {
    jobs <- j
}
close(jobs)
```

## 🔀 Fan-in Pattern

```
func merge(cs ...<-chan int) <-chan int {
    out := make(chan int)
    var wg sync.WaitGroup
    for _, c := range cs {
        wg.Add(1)
        go func(ch <-chan int) {
            defer wg.Done()
            for v := range ch {
                out <- v
            }
        }(c)
    }
    go func() {
        wg.Wait()
        close(out)
    }()
    return out
}
```

## 🛠 Worker Pool

```
jobs := make(chan int, 10)
results := make(chan int, 10)

worker := func(jobs <-chan int, results chan<- int) {
    for j := range jobs {
        results <- j * 2
    }
}
for i := 0; i < 3; i++ {
    go worker(jobs, results)
}
for j := 1; j <= 5; j++ {
    jobs <- j
}
close(jobs)
for i := 0; i < 5; i++ {
    fmt.Println(<-results)
}
```

## 🔗 Pipeline Pattern

```
func gen(nums ...int) <-chan int {
    out := make(chan int)
    go func() {
        for _, n := range nums {
            out <- n
        }
        close(out)
    }()
    return out
}

func square(in <-chan int) <-chan int {
    out := make(chan int)
    go func() {
        for n := range in {
            out <- n * n
        }
        close(out)
    }()
    return out
}
```

## 📌 Ứng dụng thực tế

*   **Fan-out**: xử lý song song nhiều file/API/data chunk
*   **Fan-in**: gom data từ nhiều nguồn về 1 xử lý
*   **Worker Pool**: giới hạn tài nguyên hệ thống
*   **Pipeline**: ETL, stream xử lý log, event

## 🎯 Câu hỏi phỏng vấn

### 🔹 Tổng quan mô hình xử lý song song

*   **Câu hỏi:** Fan-out và Fan-in khác nhau thế nào?

    ```
    Fan-out: nhiều goroutine cùng xử lý chung 1 nguồn (channel in).
    Fan-in: nhiều nguồn dữ liệu hợp nhất lại 1 channel out.
    ```

*   **Câu hỏi:** Khi nào nên dùng Worker Pool?

    ```
    - Khi muốn giới hạn số goroutine xử lý cùng lúc (giảm memory, tránh overload).
    - Khi task nhiều nhưng độ dài xử lý không đều.
    ```


### 🔸 Worker Pool

*   **Câu hỏi:** Cách triển khai worker pool an toàn?

    ```
    - Tạo 1 channel chứa job.
    - Tạo N worker goroutine nhận job qua channel.
    - Gửi job vào channel và close sau khi xong.
    - Worker ghi kết quả ra channel kết quả.
    ```

*   **Câu hỏi:** Làm sao tránh leak goroutine trong worker pool?

    ```
    - Đảm bảo tất cả worker đọc từ channel đến khi đóng.
    - Sử dụng WaitGroup để đợi toàn bộ worker kết thúc.
    - Không dùng channel không buffer nếu sender/receiver lệch pha.
    ```


### 🔸 Fan-in

*   **Câu hỏi:** Cách gộp nhiều channel về 1 channel?

    ```
    func merge(chs ...<-chan int) <-chan int {
      out := make(chan int)
      var wg sync.WaitGroup
      for _, c := range chs {
        wg.Add(1)
        go func(c <-chan int) {
          defer wg.Done()
          for v := range c {
            out <- v
          }
        }(c)
      }
      go func() {
        wg.Wait()
        close(out)
      }()
      return out
    }
    ```


### 🔸 Pipeline

*   **Câu hỏi:** Mô hình pipeline dùng cho mục đích gì?

    ```
    - Tách xử lý thành nhiều bước rõ ràng (stage).
    - Dễ kết hợp xử lý tuần tự và song song (stream data).
    - Ứng dụng trong ETL, xử lý file, log stream, etc.
    ```

*   **Câu hỏi:** Tính chất của pipeline tốt?

    ```
    - Không share state giữa stage.
    - Mỗi stage nên là pure function hoặc goroutine riêng.
    - Có cơ chế close channel cuối để tránh leak.
    ```


### 🔹 Performance & Tối ưu

*   **Câu hỏi:** Nên dùng channel nào? Buffered hay unbuffered?

    ```
    - Buffered: tốt khi producer nhanh hơn consumer → giảm block.
    - Unbuffered: tốt khi cần đồng bộ hóa chặt (1 gửi – 1 nhận).
    ```

*   **Câu hỏi:** Race condition có thể xảy ra trong các mô hình này không?

    ```
    Có. Nếu nhiều goroutine cùng ghi slice/map hoặc dùng biến chung mà không có lock.
    → Dùng sync.Mutex hoặc channel để đồng bộ.
    ```

*   **Câu hỏi:** Ưu điểm khi combine Fan-out → Pipeline → Fan-in?

    ```
    - Tối đa hoá concurrency
    - Tách biệt rõ từng giai đoạn
    - Dễ scale từng bước độc lập
    ```


### 🔹 Use case thực tế

*   **Câu hỏi:** Gợi ý ứng dụng Fan-out trong backend system?

    ```
    - Đọc file lớn và chia task xử lý theo dòng.
    - Gửi API song song đến nhiều service.
    - Worker xử lý job queue từ Kafka, Redis.
    ```

*   **Câu hỏi:** Gợi ý ứng dụng Pipeline trong Go project thực tế?

    ```
    - Stream log → parse → enrich → send đến Kafka.
    - Load CSV → validate → transform → lưu DB.
    - Nhận request → verify → enrich user → forward đến backend khác.
    ```


- - -

# 24\. Secure Coding và CI/CD Workflow

## 🧠 Mục tiêu bảo mật

*   Bảo vệ dữ liệu người dùng và hệ thống backend khỏi lỗi bảo mật, lộ thông tin, config sai.

## 🔐 Best Practices

*   Validate mọi input đầu vào
*   Không log token, password, internal error chi tiết
*   Dùng `context.WithTimeout` với DB/API
*   Không hardcode secret – dùng ENV hoặc secret vault

## 🛡️ Static Security Scan

```
gosec ./...    # phát hiện eval, crypto yếu, bind-all, hardcoded token...
```

## 🚀 CI/CD Workflow Best Practices

*   Tích hợp go fmt, lint, test, security scan
*   Không log secret ra GitHub Actions
*   Dùng docker multi-stage → image gọn

## 📦 CI Example (GitHub Actions)

```
- run: go test -cover ./...
- run: golangci-lint run
- run: gosec ./...
```

## 📌 Gợi ý hệ thống

*   Luôn có timeout, tránh DDoS bằng chờ vô hạn
*   Scan code bảo mật mỗi merge request
*   Structured logging để trace behavior nguy hiểm

## 🎯 Câu hỏi phỏng vấn

### 🔐 Secure Coding

*   **Câu hỏi:** Những lỗi bảo mật phổ biến trong Go là gì?

    ```
    - Không kiểm tra input → XSS, SQLi
    - Lộ thông tin nhạy cảm trong log (token, password)
    - Dùng crypto yếu (MD5, SHA1)
    - Hardcode secret / API key trong source
    ```

*   **Câu hỏi:** Làm sao để bảo vệ API khỏi DDoS hoặc abuse?

    ```
    - Thêm timeout context vào mỗi request
    - Sử dụng rate limit (Envoy, middleware)
    - Thêm auth/token, quota
    ```

*   **Câu hỏi:** Bạn bảo vệ secret (token, config) trong codebase như thế nào?

    ```
    - Không bao giờ commit file .env / config thực
    - Dùng biến môi trường hoặc secret manager (Vault, AWS Secret)
    - Với CI/CD: inject secret qua môi trường runtime
    ```

*   **Câu hỏi:** Vì sao logging sai cách có thể gây rủi ro bảo mật?

    ```
    - Ghi nội dung nhạy cảm như token/password → bị leak nếu có lỗi hoặc attack
    - Ghi lỗi nội bộ quá chi tiết → lộ stacktrace, cấu trúc hệ thống
    ```


### 🧪 Static Security Scan

*   **Câu hỏi:** Công cụ nào dùng để scan bảo mật cho project Go?

    ```
    → Gosec: quét lỗ hổng như hardcoded credentials, bind-all, eval code, TLS weak
    ```

*   **Câu hỏi:** Ví dụ lệnh scan bảo mật code Go?

    ```
    gosec ./...   # quét tất cả file .go trong module hiện tại
    ```


### 🚀 CI/CD Workflow

*   **Câu hỏi:** CI/CD cho Go thường gồm những bước nào?

    ```
    - go fmt + vet + lint
    - go test + coverage
    - gosec security scan
    - build binary (go build)
    - docker build & push image
    - deploy (K8s, ECS, Lambda...)
    ```

*   **Câu hỏi:** Làm sao đảm bảo CI/CD không leak thông tin?

    ```
    - Không log secret, token (dùng redacted output)
    - Không echo toàn bộ env
    - Không lưu file .env vào image
    ```

*   **Câu hỏi:** Bạn đã gặp lỗi nào nghiêm trọng trong CI/CD chưa?

    ```
    - Build không kiểm tra coverage → bug lọt qua
    - Push image chứa credential hardcode
    - Secret bị leak qua log GitHub Actions
    ```


### 📦 Best Practice cho Go trong CI/CD

*   **Câu hỏi:** Làm sao cấu hình GitHub Actions để test + lint + bảo mật?

    ```
    jobs:
      test:
        steps:
          - run: go fmt ./...
          - run: go vet ./...
          - run: golangci-lint run
          - run: go test -cover ./...
          - run: gosec ./...
    ```

*   **Câu hỏi:** Làm sao để Go binary build an toàn và nhỏ?

    ```
    - Sử dụng go build static binary
    - Multi-stage Dockerfile
    - Set CGO_ENABLED=0 để build image scratch
    ```


- - -

# 25\. Distributed Systems: Redis, Kafka, EnvoyProxy

## 🧠 Kiến trúc phân tán – Redis / Kafka / Envoy

*   **Redis**: cache, pub/sub, distributed lock
*   **Kafka**: event queue, pub/sub async microservice
*   **Envoy**: service proxy, gRPC gateway, observability layer

## 🚀 Redis

```
<!-- Redis Caching Flow -->
Client → API → Redis Cache?
           ↓ miss
         → DB → Cache → Redis
         ← Result
```

```
rdb := redis.NewClient(&redis.Options{Addr: "localhost:6379"})
val, err := rdb.Get(ctx, "user:1").Result()
if err == redis.Nil {
    // cache miss → DB
}
```

## 📨 Kafka

```
<!-- Kafka Event Flow -->
Producer → Kafka topic: order.created
                       ↓
            Consumer A → Email
            Consumer B → Billing
```

```
r := kafka.NewReader(kafka.ReaderConfig{Topic: "order.created"})
for {
    m, _ := r.ReadMessage(ctx)
    fmt.Println(string(m.Value))
}
```

## 🌐 Envoy

```
<!-- Envoy Service Flow -->
Client → Envoy Proxy → gRPC Service
            ↑ log, TLS, retry, metrics
```

```
# envoy.yaml
grpc_services:
  - google.api.http:
      post: "/v1/send"
      body: "*"
    selector: messaging.SendMessage
```

## 📌 Gợi ý hệ thống

*   **Redis**: tăng throughput, TTL, lock job
*   **Kafka**: tách sync → async, log store, broadcast
*   **Envoy**: observability, retry, circuit breaker

## 🧠 Mở rộng: Chi tiết Redis / Kafka / EnvoyProxy

### 🔴 Redis – Những chức năng mạnh mẽ

*   **GET / SET**: lưu dữ liệu dạng key-value cực nhanh
*   **TTL / EXPIRE**: key tự xoá sau một thời gian
*   **INCR / DECR**: đếm truy cập, lượt vote
*   **Pub/Sub**: push real-time event (chat, notify)
*   **ZSET**: sort theo score – dùng cho ranking/leaderboard
*   **Stream**: giống Kafka nhẹ, hỗ trợ nhóm, backlog
*   **Distributed Lock**: SETNX + EXPIRE giúp lock an toàn

### 🔶 Kafka – Các thành phần cốt lõi

*   **Topic**: nơi các producer ghi và consumer đọc
*   **Partition**: giúp scale, đảm bảo thứ tự trong partition
*   **Consumer Group**: chia tải – mỗi partition → 1 consumer trong group
*   **Offset**: vị trí message trong partition
*   **Payload**: nội dung message, dạng \[\]byte → thường là JSON, Protobuf
*   **Retention**: lưu message nhiều giờ/ngày để replay

### 📌 Kafka Patterns

*   **Fan-out**: 1 event → nhiều service xử lý song song
*   **Retry Queue**: gửi lại nếu consumer fail
*   **Compaction**: chỉ giữ bản mới nhất theo key

### 🔵 Envoy – Khả năng mạnh

*   **gRPC transcoding**: REST → gRPC → handler
*   **Per-route policy**: config riêng từng endpoint
*   **Rate limit**: chặn lạm dụng theo header/client IP
*   **Retry & Circuit breaker**: đảm bảo resiliency khi backend fail
*   **RBAC / AuthZ**: chặn/cho phép request theo role, path, header
*   **Access log**: JSON log cho mọi request
*   **Tracing**: tích hợp Zipkin/Jaeger

## 🎯 Câu hỏi phỏng vấn – Mục 25: Distributed Systems (Redis, Kafka, Envoy)

### 🔴 Redis

*   **Q:** Có những pattern caching phổ biến nào với Redis?

    ```
    1. Cache Aside (lazy): chỉ cache khi miss → phổ biến nhất.
    2. Write-through: update cache + DB cùng lúc → đảm bảo nhất quán, nhưng tăng latency.
    3. Write-behind: ghi cache trước, flush về DB sau → hiệu suất cao nhưng dễ mất dữ liệu.
    4. Read-through: client chỉ gọi Redis, backend lo fallback → tăng coupling.
    ```

*   **Q:** Redis hỗ trợ những eviction policy nào? Khi nào nên dùng từng loại?

    ```
    - noeviction: lỗi nếu đầy (thường dùng cho queue).
    - allkeys-lru: xóa key ít dùng nhất (default cho cache toàn hệ thống).
    - volatile-lru: như trên nhưng chỉ key có TTL.
    - volatile-ttl: xóa key sắp hết hạn nhất.
    - random: fallback nhẹ nếu workload không predictable.
    ```

*   **Q:** Redis Pub/Sub khác gì Redis Stream?

    ```
    - Pub/Sub: không có backlog, chỉ gửi realtime → ai không subscribe thì mất.
    - Stream: có offset, consumer group, replay message được → phù hợp hệ thống event.
    ```

*   **Q:** Làm thế nào để implement distributed lock an toàn với Redis?

    ```
    - Dùng SET key value NX EX 10
    - Kiểm tra value để tránh unlock nhầm (lock chỉ do 1 service sở hữu).
    - Nếu cần multi-node, nên dùng RedLock (cơ chế đồng thuận qua nhiều Redis instance).
    ```

*   **Q:** Những lỗi phổ biến khi dùng Redis là gì?

    ```
    - Quên TTL → memory leak
    - Dùng KEYS * → gây block toàn Redis instance
    - Không handle cache stampede
    - Dùng Redis làm primary store thay vì cache
    ```


### 📨 Kafka

*   **Q:** Kafka có thể đảm bảo thứ tự message không?

    ```
    Có – nhưng chỉ trong 1 partition.
    → Nếu cần toàn bộ message ordered, chúng phải đi cùng 1 key → 1 partition → không scale.
    ```

*   **Q:** Kafka scale consumer group như thế nào?

    ```
    - Mỗi partition chỉ có 1 consumer active trong group.
    - Nếu số consumer > số partition → consumer thừa sẽ idle.
    → Thiết kế partition count nên ≥ số consumer mong muốn.
    ```

*   **Q:** Giải thích các kiểu delivery: at-most-once, at-least-once, exactly-once?

    ```
    - at-most-once: xử lý xong mới commit offset → an toàn, không mất, nhưng có thể duplicate.
    - at-least-once: commit trước xử lý → mất dữ liệu nếu fail.
    - exactly-once: cần bật idempotent producer + transaction API → phức tạp, latency cao.
    ```

*   **Q:** So sánh Kafka và RabbitMQ?

    ```
    Kafka:
    - Log-based, giữ message lâu
    - High throughput, partition để scale
    - Phù hợp event sourcing, audit, analytics
    
    RabbitMQ:
    - Queue-based, push-based
    - Hàng đợi biến mất khi consumer ack
    - Phù hợp task queue, fanout realtime
    ```

*   **Q:** Khi nào cần cân nhắc số partition? Tác động là gì?

    ```
    - Nhiều partition → tăng parallelism, throughput
    - Nhưng tăng overhead: file handle, memory, replica lag
    - Tăng partition không giảm latency nếu consumer không đủ
    ```

*   **Q:** Kafka có hỗ trợ delay queue không?

    ```
    Không natively. Cần workaround như:
    - Gửi vào topic riêng có tên delay
    - Consumer filter thời gian
    - Dùng stream processor để delay message
    ```


### 🌐 Envoy (Proxy, Gateway, Observability)

*   **Q:** Envoy hoạt động như thế nào trong hệ thống microservice?

    ```
    Envoy là L7 proxy trung gian:
    - Làm load balancer nội bộ
    - Gắn auth, tracing, retry
    - Làm gRPC gateway hoặc sidecar proxy (service mesh)
    ```

*   **Q:** Các loại gRPC RPC có gì khác biệt?

    ```
    - Unary: 1 request – 1 response
    - Server streaming: 1 req – stream res
    - Client streaming: stream req – 1 res
    - Bidirectional streaming: cả 2 chiều stream song song
    ```

*   **Q:** Interceptor trong gRPC là gì? Có bao nhiêu loại?

    ```
    - Là middleware của gRPC
    - Unary Interceptor: apply cho RPC 1-1
    - Stream Interceptor: apply cho stream
    → Dùng để logging, auth, tracing, panic recovery
    ```

*   **Q:** Envoy hỗ trợ retry & circuit breaker như thế nào?

    ```
    - Retry: cấu hình timeout, backoff, retry on code
    - Circuit breaker: giới hạn concurrent conn, pending request
    → Tránh overload backend khi lỗi
    ```

*   **Q:** Làm sao Envoy hỗ trợ tracing và logging tập trung?

    ```
    - Truyền trace-id (x-request-id) từ upstream xuống
    - Tích hợp Zipkin/Jaeger → theo dõi xuyên microservice
    - Log structured JSON cho ELK / Loki / Datadog
    ```

*   **Q:** Envoy so với NGINX thì nên dùng cái nào?

    ```
    Envoy:
    - Native HTTP/2, gRPC
    - Hot reload config, dynamic routing
    - Có built-in observability (metrics, trace)
    
    NGINX:
    - Hiệu năng cao
    - Phổ biến, nhưng cấu hình gRPC phức tạp
    → Dùng Envoy cho hệ thống service mesh / gRPC-based
    ```


## ❌ Mistake #1 – So sánh interface với nil nhưng vẫn không bằng nil

Một trong những lỗi phổ biến và nguy hiểm nhất trong Go là so sánh một interface với `nil` và kỳ vọng rằng nó sẽ trả về `true`, nhưng thực tế lại trả về `false` – dẫn đến logic sai.

### 🧠 Giải thích

Interface trong Go gồm 2 phần: **type** và **value**. Khi bạn gán một con trỏ nil vào interface, nó vẫn giữ phần `type`, do đó toàn bộ interface không còn là `nil` nữa.

```
// ❌ Sai: err không phải là nil
type MyError struct{}

func (e *MyError) Error() string { return "err" }

func Do() error {
    var e *MyError = nil
    return e // ⚠️ interface error ≠ nil
}

func main() {
    if Do() == nil {
        fmt.Println("No error") // không in ra!
    } else {
        fmt.Println("Error detected") // in ra
    }
}
```

### ✅ Cách fix

Luôn kiểm tra giá trị nil trước khi gán vào interface:

```
func Do() error {
    var e *MyError = nil
    if e == nil {
        return nil
    }
    return e
}
```

\---

### 🎯 Câu hỏi phỏng vấn

*   **Q:** Tại sao một con trỏ nil gán vào interface lại không phải là nil?
*   **Trả lời:** Vì interface trong Go gồm (type, value). Khi gán nil pointer vào, `type ≠ nil` dù `value = nil`, nên toàn interface vẫn khác nil.
*   **Q:** Làm sao để đảm bảo trả về error thực sự là nil?
*   **Trả lời:** Phải kiểm tra giá trị trước khi return. Nếu là pointer nil → return nil trực tiếp thay vì return interface chứa pointer nil.

## ❌ Mistake #2 – Closure trong vòng lặp dùng sai biến loop

Lỗi phổ biến khi dùng `closure` (hàm ẩn danh) trong vòng lặp: tất cả closure "bắt" cùng một biến loop, dẫn đến giá trị sai lệch hoặc không đoán được.

### 🧠 Giải thích

Trong vòng lặp, biến `i` được cập nhật sau mỗi iteration. Nếu closure không tạo bản sao, tất cả goroutine sẽ truy cập cùng một biến — dẫn đến sai lệch giá trị hoặc race.

```
// ❌ Sai: tất cả closure in ra cùng giá trị cuối cùng
for i := 0; i < 3; i++ {
    go func() {
        fmt.Println(i)
    }()
}
// Kết quả có thể: 3, 3, 3
```

\---

### ✅ Cách fix: tạo bản sao biến vòng lặp

```
for i := 0; i < 3; i++ {
    iCopy := i
    go func() {
        fmt.Println(iCopy) // In đúng 0, 1, 2
    }()
}
```

### ✅ Hoặc truyền biến làm tham số cho closure

```
for i := 0; i < 3; i++ {
    go func(val int) {
        fmt.Println(val)
    }(i)
}
```

\---

### 🎯 Câu hỏi phỏng vấn

*   **Q:** Tại sao tất cả goroutine in cùng một giá trị trong vòng lặp?
*   **Trả lời:** Vì closure dùng biến `i` của vòng lặp, và `i` được thay đổi sau mỗi vòng → tất cả goroutine dùng chung biến này.
*   **Q:** Cách tránh bug này?
*   **Trả lời:** Tạo biến mới trong từng vòng lặp (shadowing) hoặc truyền biến đó vào func như tham số.
*   **Q:** Đây là lỗi runtime hay compile-time?
*   **Trả lời:** Là lỗi logic – compile vẫn chạy, nhưng kết quả không đúng → khó debug nếu không hiểu closure scope.

## ❌ Mistake #3 – Dùng defer trong vòng lặp gây giữ tài nguyên

`defer` trong Go sẽ chỉ được thực thi khi hàm kết thúc. Nếu đặt defer trong vòng lặp (ví dụ khi mở file, DB, network...), bạn sẽ **giữ tài nguyên đến cuối function** thay vì giải phóng sau mỗi vòng lặp.

### 🧠 Giải thích

Go dùng mô hình `LIFO` cho defer: càng gọi defer sau thì thực thi càng trước. Nhưng nếu vòng lặp mở 100 file và đều defer close – thì tất cả 100 file chỉ được đóng ở cuối cùng → dễ gây **file descriptor leak**.

```
// ❌ Sai: defer được hoãn đến hết vòng lặp → quá nhiều file mở
for _, path := range files {
    f, err := os.Open(path)
    if err != nil {
        continue
    }
    defer f.Close()
    // xử lý file
}
```

\---

### ✅ Cách fix: gọi close ngay trong vòng lặp

```
for _, path := range files {
    f, err := os.Open(path)
    if err != nil {
        continue
    }

    // dùng anonymous func để defer được thực thi đúng thời điểm
    func() {
        defer f.Close()
        // xử lý file tại đây
    }()
}
```

\---

### 🎯 Câu hỏi phỏng vấn

*   **Q:** Vì sao không nên dùng defer trong vòng lặp xử lý nhiều file hoặc connection?
*   **Trả lời:** Vì defer chỉ chạy khi function kết thúc, nên nếu có nhiều iteration → tất cả resource (file, conn) bị giữ mở đến cuối.
*   **Q:** Go thực thi defer theo thứ tự nào?
*   **Trả lời:** LIFO – Last In First Out. Defer gọi sau sẽ được thực thi trước.
*   **Q:** Giải pháp nào để vẫn dùng defer mà không giữ tài nguyên quá lâu?
*   **Trả lời:** Đặt defer trong một closure (anonymous function) nội bộ mỗi vòng lặp – giúp thực thi defer ngay khi closure kết thúc.

## ❌ Mistake #4 – Truy cập map từ nhiều goroutine không đồng bộ

Trong Go, `map` không thread-safe. Nếu bạn đọc/ghi map đồng thời từ nhiều goroutine mà không dùng đồng bộ hóa, chương trình có thể crash với lỗi `fatal error: concurrent map read and map write`.

### 🧠 Giải thích

Map trong Go được tối ưu cho hiệu năng đơn luồng. Khi có concurrent write hoặc mix read/write, nó có thể bị panic hoặc tạo ra race condition khó debug.

```
// ❌ Sai: concurrent write gây panic
m := make(map[string]int)

for i := 0; i < 10; i++ {
    go func(i int) {
        key := fmt.Sprintf("k%d", i)
        m[key] = i // Ghi đồng thời!
    }(i)
}
```

\---

### ✅ Cách fix: dùng sync.Mutex hoặc sync.Map

```
// ✅ Cách 1: sync.Mutex
var mu sync.Mutex
m := make(map[string]int)

for i := 0; i < 10; i++ {
    go func(i int) {
        key := fmt.Sprintf("k%d", i)
        mu.Lock()
        m[key] = i
        mu.Unlock()
    }(i)
}
```

```
// ✅ Cách 2: sync.Map (map an toàn cho concurrent)
var m sync.Map

for i := 0; i < 10; i++ {
    go func(i int) {
        key := fmt.Sprintf("k%d", i)
        m.Store(key, i)
    }(i)
}
```

\---

### 🎯 Câu hỏi phỏng vấn

*   **Q:** Map trong Go có thread-safe không?
*   **Trả lời:** Không. Ghi hoặc đọc/ghi đồng thời mà không khóa sẽ panic hoặc gây race condition.
*   **Q:** Làm sao xử lý map an toàn khi dùng với nhiều goroutine?
*   **Trả lời:** Dùng `sync.Mutex` để bảo vệ từng thao tác, hoặc `sync.Map` nếu workload phù hợp (rất nhiều read, ít write).
*   **Q:** Khi nào nên dùng `sync.Map` thay vì `map + mutex`?
*   **Trả lời:** Khi bạn có rất nhiều goroutine chỉ đọc hoặc update độc lập từng key, không cần full control logic.

## ❌ Mistake #4 – Truy cập map từ nhiều goroutine không đồng bộ

Trong Go, `map` không thread-safe. Nếu bạn đọc/ghi map đồng thời từ nhiều goroutine mà không dùng đồng bộ hóa, chương trình có thể crash với lỗi `fatal error: concurrent map read and map write`.

### 🧠 Giải thích

Map trong Go được tối ưu cho hiệu năng đơn luồng. Khi có concurrent write hoặc mix read/write, nó có thể bị panic hoặc tạo ra race condition khó debug.

```
// ❌ Sai: concurrent write gây panic
m := make(map[string]int)

for i := 0; i < 10; i++ {
    go func(i int) {
        key := fmt.Sprintf("k%d", i)
        m[key] = i // Ghi đồng thời!
    }(i)
}
```

\---

### ✅ Cách fix: dùng sync.Mutex hoặc sync.Map

```
// ✅ Cách 1: sync.Mutex
var mu sync.Mutex
m := make(map[string]int)

for i := 0; i < 10; i++ {
    go func(i int) {
        key := fmt.Sprintf("k%d", i)
        mu.Lock()
        m[key] = i
        mu.Unlock()
    }(i)
}
```

```
// ✅ Cách 2: sync.Map (map an toàn cho concurrent)
var m sync.Map

for i := 0; i < 10; i++ {
    go func(i int) {
        key := fmt.Sprintf("k%d", i)
        m.Store(key, i)
    }(i)
}
```

\---

### 🎯 Câu hỏi phỏng vấn

*   **Q:** Map trong Go có thread-safe không?
*   **Trả lời:** Không. Ghi hoặc đọc/ghi đồng thời mà không khóa sẽ panic hoặc gây race condition.
*   **Q:** Làm sao xử lý map an toàn khi dùng với nhiều goroutine?
*   **Trả lời:** Dùng `sync.Mutex` để bảo vệ từng thao tác, hoặc `sync.Map` nếu workload phù hợp (rất nhiều read, ít write).
*   **Q:** Khi nào nên dùng `sync.Map` thay vì `map + mutex`?
*   **Trả lời:** Khi bạn có rất nhiều goroutine chỉ đọc hoặc update độc lập từng key, không cần full control logic.

## ❌ Mistake #5 – Goroutine leak vì không listen channel

Một goroutine gửi vào channel mà không có ai nhận, hoặc đang block chờ nhận mà channel không có ai gửi – sẽ bị **block mãi mãi**. Nếu điều này xảy ra hàng loạt trong production, sẽ gây leak tài nguyên hoặc deadlock toàn hệ thống.

### 🧠 Giải thích

Channel trong Go là **synchronous** nếu không có buffer. Nếu không có ai nhận (`<-chan`) thì lệnh `chan <- value` sẽ block. Nếu goroutine block mà không được cancel hoặc timeout, nó sẽ bị “rò rỉ”.

```
// ❌ Sai – không có ai nhận từ ch, goroutine bị block mãi mãi
ch := make(chan int)

go func() {
    ch <- 42 // bị block vì không ai đọc
}()
```

\---

### ✅ Cách fix #1: luôn đảm bảo có receiver

```
ch := make(chan int)

go func() {
    ch <- 42
}()

val := <-ch
fmt.Println("Received:", val)
```

### ✅ Cách fix #2: dùng channel có buffer (nếu async đơn giản)

```
ch := make(chan int, 1)

go func() {
    ch <- 42 // OK, vì có buffer
}()
```

### ✅ Cách fix #3: dùng context để huỷ goroutine nếu bị block lâu

```
ctx, cancel := context.WithTimeout(context.Background(), time.Second)
defer cancel()

done := make(chan struct{})

go func() {
    select {
    case <-time.After(10 * time.Second): // giả lập block
        done <- struct{}{}
    case <-ctx.Done():
        fmt.Println("Goroutine canceled")
    }
}()
```

\---

### 🎯 Câu hỏi phỏng vấn

*   **Q:** Điều gì xảy ra nếu một goroutine gửi vào channel mà không ai nhận?
*   **Trả lời:** Goroutine sẽ bị block mãi mãi → gây leak và tăng số lượng goroutine trong runtime.
*   **Q:** Làm sao tránh goroutine leak?
*   **Trả lời:** Luôn đảm bảo:
    *   Có người nhận từ channel (hoặc channel có buffer)
    *   Goroutine được huỷ bằng context timeout hoặc cancel
*   **Q:** Dùng lệnh gì để debug số goroutine trong runtime?
*   **Trả lời:** Dùng `runtime.NumGoroutine()` hoặc `pprof` để kiểm tra lượng goroutine hiện tại.

## ❌ Mistake #6 – Truyền slice mà tưởng rằng copy

Nhiều lập trình viên nghĩ rằng khi truyền một `slice` vào hàm, nó là copy độc lập. Thực ra, slice chỉ là “view” trên underlying array – tức là thay đổi slice cũng thay đổi dữ liệu gốc.

### 🧠 Giải thích

Slice trong Go gồm 3 phần: `pointer` tới mảng gốc, `length` và `capacity`. Khi truyền slice vào hàm, bạn chỉ copy phần “view”, không phải dữ liệu – nên mọi thay đổi sẽ ảnh hưởng gốc nếu dùng cùng underlying array.

```
// ❌ Sai: tưởng rằng s2 là bản sao
s1 := []int{1, 2, 3}
s2 := s1
s2[0] = 999

fmt.Println(s1) // [999 2 3] – bị thay đổi theo!
```

\---

### ✅ Cách fix: dùng copy() để tạo slice hoàn toàn mới

```
s1 := []int{1, 2, 3}
s2 := make([]int, len(s1))
copy(s2, s1)

s2[0] = 999
fmt.Println(s1) // [1 2 3] – an toàn
```

\---

### ✅ Nếu muốn read-only: truyền slice và không modify

```
func printOnly(data []int) {
    for _, v := range data {
        fmt.Println(v)
    }
}
```

\---

### 🎯 Câu hỏi phỏng vấn

*   **Q:** Khi truyền slice vào hàm, liệu có copy dữ liệu không?
*   **Trả lời:** Không. Chỉ copy phần view (pointer + len + cap). Dữ liệu vẫn trỏ về mảng gốc.
*   **Q:** Làm sao để clone slice thực sự?
*   **Trả lời:** Dùng `copy(newSlice, oldSlice)` sau khi tạo slice mới bằng `make`.
*   **Q:** Có khi nào 2 slice khác nhau nhưng trỏ về cùng underlying array?
*   **Trả lời:** Có – nếu slice được cắt từ cùng một mảng hoặc slice cha. Điều này rất dễ gây bug ngầm nếu không cẩn thận.

## ❌ Mistake #7 – Dùng value receiver khi cần pointer

Khi method được khai báo với `value receiver`, mọi thay đổi trên struct trong method sẽ chỉ là bản sao – không ảnh hưởng dữ liệu gốc. Nếu bạn muốn mutate (thay đổi) giá trị trong method, bạn phải dùng `pointer receiver`.

### 🧠 Giải thích

Value receiver tạo bản sao của struct, mọi thao tác trên nó không làm thay đổi dữ liệu gốc.

```
// ❌ Sai – name không thay đổi sau SetName
type User struct {
    Name string
}

func (u User) SetName(name string) {
    u.Name = name
}

func main() {
    u := User{}
    u.SetName("Gopher")
    fmt.Println(u.Name) // ""
}
```

\---

### ✅ Cách fix: dùng pointer receiver để mutate dữ liệu

```
func (u *User) SetName(name string) {
    u.Name = name
}

func main() {
    u := User{}
    u.SetName("Gopher")
    fmt.Println(u.Name) // "Gopher"
}
```

\---

### 🎯 Khi nào dùng pointer vs value receiver?

*   Dùng **pointer** nếu:
    *   Bạn cần thay đổi dữ liệu (mutate)
    *   Struct có kích thước lớn → tránh copy tốn chi phí
*   Dùng **value** nếu:
    *   Struct nhỏ, thao tác đọc-only
    *   Không muốn method gây side effect

\---

### 🎯 Câu hỏi phỏng vấn

*   **Q:** Dùng value receiver trong method thì có mutate được dữ liệu không?
*   **Trả lời:** Không. Value receiver hoạt động trên bản sao – mọi thay đổi không ảnh hưởng dữ liệu gốc.
*   **Q:** Có thể gọi method pointer từ biến struct không?
*   **Trả lời:** Có – Go tự động lấy địa chỉ khi cần. Bạn có thể gọi `u.SetName()` dù SetName là method dùng `*User`.
*   **Q:** Nếu có mix pointer và value receiver trong cùng struct, có vấn đề gì không?
*   **Trả lời:** Không compile lỗi, nhưng gây khó hiểu và bug tiềm ẩn. Nên thống nhất.

## ❌ Mistake #8 – Không cancel context → goroutine leak

Go cho phép truyền `context.Context` để quản lý vòng đời goroutine. Nếu bạn tạo context có timeout/cancel nhưng không gọi `cancel()`, goroutine sẽ tiếp tục sống – gây leak tài nguyên và giữ connection không cần thiết.

### 🧠 Giải thích

Context là cơ chế tiêu chuẩn trong Go để huỷ các tác vụ dài hoặc không còn cần thiết. Nếu bạn không gọi `cancel()` với `WithCancel`, `WithTimeout`, hoặc `WithDeadline`, thì:

*   Goroutine sẽ chờ mãi
*   Socket hoặc DB không được đóng
*   Runtime có thể đầy goroutine mà bạn không kiểm soát

```
// ❌ Sai – không gọi cancel
ctx, _ := context.WithTimeout(context.Background(), 2*time.Second)
go func() {
    select {
    case <-ctx.Done():
        fmt.Println("done")
    }
}()
```

\---

### ✅ Cách fix: luôn gọi cancel (bằng defer nếu có thể)

```
ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
defer cancel() // ✅ tránh leak

go func() {
    select {
    case <-ctx.Done():
        fmt.Println("done")
    }
}()
```

\---

### 🎯 Câu hỏi phỏng vấn

*   **Q:** Điều gì xảy ra nếu bạn tạo context mà không cancel?
*   **Trả lời:** Goroutine sử dụng context đó có thể không bao giờ được giải phóng → memory leak hoặc giữ tài nguyên quá lâu (DB, socket, HTTP).
*   **Q:** Khi nào cần gọi `cancel()`?
*   **Trả lời:** Ngay sau khi tạo context có cancel control (WithCancel, WithTimeout, WithDeadline). Nên dùng `defer cancel()` để đảm bảo.
*   **Q:** Context propagation có hỗ trợ huỷ nhiều tầng không?
*   **Trả lời:** Có. Khi một context cha bị huỷ, toàn bộ context con sẽ bị huỷ theo → rất quan trọng trong hệ thống microservice hoặc job processing.

## ❌ Mistake #9 – Panic không được recover đúng cách

Go không có try-catch như các ngôn ngữ khác. Thay vào đó, bạn phải dùng `panic`, `defer` và `recover()`. Nếu bạn không gọi `recover` đúng cách, panic sẽ crash toàn bộ chương trình – kể cả khi xảy ra trong 1 goroutine nhỏ.

### 🧠 Giải thích

`recover()` chỉ hoạt động khi được gọi bên trong một `defer` trong cùng goroutine với panic. Nếu gọi ngoài `defer`, hoặc gọi trong goroutine khác → không có tác dụng.

```
// ❌ Sai – panic không được recover → program crash
func main() {
    recover() // không có tác dụng
    panic("BOOM")
}
```

\---

### ✅ Cách đúng: recover trong defer

```
func main() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Đã recover từ panic:", r)
        }
    }()
    panic("BOOM") // không crash
}
```

\---

### ✅ Recover goroutine riêng biệt

```
go func() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered in goroutine:", r)
        }
    }()
    panic("panic trong goroutine")
}()
```

\---

### 🎯 Câu hỏi phỏng vấn

*   **Q:** Điều kiện để `recover()` hoạt động?
*   **Trả lời:** Phải được gọi trong `defer` nằm trong cùng goroutine với panic. Nếu gọi ngoài defer hoặc trong goroutine khác, recover không có tác dụng.
*   **Q:** Ứng dụng nào trong thực tế cần recover?
*   **Trả lời:** Middleware HTTP (như gin, echo), worker job pool, consumer message queue – bất kỳ nơi nào bạn cần giữ server chạy ổn định dù gặp lỗi bất ngờ.
*   **Q:** Recover có dừng được toàn bộ crash không?
*   **Trả lời:** Có, nhưng phải dùng đúng cách. Nên log lại panic, traceID, và context để dễ debug. Tuyệt đối không “nuốt” lỗi trong silence.

## ❌ Mistake #10 – Type assertion không check `ok`

Khi dùng `interface{}`, để lấy giá trị thật, bạn phải dùng type assertion. Nếu bạn không kiểm tra `ok` khi ép kiểu và loại không khớp – chương trình sẽ panic.

### 🧠 Giải thích

Type assertion trong Go có 2 dạng:

*   `val := i.(T)` → panic nếu `i` không chứa type `T`
*   `val, ok := i.(T)` → an toàn, không panic, kiểm tra được kết quả

```
// ❌ Sai – không kiểm tra kiểu → panic nếu sai
var i interface{} = "hello"
n := i.(int) // panic: interface conversion: string is not int
```

\---

### ✅ Cách fix: kiểm tra `ok`

```
var i interface{} = "hello"
n, ok := i.(int)
if ok {
    fmt.Println("Value:", n)
} else {
    fmt.Println("Sai kiểu: không phải int")
}
```

\---

### ✅ Dùng type switch nếu cần xử lý nhiều kiểu

```
switch v := i.(type) {
case string:
    fmt.Println("Chuỗi:", v)
case int:
    fmt.Println("Số nguyên:", v)
default:
    fmt.Println("Không xác định")
}
```

\---

### 🎯 Câu hỏi phỏng vấn

*   **Q:** Điều gì xảy ra nếu type assertion sai kiểu mà không check `ok`?
*   **Trả lời:** Chương trình sẽ panic ngay – gây crash nếu không được recover.
*   **Q:** Khi nào nên dùng type assertion?
*   **Trả lời:** Khi bạn xử lý `interface{}` và biết trước kiểu. Nếu không chắc chắn → luôn check `ok` hoặc dùng type switch.
*   **Q:** Có khác gì giữa `i.(T)` và `i.(*T)`?
*   **Trả lời:** Không – đều là assertion về type. Nhưng bạn phải khớp exact type (pointer ≠ value).

## ❌ Mistake #11 – Slice giữ capacity ngầm gây memory leak

Khi bạn cắt một slice từ một slice lớn hơn, bạn có thể vô tình giữ lại toàn bộ underlying array – dù bạn chỉ dùng một phần nhỏ. Điều này khiến bộ nhớ không được giải phóng → **memory leak** ngầm.

### 🧠 Giải thích

Slice trong Go trỏ về cùng underlying array. Khi bạn cắt slice con, phần còn lại của array vẫn được giữ trong bộ nhớ nếu bạn không tách riêng nó.

```
// ❌ Sai – giữ cả array dù chỉ cần 1 phần
data := make([]byte, 1000000)
sub := data[:10] // sub giữ nguyên underlying array 1MB!
process(sub)
```

\---

### ✅ Cách fix: copy slice con ra slice mới

```
data := make([]byte, 1000000)
sub := make([]byte, 10)
copy(sub, data[:10]) // chỉ giữ 10 byte
process(sub)
```

\---

### ✅ Dùng append với nil slice cũng là cách tạo bản sao

```
sub := append([]byte(nil), data[:10]...)
```

\---

### 🎯 Câu hỏi phỏng vấn

*   **Q:** Khi slice một mảng lớn, bạn có chắc bộ nhớ được giải phóng không?
*   **Trả lời:** Không chắc. Nếu slice mới vẫn dùng cùng underlying array, phần còn lại vẫn bị giữ.
*   **Q:** Làm sao đảm bảo slice không giữ bộ nhớ dư?
*   **Trả lời:** Copy slice ra slice mới với `copy()` hoặc `append([]T(nil), ...)`.
*   **Q:** Có tool nào giúp phát hiện lỗi này?
*   **Trả lời:** Có – dùng `pprof` để xem heap profile hoặc `staticcheck` để cảnh báo slice aliasing.

## ❌ Mistake #12 – Map khi marshal JSON có thứ tự không xác định

Nhiều lập trình viên mong đợi rằng khi `json.Marshal` một map trong Go, kết quả sẽ giữ nguyên thứ tự key. Thực tế thì không – thứ tự **không được đảm bảo**, vì Go map là unordered by design.

### 🧠 Giải thích

Map trong Go được thiết kế là **không có thứ tự**. Mỗi lần bạn lặp qua map hoặc marshal JSON từ map, thứ tự key có thể khác nhau, thậm chí mỗi lần run sẽ khác nhau để chống phụ thuộc vào thứ tự.

```
// ❌ Sai – thứ tự key không ổn định
m := map[string]int{
    "a": 1,
    "b": 2,
    "c": 3,
}
data, _ := json.Marshal(m)
fmt.Println(string(data)) // có thể là {"b":2,"a":1,"c":3}
```

\---

### ✅ Cách fix: dùng struct hoặc slice key-value có thứ tự

```
type Entry struct {
    Key   string `json:"key"`
    Value int    `json:"value"`
}

entries := []Entry{
    {"a", 1},
    {"b", 2},
    {"c", 3},
}
data, _ := json.Marshal(entries)
fmt.Println(string(data)) // [{"key":"a","value":1},...]
```

\---

### 🎯 Câu hỏi phỏng vấn

*   **Q:** Tại sao map trong Go không có thứ tự?
*   **Trả lời:** Vì map được thiết kế để optimize cho tốc độ truy cập, không phải cho iteration order – từ Go 1.12 trở đi còn deliberately randomized để tránh phụ thuộc.
*   **Q:** Làm sao để giữ thứ tự khi marshal JSON từ dữ liệu map?
*   **Trả lời:** Dùng struct slice, hoặc build `[]Entry` rồi marshal – bạn có toàn quyền kiểm soát thứ tự.
*   **Q:** Có thể kiểm soát thứ tự trong map khi dùng `range` không?
*   **Trả lời:** Không. Nếu cần, hãy sort key riêng và lặp theo key slice.

## ❌ Mistake #13 – Nhầm lẫn thứ tự thực thi defer (LIFO)

Nhiều lập trình viên nhầm tưởng các lệnh `defer` trong Go được thực thi theo thứ tự xuất hiện. Thực tế, **defer được thực thi theo kiểu LIFO** – Last In, First Out.

### 🧠 Giải thích

Mỗi khi Go gặp lệnh `defer`, nó push vào stack. Khi hàm kết thúc, các lệnh được pop ra và thực thi theo thứ tự ngược lại. Điều này cực kỳ quan trọng khi bạn cần release resource hoặc debug theo trace.

```
// ❌ Nhầm tưởng in ra 1 → 2 → 3
func main() {
    defer fmt.Println("1")
    defer fmt.Println("2")
    defer fmt.Println("3")
}
// Kết quả thực tế: 3 → 2 → 1
```

\---

### ✅ Ứng dụng đúng: xử lý resource, trace, rollback

```
defer unlock()
defer log("done")
defer rollback()
```

Thứ tự thực thi: rollback → log → unlock

\---

### 🎯 Câu hỏi phỏng vấn

*   **Q:** Defer được thực thi theo thứ tự nào?
*   **Trả lời:** Theo nguyên tắc LIFO – lệnh `defer` gọi sau sẽ được thực thi trước.
*   **Q:** Nếu trong nhiều defer có panic, chuyện gì xảy ra?
*   **Trả lời:** Các defer trước panic vẫn chạy. Nhưng nếu panic xảy ra trong chính defer, chương trình sẽ crash nếu không recover.
*   **Q:** Khi nào nên dùng nhiều defer?
*   **Trả lời:** Khi bạn cần đóng nhiều tài nguyên theo thứ tự ngược lại lúc mở: file, lock, transaction, network stream…

## ❌ Mistake #14 – Buffered channel vẫn có thể gây deadlock

Nhiều người nghĩ rằng `buffered channel` sẽ luôn tránh được deadlock. Thực tế, nếu số lượng gửi vượt quá buffer mà không có consumer kịp thời – chương trình vẫn sẽ **block và deadlock**.

### 🧠 Giải thích

Buffered channel chỉ cho phép `n` lệnh gửi không block (với `n` là buffer size). Sau đó, nếu không có người nhận, lệnh gửi tiếp theo sẽ block. Đây là behavior hoàn toàn giống như unbuffered channel sau khi đầy.

```
// ❌ Sai – gửi quá buffer nhưng không có người nhận
ch := make(chan int, 2)
ch <- 1
ch <- 2
ch <- 3 // deadlock tại đây!
```

\---

### ✅ Cách fix #1: tạo consumer kịp thời

```
ch := make(chan int, 2)

go func() {
    for v := range ch {
        fmt.Println("Received:", v)
    }
}()

ch <- 1
ch <- 2
ch <- 3
close(ch)
```

### ✅ Cách fix #2: không gửi quá mức buffer nếu không có receiver

```
if len(ch) < cap(ch) {
    ch <- value
}
```

\---

### 🎯 Câu hỏi phỏng vấn

*   **Q:** Buffered channel có giúp tránh deadlock không?
*   **Trả lời:** Không hoàn toàn. Nó chỉ giúp gửi không block **tới giới hạn buffer**. Sau đó vẫn block nếu không có receiver.
*   **Q:** Làm sao để tránh deadlock với buffered channel?
*   **Trả lời:** Luôn đảm bảo:
    *   Có receiver chạy song song trước khi gửi
    *   Không gửi vượt buffer nếu chưa chắc có người nhận
*   **Q:** Có nên dùng buffered channel như hàng đợi?
*   **Trả lời:** Có – nhưng chỉ khi bạn kiểm soát tốt số lượng message và đảm bảo drain kịp thời.

## ❌ Mistake #15 – Trỏ tới biến vòng lặp → tất cả trỏ cùng địa chỉ

Khi bạn dùng `range` và lấy địa chỉ của biến vòng lặp, tất cả pointer có thể trỏ về cùng một vùng nhớ – gây bug khó phát hiện vì dữ liệu bị ghi đè lên nhau.

### 🧠 Giải thích

Biến lặp `v` trong `for _, v := range slice` là biến được **reuse** qua mỗi vòng – không phải mỗi lần tạo biến mới. Khi bạn lấy địa chỉ `&v` → tất cả phần tử trong kết quả đều trỏ cùng địa chỉ.

```
// ❌ Sai – tất cả p đều trỏ đến cùng 1 biến v
s := []string{"a", "b", "c"}
ptrs := []*string{}

for _, v := range s {
    ptrs = append(ptrs, &v)
}

for _, p := range ptrs {
    fmt.Println(*p) // in "c", "c", "c"
}
```

\---

### ✅ Cách fix: tạo biến mới trong scope vòng lặp

```
for _, v := range s {
    val := v
    ptrs = append(ptrs, &val)
}
```

\---

### 🎯 Câu hỏi phỏng vấn

*   **Q:** Vì sao `&v` trong vòng lặp `range` không tạo pointer khác nhau?
*   **Trả lời:** Vì `v` được reuse qua mỗi vòng – nó là 1 biến duy nhất. Tất cả pointer đều trỏ về cùng địa chỉ.
*   **Q:** Cách nào để mỗi pointer trỏ đến đúng phần tử?
*   **Trả lời:** Tạo biến mới trong thân vòng lặp (`val := v`) rồi lấy địa chỉ `&val`.
*   **Q:** Dùng slice index trực tiếp để lấy địa chỉ thì có an toàn không?
*   **Trả lời:** Có – `&s[i]` là địa chỉ phần tử thực trong slice, không bị ảnh hưởng bởi reuse.

## ❌ Mistake #16 – Dùng fmt.Printf sai kiểu định dạng

Go không kiểm tra kiểu định dạng \`Printf\` lúc compile, nhưng nếu bạn dùng sai định dạng (format specifier), output sẽ sai – hoặc tệ hơn là crash, gây lỗi runtime hoặc output không đọc được.

### 🧠 Giải thích

Các hàm như `fmt.Printf`, `fmt.Sprintf` dùng các định dạng như `%d` (int), `%s` (string), `%f` (float)... Nếu truyền nhầm kiểu – ví dụ `%d` mà truyền string – kết quả in ra sẽ sai hoặc panic trong các trường hợp nhất định.

```
// ❌ Sai – truyền string cho %d
name := "Gopher"
fmt.Printf("Tên: %d\n", name) // runtime warning hoặc kết quả rác
```

\---

### ✅ Cách fix: dùng đúng định dạng tương ứng với kiểu dữ liệu

```
fmt.Printf("Tên: %s\n", name) // ✅ đúng format
```

\---

### ✅ Bật \`go vet\` để kiểm tra format sai kiểu

```
go vet ./...
# report: possible formatting directive mismatch
```

\---

### 🎯 Câu hỏi phỏng vấn

*   **Q:** Điều gì xảy ra nếu dùng \`%d\` để in string?
*   **Trả lời:** Output sai định dạng (in ra ASCII value hoặc giá trị không xác định), đôi khi là panic nếu kết hợp nhiều lỗi.
*   **Q:** Làm sao kiểm tra lỗi kiểu định dạng khi dùng fmt?
*   **Trả lời:** Dùng `go vet` hoặc `staticcheck`. Chúng phân tích và phát hiện mismatch giữa định dạng và type.
*   **Q:** Có định dạng nào dùng được cho mọi kiểu?
*   **Trả lời:** Có, dùng `%v` để in bất kỳ giá trị nào theo default format.

## ❌ Mistake #17 – Struct tag sai định dạng nên bị bỏ qua

Nếu bạn viết sai cú pháp struct tag, Go không báo lỗi compile, nhưng các thư viện như `json.Marshal`, `gorm`, hoặc `yaml` sẽ silently ignore tag – dẫn đến dữ liệu không map đúng.

### 🧠 Giải thích

Struct tag trong Go là string định dạng đặc biệt, ví dụ: `` `json:"field_name"` ``. Nếu bạn quên dấu nháy kép hoặc viết nhầm kiểu, thư viện sẽ không map field đó.

```
// ❌ Sai – thiếu dấu nháy kép → json bị ignore
type User struct {
    Name string `json:name` // không marshal được field "name"
}
```

\---

### ✅ Cách fix: dùng cú pháp tag chuẩn

```
type User struct {
    Name string `json:"name"`
}
```

\---

### ✅ Nếu muốn bỏ qua field: dùng `` `json:"-"` ``

```
Password string `json:"-"`
```

\---

### 🎯 Câu hỏi phỏng vấn

*   **Q:** Điều gì xảy ra nếu bạn viết sai struct tag?
*   **Trả lời:** Không có lỗi compile, nhưng thư viện sẽ không đọc được tag đó → field bị bỏ qua khi marshal/unmarshal.
*   **Q:** Làm sao kiểm tra tag sai?
*   **Trả lời:** Dùng linter như `staticcheck`, `golangci-lint` hoặc test trực tiếp với JSON để verify output.
*   **Q:** Có thể viết nhiều tag cùng lúc không?
*   **Trả lời:** Có. Dùng cách viết: `` `json:"name" gorm:"column:name"` `` – chú ý phải đúng định dạng & có khoảng trắng giữa các cặp.

## ❌ Mistake #18 – WaitGroup không gọi Done → block mãi mãi

Go cung cấp `sync.WaitGroup` để chờ các goroutine hoàn tất. Nhưng nếu bạn quên gọi `wg.Done()` sau khi goroutine chạy xong, lệnh `wg.Wait()` sẽ chờ mãi mãi → gây deadlock.

### 🧠 Giải thích

Khi bạn gọi `wg.Add(1)`, bạn phải đảm bảo tương ứng gọi `wg.Done()`. Nếu goroutine panic, return sớm hoặc gặp lỗi logic khiến `Done()` không được gọi → `Wait()` không bao giờ kết thúc.

```
// ❌ Sai – quên gọi Done()
var wg sync.WaitGroup

wg.Add(1)
go func() {
    fmt.Println("run")
    // thiếu wg.Done()
}()

wg.Wait() // block mãi mãi
```

\---

### ✅ Cách fix: luôn dùng `defer wg.Done()` để đảm bảo an toàn

```
wg.Add(1)
go func() {
    defer wg.Done() // ✅ luôn đảm bảo được gọi
    fmt.Println("run")
}()
```

\---

### ✅ Kiểm soát lỗi với recover() nếu goroutine có thể panic

```
go func() {
    defer wg.Done()
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("panic recovered:", r)
        }
    }()
    doSomethingRisky()
}()
```

\---

### 🎯 Câu hỏi phỏng vấn

*   **Q:** Điều gì xảy ra nếu bạn gọi `Wait()` mà thiếu `Done()`?
*   **Trả lời:** Chương trình sẽ block mãi mãi, vì counter của WaitGroup không bao giờ về 0.
*   **Q:** Tại sao nên dùng `defer wg.Done()` trong goroutine?
*   **Trả lời:** Để đảm bảo `Done()` luôn được gọi – kể cả khi có panic hoặc return sớm.
*   **Q:** WaitGroup có thread-safe không? Có thể gọi từ nhiều goroutine?
*   **Trả lời:** Có – WaitGroup được thiết kế để gọi `Add`, `Done`, và `Wait` từ các goroutine khác nhau.

## ❌ Mistake #19 – Không wrap error → mất ngữ cảnh khi debug

Nếu bạn chỉ trả về lỗi gốc mà không wrap (gói) lại, bạn sẽ mất ngữ cảnh: lỗi xảy ra ở đâu, trong tình huống gì. Điều này khiến việc debug trong production trở nên cực kỳ khó khăn.

### 🧠 Giải thích

Go 1.13+ hỗ trợ wrap error bằng `fmt.Errorf(... %w ...)`. Điều này giúp bạn:

*   Giữ lỗi gốc (để dùng `errors.Is`, `errors.As`)
*   Thêm ngữ cảnh phía trên stack: function, service, param
*   Hiển thị lỗi có trace rõ ràng trong log

```
// ❌ Sai – return lỗi thô, không rõ đến từ đâu
if err := repo.Save(user); err != nil {
    return err
}
```

\---

### ✅ Cách fix: wrap lỗi với ngữ cảnh

```
if err := repo.Save(user); err != nil {
    return fmt.Errorf("user service: save failed: %w", err)
}
```

\---

### ✅ Dùng `errors.Is` và `errors.As` để phân tích chain lỗi

```
if errors.Is(err, sql.ErrNoRows) {
    // xử lý lỗi cụ thể
}
```

\---

### 🎯 Câu hỏi phỏng vấn

*   **Q:** Vì sao nên wrap error thay vì return trực tiếp?
*   **Trả lời:** Để giữ lỗi gốc và thêm ngữ cảnh mới. Điều này giúp trace được chuỗi call gây lỗi.
*   **Q:** Sự khác biệt giữa `%w` và `%v` trong fmt.Errorf là gì?
*   **Trả lời:** `%w` dùng để wrap error cho `errors.Is/As`. `%v` chỉ format chuỗi, không wrap được.
*   **Q:** Nếu bạn wrap error nhiều lần, có mất lỗi gốc không?
*   **Trả lời:** Không – bạn có thể unwrap chain nhiều tầng để tìm lỗi gốc bằng `errors.Unwrap()`.

## ❌ Mistake #20 – Biến bị shadow trong block → bug ngầm

Trong Go, bạn có thể khai báo một biến mới trùng tên biến cũ trong phạm vi hẹp hơn. Điều này được gọi là **variable shadowing**. Nếu không cẩn thận, bạn sẽ thao tác sai biến mà không nhận ra.

### 🧠 Giải thích

Dấu `:=` trong Go sẽ khai báo biến mới nếu có ít nhất một biến chưa tồn tại trong scope hiện tại. Nếu bạn dùng lại tên biến cũ với `:=`, nó không cập nhật biến cũ – mà tạo biến mới trong scope mới → logic có thể sai hoàn toàn.

```
// ❌ Sai – biến err bị shadow → log không đúng lỗi thật
var err error
if err := doSomething(); err != nil {
    log.Println("error:", err) // OK
}
fmt.Println(err) // err ban đầu vẫn là nil!
```

\---

### ✅ Cách fix: tách riêng biến mới hoặc dùng `=` nếu biến đã tồn tại

```
err = doSomething()
if err != nil {
    log.Println("error:", err)
}
```

\---

### ✅ Dùng linter để phát hiện shadow

```
golangci-lint run --enable=shadow
```

\---

### 🎯 Câu hỏi phỏng vấn

*   **Q:** Variable shadowing là gì? Có gây bug không?
*   **Trả lời:** Là việc khai báo biến mới trùng tên với biến cũ trong block nhỏ hơn. Có thể gây bug vì tưởng rằng đang dùng biến ngoài nhưng thực chất là biến mới.
*   **Q:** Làm sao để tránh bug do shadow biến?
*   **Trả lời:** Dùng `=` nếu biến đã khai báo, tránh lặp `:=`. Bật linter như `shadow` để cảnh báo.
*   **Q:** Lệnh `:=` hoạt động như thế nào?
*   **Trả lời:** Nó sẽ khai báo biến mới nếu bất kỳ biến nào bên trái chưa có trong scope hiện tại. Ngược lại, nếu tất cả đã tồn tại → compile error.
