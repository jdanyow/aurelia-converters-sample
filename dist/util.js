System.register([], function (_export) {
  _export('isExternalLink', isExternalLink);

  _export('titleToSlug', titleToSlug);

  function checkDomain(url) {
    if (url.indexOf('//') === 0) {
      url = location.protocol + url;
    }
    return url.toLowerCase().replace(/([a-z])?:\/\//, '$1').split('/')[0];
  }

  function isExternalLink(url) {
    return (url.indexOf(':') > -1 || url.indexOf('//') > -1) && checkDomain(location.href) !== checkDomain(url);
  }

  function titleToSlug(text) {
    return text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
  }

  return {
    setters: [],
    execute: function () {
      'use strict';
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs0QkFRZ0IsY0FBYzs7eUJBS2QsV0FBVzs7QUFaM0IsV0FBUyxXQUFXLENBQUMsR0FBRyxFQUFFO0FBQ3hCLFFBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUc7QUFDNUIsU0FBRyxHQUFHLFFBQVEsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0tBQy9CO0FBQ0QsV0FBTyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7R0FDdEU7O0FBRU0sV0FBUyxjQUFjLENBQUMsR0FBRyxFQUFFO0FBQ2xDLFdBQVMsQ0FBRSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsSUFBTSxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBRztHQUNuSDs7QUFHTSxXQUFTLFdBQVcsQ0FBQyxJQUFJLEVBQUU7QUFDaEMsV0FBTyxJQUFJLENBQ1IsV0FBVyxFQUFFLENBQ2IsT0FBTyxDQUFDLFVBQVUsRUFBQyxFQUFFLENBQUMsQ0FDdEIsT0FBTyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQztHQUN2QiIsImZpbGUiOiJ1dGlsLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==