function checkAnagrams(phrase1, phrase2) {
  function setForCompare (str) {
    return str.replace(/\s/g, '').toLowerCase().split('').sort().join('')
    // ruby: .squish
  };
  return setForCompare(phrase1) === setForCompare(phrase2);
};

checkAnagrams("Listen is it", "silent it is");