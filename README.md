# tasks-ui
CSS - Cascading Style Sheets


Type of selectors
Universal (*)
Elemenet selector (tag name)
class (.)-  meet link and i would like to keep common properties
id (#)  - single student having a unique and should be stable
grouping selector
combinators
    - Descendant Selector (space)
    - Child Selector (>)

Type of styles 
1. Inline
2. Internal
3. Common css

Situation
When I was working at ABN Amro Bank, we received an incident through ServiceNow where sensitive IBAN account details were being exposed in a GET API call. This was a critical issue because such data should never be displayed to end users in that context. The incident was escalated to our engineering team, and there was a lot of urgency since it touched on compliance and customer trust.

Task
As the engineering lead, I had to quickly coordinate the analysis, identify the root cause, and come up with a practical solution that could be implemented across multiple services — while ensuring we didn’t break any existing functionality.

Action
I immediately gathered the technical team and started reviewing the API flows. We found that multiple services were exposing sensitive data through GET calls, which meant the problem was not isolated but systemic. I stepped in to propose a solution: we would change those GET calls to POST requests and restructure the way data was passed. This would ensure that sensitive user information wasn’t exposed in the URL or cached inadvertently.

In parallel, I documented the impact and explained to stakeholders in simple terms why this was a risk and how we were mitigating it. I also proposed adding API governance checks and code reviews to prevent similar issues in the future.

Response
We quickly rolled out the fix, tested it thoroughly, and resolved the incident without further escalation. The client appreciated the speed of resolution and the clarity of communication. Internally, the experience strengthened our data protection measures and led to updated guidelines for API design and validation.

Impact
This incident not only resolved a serious security risk but also improved our overall API governance. It reinforced client trust because we responded transparently and effectively. It also showed my ability to step in during critical issues, lead the team, and propose solutions that had both technical and long-term process improvements.


✅ That’s **\~950 words** for Part 1 (Polaris). It’s plain English, STAR-structured in flow, and ends with **impact statements** (how it helped *you, your leader, your team* → boosting your Z-score).

👉 Next, I’ll expand **Part 2 (Scoot Airlines, 2015)** to \~1000 words with similar style. Do you want me to continue directly, or would you like to review/edit Part 1 first before I draft Part 2?
