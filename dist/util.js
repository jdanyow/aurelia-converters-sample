System.register([], function (_export) {
  'use strict';

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
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzRCQVFnQixjQUFjOzt5QkFLZCxXQUFXOztBQVozQixXQUFTLFdBQVcsQ0FBQyxHQUFHLEVBQUU7QUFDeEIsUUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRztBQUM1QixTQUFHLEdBQUcsUUFBUSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7S0FDL0I7QUFDRCxXQUFPLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztHQUN0RTs7QUFFTSxXQUFTLGNBQWMsQ0FBQyxHQUFHLEVBQUU7QUFDbEMsV0FBUyxDQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxJQUFNLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFHO0dBQ25IOztBQUdNLFdBQVMsV0FBVyxDQUFDLElBQUksRUFBRTtBQUNoQyxXQUFPLElBQUksQ0FDUixXQUFXLEVBQUUsQ0FDYixPQUFPLENBQUMsVUFBVSxFQUFDLEVBQUUsQ0FBQyxDQUN0QixPQUFPLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQ3ZCIiwiZmlsZSI6InV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yODA1NDczNS83MjU4NjZcclxuZnVuY3Rpb24gY2hlY2tEb21haW4odXJsKSB7XHJcbiAgaWYgKHVybC5pbmRleE9mKCcvLycpID09PSAwICkge1xyXG4gICAgdXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyB1cmw7XHJcbiAgfVxyXG4gIHJldHVybiB1cmwudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8oW2Etel0pPzpcXC9cXC8vLCckMScpLnNwbGl0KCcvJylbMF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0V4dGVybmFsTGluayh1cmwpIHtcclxuICByZXR1cm4gKCAoIHVybC5pbmRleE9mKCc6JykgPiAtMSB8fCB1cmwuaW5kZXhPZignLy8nKSA+IC0xICkgJiYgY2hlY2tEb21haW4obG9jYXRpb24uaHJlZikgIT09IGNoZWNrRG9tYWluKHVybCkgKTtcclxufVxyXG5cclxuLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTA1NDg2Mi83MjU4NjZcclxuZXhwb3J0IGZ1bmN0aW9uIHRpdGxlVG9TbHVnKHRleHQpIHtcclxuICByZXR1cm4gdGV4dFxyXG4gICAgLnRvTG93ZXJDYXNlKClcclxuICAgIC5yZXBsYWNlKC9bXlxcdyBdKy9nLCcnKVxyXG4gICAgLnJlcGxhY2UoLyArL2csJy0nKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=