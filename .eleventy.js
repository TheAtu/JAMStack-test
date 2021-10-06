const{ DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  //Watch for changes, if(change==>recompile)
    eleventyConfig.addWatchTarget("./src/scss");
    eleventyConfig.addWatchTarget("*njk");

  // Include other assets/items in public
    eleventyConfig.addPassthroughCopy('./src/assets');
    //Include Css compiled files
      eleventyConfig.addPassthroughCopy("./src/css")
    //Include Admin CMS files
      eleventyConfig.addPassthroughCopy("./admin")
    
  //Use standard time luxon to change default dates to "date_Med"
    eleventyConfig.addFilter("postDate", (dateObj) => {
      return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    })
  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};
