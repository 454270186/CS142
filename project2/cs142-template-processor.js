function Cs142TemplateProcessor(template) {
    this.template = template;
  }
  
  Cs142TemplateProcessor.prototype.fillIn = function(dictionary) {
    var filledTemplate = this.template;
  
    // 使用正则表达式替换模板中的属性
    filledTemplate = filledTemplate.replace(/{{\s*([^}]+)\s*}}/g, function(match, property) {
      if (dictionary.hasOwnProperty(property)) {
        return dictionary[property];
      } else {
        return '';
      }
    });
  
    return filledTemplate;
  };