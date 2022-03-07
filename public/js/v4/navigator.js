                    $.ajax({
                        type: "get",
                        async: false,
                        url: "https://na.apps.amsoveasea.com/swoole/?actid=2020&r=index/getCountry&_only_service_response_=1",
                        dataType: "json",
                        success: function (result) {
                        $('input[name="ip"]').val(result.ip);
                        $('input[name="ua"]').val(navigator.userAgent)
                        }
                    })