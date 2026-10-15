# Graph Report - src  (2026-10-09)

## Corpus Check
- 160 files · ~107,924 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 982 nodes · 1634 edges · 92 communities (55 shown, 37 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `16a7fb56`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- dialog.tsx
- sidebar.tsx
- DiagnosticPlatform.tsx
- cn
- Solutions.tsx
- utils.ts
- field.tsx
- Seo.tsx
- App.tsx
- item.tsx
- Framework.tsx
- TableOfContents.tsx
- menubar.tsx
- FinancialAdvisors.tsx
- InsuranceAgencies.tsx
- PrivacyPolicy.tsx
- TermsConditions.tsx
- context-menu.tsx
- dropdown-menu.tsx
- About.tsx
- Resources.tsx
- revenue-infrastructure-package/App.tsx
- CanonicalDefinition.tsx
- SiteHeader.tsx
- carousel.tsx
- HomeServices.tsx
- buyer-journey-package/App.tsx
- Home.tsx
- button.tsx
- SiteHeader
- SuppliedVisualBlocks.tsx
- chart.tsx
- drawer.tsx
- select.tsx
- CRMAutomation.tsx
- GoogleBusinessProfileOptimizationReview.tsx
- NineDomainFramework.tsx
- alert-dialog.tsx
- card.tsx
- navigation-menu.tsx
- Industries.tsx
- AIVisibility.tsx
- BuyerJourneyPlugAndPlayHost.tsx
- empty.tsx
- pagination.tsx
- ErrorBoundary.tsx
- HomepageSectionSpacing.test.ts
- glowy-waves-hero-shadcnui.tsx
- toggle-group.tsx
- ThemeContext.tsx
- AIBuyerJourneySection.tsx
- AIEvolutionSection.tsx
- SuppliedFragmentedConnectedVisual.tsx
- AIEntityOptimizationSection.tsx
- AIOptimizationConsolidationSection.tsx
- AIRecommendationMechanicsSection.tsx
- BusinessOutcomesInteractive.tsx
- BuyerJourneyPlugAndPlayHost.test.ts
- RevenueInfrastructurePlugAndPlayHost.test.ts
- input-otp.tsx
- AIBusinessOutcomesSection.tsx
- AIEvaluationSection.tsx
- AIFrameworksResourcesSection.tsx
- AIFrequentlyAskedQuestionsSection.tsx
- AILifecyclePlaceholderSection.tsx
- AIMaturityProgressionSection.tsx
- AIRoadmapPlaceholderSection.tsx
- AIServiceBusinessRelevanceSection.tsx
- AITechnicalFoundationSection.tsx
- AIVScorePlaceholderSection.tsx
- HowGWAppliesTheFrameworkSection
- CredibilityBridgeRefinement.test.ts
- FragmentedVsConnectedPackage.tsx
- HeroExploreCue.test.ts
- HowGwsWorksCards.test.ts
- IndustryImageCards.test.ts
- MobileSectionJump.tsx
- PasswordGate.tsx
- ProblemRecognitionHeading.test.ts
- RevenueMaturity.tsx
- SolutionsSectionColors.test.ts
- gridDotScope.test.ts
- FixedNavigation.test.ts
- GwsParticleDrift.test.ts
- HomepageCardDropdownShadow.test.ts
- RevenueInfrastructureFlywheelSection

## God Nodes (most connected - your core abstractions)
1. `cn()` - 274 edges
2. `SiteHeader()` - 25 edges
3. `Seo()` - 23 edges
4. `TableOfContents()` - 23 edges
5. `SiteFooter()` - 22 edges
6. `useReveal()` - 13 edges
7. `Button()` - 12 edges
8. `buttonVariants` - 9 edges
9. `useReveal()` - 8 edges
10. `useDialogComposition()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `AlertDialogOverlay()` --calls--> `cn()`  [EXTRACTED]
  components/ui/alert-dialog.tsx → lib/utils.ts
- `AlertDialogContent()` --calls--> `cn()`  [EXTRACTED]
  components/ui/alert-dialog.tsx → lib/utils.ts
- `AlertDialogHeader()` --calls--> `cn()`  [EXTRACTED]
  components/ui/alert-dialog.tsx → lib/utils.ts
- `AlertDialogFooter()` --calls--> `cn()`  [EXTRACTED]
  components/ui/alert-dialog.tsx → lib/utils.ts
- `AlertDialogTitle()` --calls--> `cn()`  [EXTRACTED]
  components/ui/alert-dialog.tsx → lib/utils.ts

## Import Cycles
- None detected.

## Communities (92 total, 37 thin omitted)

### Community 0 - "dialog.tsx"
Cohesion: 0.06
Nodes (38): ManusDialogProps, loadMapScript(), MapView(), MapViewProps, Window, Command(), CommandDialog(), CommandGroup() (+30 more)

### Community 1 - "sidebar.tsx"
Cohesion: 0.06
Nodes (40): Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetTitle(), Sidebar() (+32 more)

### Community 2 - "DiagnosticPlatform.tsx"
Cohesion: 0.06
Nodes (27): AIReadyWebsite(), APPROACH, CALL_STEPS, OUTCOMES, PROBLEMS, ASSESSMENT_PRINCIPLES, AssessmentFamilySection(), AssessmentPrinciplesSection() (+19 more)

### Community 3 - "cn"
Cohesion: 0.09
Nodes (31): AccordionContent(), AccordionItem(), AccordionTrigger(), Avatar(), AvatarFallback(), AvatarImage(), BreadcrumbEllipsis(), BreadcrumbItem() (+23 more)

### Community 4 - "Solutions.tsx"
Cohesion: 0.07
Nodes (20): OUTCOMES, SolutionsBusinessOutcomesSection(), SolutionsClosingCTASection(), CARDS, SolutionsConnectedSystemSection(), SolutionsConstraintFirstSection(), CAPABILITIES, highlight() (+12 more)

### Community 5 - "utils.ts"
Cohesion: 0.07
Nodes (15): Alert(), AlertDescription(), AlertTitle(), alertVariants, Badge(), badgeVariants, Checkbox(), HoverCardContent() (+7 more)

### Community 6 - "field.tsx"
Cohesion: 0.10
Nodes (22): Field(), FieldContent(), FieldDescription(), FieldError(), FieldGroup(), FieldLabel(), FieldLegend(), FieldSeparator() (+14 more)

### Community 7 - "Seo.tsx"
Cohesion: 0.11
Nodes (7): PAGE_SEO, Seo(), SeoProps, SiteFooter(), ConversionSystems(), LEADERSHIP, Teams()

### Community 8 - "App.tsx"
Cohesion: 0.12
Nodes (7): App(), NOTE: About Theme, Toaster(), AIVisibilityReview(), WHAT_EXPECT, Window, DiagnosticPlatform()

### Community 9 - "item.tsx"
Cohesion: 0.13
Nodes (17): ButtonGroup(), ButtonGroupSeparator(), ButtonGroupText(), buttonGroupVariants, Item(), ItemActions(), ItemContent(), ItemDescription() (+9 more)

### Community 10 - "Framework.tsx"
Cohesion: 0.13
Nodes (13): BusinessOutcomesSection(), DiagnosticCTASection(), DOMAIN_ICONS, DOMAINS, FragmentedVsConnectedSection(), Framework(), I, INFRA_X_POSITIONS (+5 more)

### Community 11 - "TableOfContents.tsx"
Cohesion: 0.12
Nodes (8): getTocForPath(), PAGE_TOCS, PageToc, TableOfContents(), TocItem, RevenueDiagnostic(), WHAT_EXPECT, Window

### Community 12 - "menubar.tsx"
Cohesion: 0.12
Nodes (11): Menubar(), MenubarCheckboxItem(), MenubarContent(), MenubarItem(), MenubarLabel(), MenubarRadioItem(), MenubarSeparator(), MenubarShortcut() (+3 more)

### Community 14 - "InsuranceAgencies.tsx"
Cohesion: 0.12
Nodes (6): CAPABILITY_GROUPS, CHALLENGES, DISCOVERY_SIGNALS, FAQ_ITEMS, InsuranceAgencies(), TRUST_DIMENSIONS

### Community 17 - "context-menu.tsx"
Cohesion: 0.12
Nodes (9): ContextMenuCheckboxItem(), ContextMenuContent(), ContextMenuItem(), ContextMenuLabel(), ContextMenuRadioItem(), ContextMenuSeparator(), ContextMenuShortcut(), ContextMenuSubContent() (+1 more)

### Community 18 - "dropdown-menu.tsx"
Cohesion: 0.12
Nodes (9): DropdownMenuCheckboxItem(), DropdownMenuContent(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuRadioItem(), DropdownMenuSeparator(), DropdownMenuShortcut(), DropdownMenuSubContent() (+1 more)

### Community 19 - "About.tsx"
Cohesion: 0.12
Nodes (4): About(), DIAGNOSTIC_STEPS, EXPERIENCE_PILLARS, OPERATING_PRINCIPLES

### Community 20 - "Resources.tsx"
Cohesion: 0.12
Nodes (5): CATEGORIES, Category, ResourceItem, Resources(), Status

### Community 21 - "revenue-infrastructure-package/App.tsx"
Cohesion: 0.14
Nodes (8): App(), CENTER_CAPABILITIES, LEFT_CONSEQUENCES, LEFT_TOOLS, PROCESS_STEPS, RIGHT_OUTCOMES, hostStyles, RevenueInfrastructurePlugAndPlayHost()

### Community 22 - "CanonicalDefinition.tsx"
Cohesion: 0.14
Nodes (5): CanonicalDefinition(), ICON_PROPS, NODE_CXS, NOT_ITEMS, PILLARS

### Community 23 - "SiteHeader.tsx"
Cohesion: 0.24
Nodes (7): footerGroups, GWS_NAV_GROUPS, GWS_NAV_LINKS, NavigationGroup, NavigationMenuItem, shouldCompactStickyHeader(), STICKY_HEADER_COMPACT_THRESHOLD

### Community 24 - "carousel.tsx"
Cohesion: 0.19
Nodes (13): Carousel(), CarouselApi, CarouselContent(), CarouselContext, CarouselContextProps, CarouselItem(), CarouselNext(), CarouselOptions (+5 more)

### Community 26 - "buyer-journey-package/App.tsx"
Cohesion: 0.15
Nodes (5): C, CARD_X, NODE_CARD, NODE_X, PARTICLES

### Community 27 - "Home.tsx"
Cohesion: 0.24
Nodes (9): getPageParallaxTravel(), PAGE_PARALLAX_SCROLL_TRIGGER, PAGE_TEXT_REVEAL_TRIGGER, fitSignals, Home(), industryCards, problemCards, processSteps (+1 more)

### Community 28 - "button.tsx"
Cohesion: 0.26
Nodes (8): systemLayers, AlertDialogAction(), AlertDialogCancel(), Button(), buttonVariants, Calendar(), CalendarDayButton(), PaginationLink()

### Community 29 - "SiteHeader"
Cohesion: 0.17
Nodes (3): SiteHeader(), AIVisibilityCallPage(), WHAT_EXPECT

### Community 30 - "SuppliedVisualBlocks.tsx"
Cohesion: 0.24
Nodes (4): comparisonCapabilities, REVENUE_INFRASTRUCTURE_CAPABILITIES, REVENUE_INFRASTRUCTURE_OUTCOMES, REVENUE_INFRASTRUCTURE_TOOLS

### Community 31 - "chart.tsx"
Cohesion: 0.25
Nodes (9): ChartConfig, ChartContainer(), ChartContext, ChartContextProps, ChartLegendContent(), ChartTooltipContent(), getPayloadConfigFromPayload(), THEMES (+1 more)

### Community 32 - "drawer.tsx"
Cohesion: 0.18
Nodes (6): DrawerContent(), DrawerDescription(), DrawerFooter(), DrawerHeader(), DrawerOverlay(), DrawerTitle()

### Community 33 - "select.tsx"
Cohesion: 0.18
Nodes (7): SelectContent(), SelectItem(), SelectLabel(), SelectScrollDownButton(), SelectScrollUpButton(), SelectSeparator(), SelectTrigger()

### Community 35 - "GoogleBusinessProfileOptimizationReview.tsx"
Cohesion: 0.18
Nodes (3): GoogleBusinessProfileOptimizationReview(), WHAT_EXPECT, Window

### Community 36 - "NineDomainFramework.tsx"
Cohesion: 0.22
Nodes (9): cols, domains, edges, NineDomainFramework(), nodePos(), PopoverPos, rows, SystemDiagram() (+1 more)

### Community 37 - "alert-dialog.tsx"
Cohesion: 0.20
Nodes (6): AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay(), AlertDialogTitle()

### Community 38 - "card.tsx"
Cohesion: 0.24
Nodes (8): Card(), CardAction(), CardContent(), CardDescription(), CardFooter(), CardHeader(), CardTitle(), NotFound()

### Community 39 - "navigation-menu.tsx"
Cohesion: 0.22
Nodes (9): NavigationMenu(), NavigationMenuContent(), NavigationMenuIndicator(), NavigationMenuItem(), NavigationMenuLink(), NavigationMenuList(), NavigationMenuTrigger(), navigationMenuTriggerStyle (+1 more)

### Community 41 - "AIVisibility.tsx"
Cohesion: 0.43
Nodes (4): AICClosingCTABand(), AIVisibilityHero(), AnchorLink(), AIVisibility()

### Community 42 - "BuyerJourneyPlugAndPlayHost.tsx"
Cohesion: 0.29
Nodes (6): App(), BuyerJourneyPlugAndPlayHost(), DriftBeam, DriftNode, GwsParticleDrift(), PARTICLE_CHARS

### Community 43 - "empty.tsx"
Cohesion: 0.29
Nodes (7): Empty(), EmptyContent(), EmptyDescription(), EmptyHeader(), EmptyMedia(), emptyMediaVariants, EmptyTitle()

### Community 44 - "pagination.tsx"
Cohesion: 0.25
Nodes (6): Pagination(), PaginationContent(), PaginationEllipsis(), PaginationLinkProps, PaginationNext(), PaginationPrevious()

### Community 45 - "ErrorBoundary.tsx"
Cohesion: 0.29
Nodes (3): ErrorBoundary, Props, State

### Community 46 - "HomepageSectionSpacing.test.ts"
Cohesion: 0.29
Nodes (6): buyerJourneyHost, buyerJourneyPackage, homeSource, pageStyles, revenueHost, revenuePackageStyles

### Community 47 - "glowy-waves-hero-shadcnui.tsx"
Cohesion: 0.38
Nodes (3): Point, WaveConfig, HERO_PARALLAX_LAYERS

### Community 48 - "toggle-group.tsx"
Cohesion: 0.43
Nodes (5): ToggleGroup(), ToggleGroupContext, ToggleGroupItem(), Toggle(), toggleVariants

### Community 49 - "ThemeContext.tsx"
Cohesion: 0.29
Nodes (5): Theme, ThemeContext, ThemeContextType, ThemeProvider(), ThemeProviderProps

### Community 52 - "SuppliedFragmentedConnectedVisual.tsx"
Cohesion: 0.33
Nodes (3): connected, fragmented, systemLayers

### Community 56 - "BusinessOutcomesInteractive.tsx"
Cohesion: 0.50
Nodes (3): BUSINESS_OUTCOMES, BusinessOutcomesInteractive(), pageStyles

### Community 57 - "BuyerJourneyPlugAndPlayHost.test.ts"
Cohesion: 0.40
Nodes (4): homeSource, hostSource, packageSource, pageStyles

### Community 58 - "RevenueInfrastructurePlugAndPlayHost.test.ts"
Cohesion: 0.40
Nodes (4): homeSource, hostSource, packageSource, packageStyles

### Community 59 - "input-otp.tsx"
Cohesion: 0.40
Nodes (3): InputOTP(), InputOTPGroup(), InputOTPSlot()

## Knowledge Gaps
- **159 isolated node(s):** `pageStyles`, `homeSource`, `hostSource`, `packageSource`, `pageStyles` (+154 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **37 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `dialog.tsx`, `sidebar.tsx`, `utils.ts`, `field.tsx`, `item.tsx`, `menubar.tsx`, `context-menu.tsx`, `dropdown-menu.tsx`, `carousel.tsx`, `button.tsx`, `chart.tsx`, `drawer.tsx`, `select.tsx`, `alert-dialog.tsx`, `card.tsx`, `navigation-menu.tsx`, `empty.tsx`, `pagination.tsx`, `ErrorBoundary.tsx`, `toggle-group.tsx`, `input-otp.tsx`?**
  _High betweenness centrality (0.417) - this node is a cross-community bridge._
- **Why does `Seo()` connect `Seo.tsx` to `DiagnosticPlatform.tsx`, `Solutions.tsx`, `App.tsx`, `Framework.tsx`, `TableOfContents.tsx`, `FinancialAdvisors.tsx`, `InsuranceAgencies.tsx`, `PrivacyPolicy.tsx`, `TermsConditions.tsx`, `About.tsx`, `Resources.tsx`, `HomeServices.tsx`, `Home.tsx`, `SiteHeader`, `CRMAutomation.tsx`, `GoogleBusinessProfileOptimizationReview.tsx`, `card.tsx`, `Industries.tsx`, `AIVisibility.tsx`?**
  _High betweenness centrality (0.031) - this node is a cross-community bridge._
- **Why does `SiteHeader()` connect `SiteHeader` to `DiagnosticPlatform.tsx`, `Solutions.tsx`, `Seo.tsx`, `App.tsx`, `Framework.tsx`, `TableOfContents.tsx`, `FinancialAdvisors.tsx`, `InsuranceAgencies.tsx`, `PrivacyPolicy.tsx`, `TermsConditions.tsx`, `About.tsx`, `Resources.tsx`, `SiteHeader.tsx`, `HomeServices.tsx`, `Home.tsx`, `CRMAutomation.tsx`, `GoogleBusinessProfileOptimizationReview.tsx`, `Industries.tsx`, `AIVisibility.tsx`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **What connects `pageStyles`, `homeSource`, `hostSource` to the rest of the system?**
  _159 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `dialog.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06108597285067873 - nodes in this community are weakly interconnected._
- **Should `sidebar.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05673758865248227 - nodes in this community are weakly interconnected._
- **Should `DiagnosticPlatform.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06039488966318235 - nodes in this community are weakly interconnected._