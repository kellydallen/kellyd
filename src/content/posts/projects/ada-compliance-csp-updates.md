---
title: "WCAG ADA Compliance and CSP Updates"
description: "Not a glamorous project, but something critical in today's day and age, especially for a governmental organization. I updated all the pbc.gov and custom domains to be ADA-compliant or at least as passable as possible. Sharepoint (on the main site) can be a difficult thing to make ADA compliant, especially in an on-premises install with no customization beyond the master page."
date: "Apr 01 2024"
categories: ["projects"]
image: "/images/pbcpao-ada.png"
---

**URLs**: Various Palm Beach County websites.

## Background

Palm Beach County's websites have all had serious ADA compliance issues. In addition, there was little to no security policy configured via CSP (Content Security Policy). While these are different issues, I took the lead on the remediation of both of these issues. They were essentially two separate projects, but I'm listing them together here.

**Additional Concerns**: The primary pbc.gov website runs as an on-premises Sharepoint that is almost entirely non-customized.

One of the big challenges in government web design, and certainly other sectors as well, is ADA compliance. Palm Beach County contracted a third party company specializing in ADA testing and compliance (BOIA, Bureau of Internet Accessibility).

While the site is by no means perfect from an accessibility standpoint, I personally worked through BOIA's recommendations including keyboard navigation, acceptable color contrast, aria landmarks, and more. The streaming video platform that I designed in 2015 was also retrofitted to allow for both live captions, and captions on recorded videos.

Sharepoint has quite a few issues dealing with ADA compliance and overall user-experience, but where possible the site was updated to reach most ADA standards. After remediation, the primary problems were almost entirely among a few of the problematic Sharepoint "apps" and the roughly 80,000 PDFs the county stored online.

In addition, the other third-party minisites all launched meeting strict ADA standards on day one, including the redesign of the pbcpao.gov (Property Appraiser) site.

![PBCPAO.GOV Lighthouse scores showing 100%](/images/pbcpao-ada.png)

Of course, Lighthouse is not the absolute authority, but the sites were all certainly meeting high standards on the day of launch, depending on future maintenance and updates.

In addition, security audits of the various websites were mostly good, but showed problems with the content security policies. All custom sites that I maintained (roughly 10-12) were updated to cover best practices in the CSP.
