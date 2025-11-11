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
4. 
In 2025, I led several high-impact initiatives across the ATM platform, delivering key enhancements such as vulnerability fixes, mTLS-enabled Cert-Renewal APIs, and dynamic secrets rotation. I successfully managed ELK migration, Windows Server upgrades, and implemented one-click production deployments with zero disruption. I consistently stayed ahead of delivery plans and ensured all components met resilience and compliance standards.

I continued championing the Application Evergreen component across in-house projects, enabling secure, automated patching with no issues reported. As part of the Cloud-WAF onboarding automation, I led solution design, wireframes, and Spring Batch implementation, while actively coordinating with cross-functional teams and stakeholders to ensure complete requirement coverage.

I delivered CSM UI enhancements (IRIS and Fierce) on time and defect-free, and remediated all vulnerabilities within SLA for ATM and CSM estates. I ensured strong documentation, risk management, and stakeholder communication, with a focus on secure and automated delivery.

I improved CI/CD processes using GitLab pipelines and supported others in adopting automation. I also enrolled in the 2025 Staff Engineer Excellence Programme to further enhance my technical leadership.

Through innovation, ownership, and collaboration, I’ve delivered high-quality results while promoting best practices, technical growth, and world-class service across all projects.




Perfect — creating **two specialized pipeline components**, one for **Maven** and one for **Gradle**, is a clean and scalable approach. It helps avoid overcomplicating the logic in a single pipeline and makes onboarding easier for teams using either tool.

Here’s how you can **design, structure, and implement** this in GitLab CI/CD:

---

## ✅ Strategy: Split GitLab CI Pipelines for Maven & Gradle

### 🧱 Folder Structure in Common GitLab Repo

```
evergreen-engine/
│
├── maven/
│   ├── .gitlab-ci.yml              ← Maven-specific pipeline
│   └── scripts/
│       ├── run-upgrade.sh
│       ├── create-pr.sh
│       └── parse-maven-output.py
│
├── gradle/
│   ├── .gitlab-ci.yml              ← Gradle-specific pipeline
│   └── scripts/
│       ├── run-upgrade.sh
│       ├── create-pr.sh
│       └── parse-gradle-output.py
│
└── README.md
```

---

### 🧪 Sample: `maven/.gitlab-ci.yml`

```yaml
stages:
  - checkout
  - scan
  - upgrade
  - test
  - pull-request

checkout:
  stage: checkout
  script:
    - echo "Cloning Maven repo..."

scan:
  stage: scan
  script:
    - mvn versions:display-dependency-updates

upgrade:
  stage: upgrade
  script:
    - bash scripts/run-upgrade.sh $EXCLUDED_DEPENDENCIES

test:
  stage: test
  script:
    - mvn clean verify

pull-request:
  stage: pull-request
  script:
    - bash scripts/create-pr.sh
```

---

### 🧪 Sample: `gradle/.gitlab-ci.yml`

```yaml
stages:
  - checkout
  - scan
  - upgrade
  - test
  - pull-request

checkout:
  stage: checkout
  script:
    - echo "Cloning Gradle repo..."

scan:
  stage: scan
  script:
    - ./gradlew dependencyUpdates

upgrade:
  stage: upgrade
  script:
    - bash scripts/run-upgrade.sh $EXCLUDED_DEPENDENCIES

test:
  stage: test
  script:
    - ./gradlew test

pull-request:
  stage: pull-request
  script:
    - bash scripts/create-pr.sh
```

---

### 🔗 How Other Projects Will Use It

In their **`.gitlab-ci.yml`**, projects include either pipeline:

#### For Maven projects:

```yaml
include:
  - project: 'devops/evergreen-engine'
    file: '/maven/.gitlab-ci.yml'

variables:
  EXCLUDED_DEPENDENCIES: 'log4j,spring-security'
  JIRA_TICKET: 'SDS-1011'
```

#### For Gradle projects:

```yaml
include:
  - project: 'devops/evergreen-engine'
    file: '/gradle/.gitlab-ci.yml'

variables:
  EXCLUDED_DEPENDENCIES: 'commons-io,slf4j'
  JIRA_TICKET: 'SDS-1022'
```

---

### 💡 Advantages of This Split Approach

| Benefit             | Description                                               |
| ------------------- | --------------------------------------------------------- |
| ✅ **Simplicity**    | Projects only load what they need (Maven or Gradle)       |
| ✅ **Reusability**   | Scripts and logic are modular and maintained separately   |
| ✅ **Extensibility** | Future support for Python, Node, Docker becomes cleaner   |
| ✅ **Ease of Use**   | Minimal config for consumers; just include the right file |

---

### 📌 Optional Features You Can Add Later

* Auto-close MR if no changes found
* Add Prisma/Veracode scan stage after test
* Slack or Teams notifications on MR creation
* Weekly dry-run mode to check outdated deps without raising PRs

---

Would you like me to:

* Generate a **diagram** of this split architecture?
* Help you write the `run-upgrade.sh` or PR automation scripts?
* Package this as a shareable **PDF or Confluence page** for internal sharing?

Let me know what’s next!


