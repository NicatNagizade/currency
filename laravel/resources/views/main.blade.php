<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

</head>

<body>

    <div class="currency">
        <div><span>Last updated: </span><span id="currency-updated-date"></span></div>
        <table class="table">
            <thead class="thead-light">
                <tr>
                    <th scope="col">Currency Code A</th>
                    <th scope="col">Currency Code B</th>
                    <th scope="col">Date</th>
                    <th scope="col">Rate Buy</th>
                    <th scope="col">Rate Sell</th>
                    <th scope="col">Rate Cross</th>
                </tr>
            </thead>
            <tbody class="currency-body">

            </tbody>
        </table>
    </div>
    <input type="hidden" id="socket_url" value="{{ env('SOCKET_URL') }}" />
    <script src="{{ asset('js/main.js') }}"></script>
</body>

</html>
