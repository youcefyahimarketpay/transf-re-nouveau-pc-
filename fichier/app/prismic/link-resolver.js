/**
 * To learn more about Link Resolving check out the Prismic documentation
 * https://prismic.io/docs/vuejs/beyond-the-api/link-resolving
 */

export default function(doc) {
  if (doc.isBroken) {
    return "/not-found";
  }

  if (doc.type === "homepage") {
    return `/${doc.lang}`;
  }

  if (doc.type === "clientpage") {
    return `/${doc.lang}/casclient`;
  }

  if (doc.type === "blogpage") {
    return `/${doc.lang}/blog`;
  }

  if (doc.type === "page") {
    return `/${doc.lang}/${doc.uid}`;
  }

  if (doc.type === "client") {
    return `/${doc.lang}/clients/${doc.uid}`;
  }

  if (doc.type === "post") {
    return `/${doc.lang}/post/${doc.uid}`;
  }

  if (doc.type === "contactpage") {
    return `/${doc.lang}/contact-us`;
  }

  if (doc.type === "validation") {
    return `/${doc.lang}/validation`;
  }

  if(doc.type === "career"){
    retrun `/${doc.lang}/career`
  }

  if(doc.type === "team"){
    retrun `/${doc.lang}/team`
  }
  if(doc.type === "jobs"){
    retrun `/${doc.lang}/jobs`
  }


  return "/not-found";
}
