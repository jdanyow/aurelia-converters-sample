/* */ 
(function(process) {
  Autolinker.MatchValidator = Autolinker.Util.extend(Object, {
    invalidProtocolRelMatchRegex: /^[\w]\/\//,
    hasFullProtocolRegex: /^[A-Za-z][-.+A-Za-z0-9]+:\/\//,
    uriSchemeRegex: /^[A-Za-z][-.+A-Za-z0-9]+:/,
    hasWordCharAfterProtocolRegex: /:[^\s]*?[A-Za-z]/,
    isValidMatch: function(urlMatch, protocolUrlMatch, protocolRelativeMatch) {
      if ((protocolUrlMatch && !this.isValidUriScheme(protocolUrlMatch)) || this.urlMatchDoesNotHaveProtocolOrDot(urlMatch, protocolUrlMatch) || this.urlMatchDoesNotHaveAtLeastOneWordChar(urlMatch, protocolUrlMatch) || this.isInvalidProtocolRelativeMatch(protocolRelativeMatch)) {
        return false;
      }
      return true;
    },
    isValidUriScheme: function(uriSchemeMatch) {
      var uriScheme = uriSchemeMatch.match(this.uriSchemeRegex)[0];
      return (uriScheme !== 'javascript:' && uriScheme !== 'vbscript:');
    },
    urlMatchDoesNotHaveProtocolOrDot: function(urlMatch, protocolUrlMatch) {
      return (!!urlMatch && (!protocolUrlMatch || !this.hasFullProtocolRegex.test(protocolUrlMatch)) && urlMatch.indexOf('.') === -1);
    },
    urlMatchDoesNotHaveAtLeastOneWordChar: function(urlMatch, protocolUrlMatch) {
      if (urlMatch && protocolUrlMatch) {
        return !this.hasWordCharAfterProtocolRegex.test(urlMatch);
      } else {
        return false;
      }
    },
    isInvalidProtocolRelativeMatch: function(protocolRelativeMatch) {
      return (!!protocolRelativeMatch && this.invalidProtocolRelMatchRegex.test(protocolRelativeMatch));
    }
  });
})(require("process"));
