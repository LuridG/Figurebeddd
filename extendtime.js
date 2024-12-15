 function handleRequest(request) {
        console.log("Intercepting Request:", request.url);

        // 针对指定的 URL 增加 Keep-Alive 或其他超时控制逻辑
        if (request.url.includes("example.com")) {
          request.headers["Connection"] = "keep-alive";
          request.headers["Keep-Alive"] = "timeout=3600"; // 超时时间
        }

        return request;
      }

      $done(handleRequest($request));