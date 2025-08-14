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

Summary: Devices unable to communicate with aPaaS pods via v4 URL

Description:
We are blocked by an issue where devices are unable to communicate with aPaaS pods.

Previously, during the v3–v4 migration, firewalls were already in place, and we implemented VIPs to avoid a big-bang approach. This worked smoothly without any issues. The service was later stopped for other security reasons.

We now want to bring this service back online, but this time we are pointing to the aPaaS pods via the v4 URL instead of v3. However, the devices are not able to connect, and it’s not working as expected.

Request:
Please investigate the issue and check if there are any changes to VIP or firewall configurations since the original v3–v4 migration setup.

