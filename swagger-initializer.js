window.addEventListener('DOMContentLoaded', () => {
  const showError = () => {
    document.getElementById('load-error').hidden = false;
    document.querySelector('.loading-message')?.remove();
  };

  if (typeof window.SwaggerUIBundle !== 'function') {
    showError();
    return;
  }

  window.ui = window.SwaggerUIBundle({
    url: './openapi.yaml',
    dom_id: '#swagger-ui',
    deepLinking: true,
    displayOperationId: false,
    docExpansion: 'list',
    defaultModelsExpandDepth: -1,
    defaultModelExpandDepth: 2,
    filter: true,
    supportedSubmitMethods: [],
    persistAuthorization: false,
    validatorUrl: null,
    presets: [window.SwaggerUIBundle.presets.apis],
    layout: 'BaseLayout',
    onFailure: showError,
  });
});
