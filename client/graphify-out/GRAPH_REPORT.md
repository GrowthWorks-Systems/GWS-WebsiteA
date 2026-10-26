# Graph Report - client  (2026-10-26)

## Corpus Check
- 171 files · ~896,111 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1016 nodes · 1738 edges · 95 communities (55 shown, 40 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6d40fdea`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- sidebar.tsx
- alert-dialog.tsx
- cn
- Solutions.tsx
- dialog.tsx
- DiagnosticPlatform.tsx
- Framework.tsx
- field.tsx
- TableOfContents.tsx
- AIReadyWebsite.tsx
- stickyHeader.ts
- menubar.tsx
- FinancialAdvisors.tsx
- InsuranceAgencies.tsx
- PrivacyPolicy.tsx
- ConversionSystems.tsx
- ThemeContext.tsx
- TermsConditions.tsx
- dropdown-menu.tsx
- About.tsx
- Resources.tsx
- revenue-infrastructure-package/App.tsx
- CanonicalDefinition.tsx
- AIVisibilityCall.tsx
- utils.ts
- carousel.tsx
- Contact.tsx
- HomeServices.tsx
- buyer-journey-package/App.tsx
- item.tsx
- Home.tsx
- SiteFooter.tsx
- SuppliedVisualBlocks.tsx
- chart.tsx
- context-menu.tsx
- drawer.tsx
- AIVisibilityReview.tsx
- src/App.tsx
- RevenueDiagnostic.tsx
- NineDomainFramework.tsx
- ChatWidget.tsx
- navigation-menu.tsx
- Industries.tsx
- SolutionsDigitalPresenceSection.tsx
- AIVisibility.tsx
- BuyerJourneyPlugAndPlayHost.tsx
- popover.tsx
- empty.tsx
- ErrorBoundary.tsx
- HomepageSectionSpacing.test.ts
- toggle-group.tsx
- AIBuyerJourneySection.tsx
- AIEvolutionSection.tsx
- SuppliedFragmentedConnectedVisual.tsx
- Assets Guide
- AIEntityOptimizationSection.tsx
- AIOptimizationConsolidationSection.tsx
- AIRecommendationMechanicsSection.tsx
- BusinessOutcomesInteractive.tsx
- BuyerJourneyPlugAndPlayHost.test.ts
- RevenueInfrastructurePlugAndPlayHost.test.ts
- alert.tsx
- SolutionsLeadResponseSection.tsx
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
2. `SiteHeader()` - 34 edges
3. `Seo()` - 32 edges
4. `SiteFooter()` - 31 edges
5. `TableOfContents()` - 24 edges
6. `Button()` - 13 edges
7. `useReveal()` - 13 edges
8. `buttonVariants` - 9 edges
9. `useReveal()` - 8 edges
10. `Input()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `AlertDialogOverlay()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/alert-dialog.tsx → src/lib/utils.ts
- `AlertDialogContent()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/alert-dialog.tsx → src/lib/utils.ts
- `AlertDialogHeader()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/alert-dialog.tsx → src/lib/utils.ts
- `AlertDialogFooter()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/alert-dialog.tsx → src/lib/utils.ts
- `AlertDialogTitle()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/alert-dialog.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (95 total, 40 thin omitted)

### Community 0 - "sidebar.tsx"
Cohesion: 0.06
Nodes (40): Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetTitle(), Sidebar() (+32 more)

### Community 1 - "alert-dialog.tsx"
Cohesion: 0.06
Nodes (31): systemLayers, AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay() (+23 more)

### Community 2 - "cn"
Cohesion: 0.08
Nodes (34): AccordionContent(), AccordionItem(), AccordionTrigger(), Avatar(), AvatarFallback(), AvatarImage(), BreadcrumbEllipsis(), BreadcrumbItem() (+26 more)

### Community 3 - "Solutions.tsx"
Cohesion: 0.10
Nodes (14): OUTCOMES, SolutionsBusinessOutcomesSection(), SolutionsClosingCTASection(), CARDS, SolutionsConnectedSystemSection(), SolutionsConstraintFirstSection(), SolutionsHero(), CAPABILITIES (+6 more)

### Community 4 - "dialog.tsx"
Cohesion: 0.06
Nodes (38): ManusDialogProps, loadMapScript(), MapView(), MapViewProps, Window, Command(), CommandDialog(), CommandGroup() (+30 more)

### Community 5 - "DiagnosticPlatform.tsx"
Cohesion: 0.13
Nodes (22): ASSESSMENT_PRINCIPLES, AssessmentFamilySection(), AssessmentPrinciplesSection(), ASSESSMENTS, BeginDiagnosticSection(), DIAGNOSTIC_DOMAINS, DIAGNOSTIC_OUTPUTS, DIAGNOSTIC_QUESTIONS (+14 more)

### Community 6 - "Framework.tsx"
Cohesion: 0.14
Nodes (12): BusinessOutcomesSection(), DiagnosticCTASection(), DOMAIN_ICONS, DOMAINS, FragmentedVsConnectedSection(), I, INFRA_X_POSITIONS, PILLARS (+4 more)

### Community 7 - "field.tsx"
Cohesion: 0.16
Nodes (12): Field(), FieldContent(), FieldDescription(), FieldError(), FieldGroup(), FieldLabel(), FieldLegend(), FieldSeparator() (+4 more)

### Community 8 - "TableOfContents.tsx"
Cohesion: 0.12
Nodes (6): getTocForPath(), PAGE_TOCS, PageToc, TableOfContents(), TocItem, CRMAutomation()

### Community 9 - "AIReadyWebsite.tsx"
Cohesion: 0.11
Nodes (5): AIReadyWebsite(), APPROACH, CALL_STEPS, OUTCOMES, PROBLEMS

### Community 11 - "menubar.tsx"
Cohesion: 0.12
Nodes (11): Menubar(), MenubarCheckboxItem(), MenubarContent(), MenubarItem(), MenubarLabel(), MenubarRadioItem(), MenubarSeparator(), MenubarShortcut() (+3 more)

### Community 13 - "InsuranceAgencies.tsx"
Cohesion: 0.12
Nodes (6): CAPABILITY_GROUPS, CHALLENGES, DISCOVERY_SIGNALS, FAQ_ITEMS, InsuranceAgencies(), TRUST_DIMENSIONS

### Community 16 - "ThemeContext.tsx"
Cohesion: 0.29
Nodes (5): Theme, ThemeContext, ThemeContextType, ThemeProvider(), ThemeProviderProps

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

### Community 24 - "utils.ts"
Cohesion: 0.11
Nodes (9): Badge(), badgeVariants, HoverCardContent(), Progress(), ResizableHandle(), ResizablePanelGroup(), Slider(), Spinner() (+1 more)

### Community 25 - "carousel.tsx"
Cohesion: 0.19
Nodes (13): Carousel(), CarouselApi, CarouselContent(), CarouselContext, CarouselContextProps, CarouselItem(), CarouselNext(), CarouselOptions (+5 more)

### Community 26 - "Contact.tsx"
Cohesion: 0.09
Nodes (26): Checkbox(), FormControl(), FormDescription(), FormField(), FormFieldContext, FormFieldContextValue, FormItem(), FormItemContext (+18 more)

### Community 28 - "buyer-journey-package/App.tsx"
Cohesion: 0.15
Nodes (5): C, CARD_X, NODE_CARD, NODE_X, PARTICLES

### Community 29 - "item.tsx"
Cohesion: 0.13
Nodes (17): ButtonGroup(), ButtonGroupSeparator(), ButtonGroupText(), buttonGroupVariants, Item(), ItemActions(), ItemContent(), ItemDescription() (+9 more)

### Community 30 - "Home.tsx"
Cohesion: 0.24
Nodes (9): getPageParallaxTravel(), PAGE_PARALLAX_SCROLL_TRIGGER, PAGE_TEXT_REVEAL_TRIGGER, fitSignals, Home(), industryCards, problemCards, processSteps (+1 more)

### Community 31 - "SiteFooter.tsx"
Cohesion: 0.12
Nodes (12): PAGE_SEO, Seo(), SeoProps, footerGroups, SiteFooter(), SiteHeader(), GWS_NAV_GROUPS, GWS_NAV_LINKS (+4 more)

### Community 32 - "SuppliedVisualBlocks.tsx"
Cohesion: 0.24
Nodes (4): comparisonCapabilities, REVENUE_INFRASTRUCTURE_CAPABILITIES, REVENUE_INFRASTRUCTURE_OUTCOMES, REVENUE_INFRASTRUCTURE_TOOLS

### Community 33 - "chart.tsx"
Cohesion: 0.25
Nodes (9): ChartConfig, ChartContainer(), ChartContext, ChartContextProps, ChartLegendContent(), ChartTooltipContent(), getPayloadConfigFromPayload(), THEMES (+1 more)

### Community 34 - "context-menu.tsx"
Cohesion: 0.12
Nodes (9): ContextMenuCheckboxItem(), ContextMenuContent(), ContextMenuItem(), ContextMenuLabel(), ContextMenuRadioItem(), ContextMenuSeparator(), ContextMenuShortcut(), ContextMenuSubContent() (+1 more)

### Community 35 - "drawer.tsx"
Cohesion: 0.18
Nodes (6): DrawerContent(), DrawerDescription(), DrawerFooter(), DrawerHeader(), DrawerOverlay(), DrawerTitle()

### Community 36 - "AIVisibilityReview.tsx"
Cohesion: 0.18
Nodes (3): AIVisibilityReview(), WHAT_EXPECT, Window

### Community 37 - "src/App.tsx"
Cohesion: 0.10
Nodes (9): App(), NOTE: About Theme, Toaster(), Contact(), DiagnosticPlatform(), Framework(), GoogleBusinessProfileOptimizationReview(), WHAT_EXPECT (+1 more)

### Community 38 - "RevenueDiagnostic.tsx"
Cohesion: 0.18
Nodes (3): RevenueDiagnostic(), WHAT_EXPECT, Window

### Community 39 - "NineDomainFramework.tsx"
Cohesion: 0.22
Nodes (9): cols, domains, edges, NineDomainFramework(), nodePos(), PopoverPos, rows, SystemDiagram() (+1 more)

### Community 40 - "ChatWidget.tsx"
Cohesion: 0.50
Nodes (3): ChatWidget(), IMPORTANT: React does not execute inline scripts inserted via…, WIDGET_CONFIG

### Community 41 - "navigation-menu.tsx"
Cohesion: 0.22
Nodes (9): NavigationMenu(), NavigationMenuContent(), NavigationMenuIndicator(), NavigationMenuItem(), NavigationMenuLink(), NavigationMenuList(), NavigationMenuTrigger(), navigationMenuTriggerStyle (+1 more)

### Community 43 - "SolutionsDigitalPresenceSection.tsx"
Cohesion: 0.50
Nodes (3): CAPABILITIES, highlight(), SolutionsDigitalPresenceSection()

### Community 44 - "AIVisibility.tsx"
Cohesion: 0.43
Nodes (4): AICClosingCTABand(), AIVisibilityHero(), AnchorLink(), AIVisibility()

### Community 45 - "BuyerJourneyPlugAndPlayHost.tsx"
Cohesion: 0.29
Nodes (6): App(), BuyerJourneyPlugAndPlayHost(), DriftBeam, DriftNode, GwsParticleDrift(), PARTICLE_CHARS

### Community 47 - "empty.tsx"
Cohesion: 0.29
Nodes (7): Empty(), EmptyContent(), EmptyDescription(), EmptyHeader(), EmptyMedia(), emptyMediaVariants, EmptyTitle()

### Community 48 - "ErrorBoundary.tsx"
Cohesion: 0.29
Nodes (3): ErrorBoundary, Props, State

### Community 49 - "HomepageSectionSpacing.test.ts"
Cohesion: 0.29
Nodes (6): buyerJourneyHost, buyerJourneyPackage, homeSource, pageStyles, revenueHost, revenuePackageStyles

### Community 50 - "toggle-group.tsx"
Cohesion: 0.43
Nodes (5): ToggleGroup(), ToggleGroupContext, ToggleGroupItem(), Toggle(), toggleVariants

### Community 53 - "SuppliedFragmentedConnectedVisual.tsx"
Cohesion: 0.33
Nodes (3): connected, fragmented, systemLayers

### Community 54 - "Assets Guide"
Cohesion: 0.40
Nodes (4): Assets Guide, Folder Structure, How to Add Images, Reference

### Community 58 - "BusinessOutcomesInteractive.tsx"
Cohesion: 0.50
Nodes (3): BUSINESS_OUTCOMES, BusinessOutcomesInteractive(), pageStyles

### Community 59 - "BuyerJourneyPlugAndPlayHost.test.ts"
Cohesion: 0.40
Nodes (4): homeSource, hostSource, packageSource, pageStyles

### Community 60 - "RevenueInfrastructurePlugAndPlayHost.test.ts"
Cohesion: 0.40
Nodes (4): homeSource, hostSource, packageSource, packageStyles

### Community 61 - "alert.tsx"
Cohesion: 0.50
Nodes (4): Alert(), AlertDescription(), AlertTitle(), alertVariants

### Community 62 - "SolutionsLeadResponseSection.tsx"
Cohesion: 0.67
Nodes (3): CAPABILITIES, highlight(), SolutionsLeadResponseSection()

## Knowledge Gaps
- **167 isolated node(s):** `pageStyles`, `homeSource`, `hostSource`, `packageSource`, `pageStyles` (+162 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **40 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `sidebar.tsx`, `alert-dialog.tsx`, `dialog.tsx`, `field.tsx`, `menubar.tsx`, `dropdown-menu.tsx`, `utils.ts`, `carousel.tsx`, `Contact.tsx`, `item.tsx`, `chart.tsx`, `context-menu.tsx`, `drawer.tsx`, `navigation-menu.tsx`, `popover.tsx`, `empty.tsx`, `ErrorBoundary.tsx`, `toggle-group.tsx`, `alert.tsx`?**
  _High betweenness centrality (0.351) - this node is a cross-community bridge._
- **Why does `Seo()` connect `SiteFooter.tsx` to `alert-dialog.tsx`, `Solutions.tsx`, `DiagnosticPlatform.tsx`, `Framework.tsx`, `TableOfContents.tsx`, `AIReadyWebsite.tsx`, `FinancialAdvisors.tsx`, `InsuranceAgencies.tsx`, `PrivacyPolicy.tsx`, `ConversionSystems.tsx`, `TermsConditions.tsx`, `About.tsx`, `Resources.tsx`, `AIVisibilityCall.tsx`, `Contact.tsx`, `HomeServices.tsx`, `Home.tsx`, `AIVisibilityReview.tsx`, `src/App.tsx`, `RevenueDiagnostic.tsx`, `Industries.tsx`, `AIVisibility.tsx`?**
  _High betweenness centrality (0.036) - this node is a cross-community bridge._
- **Why does `SiteHeader()` connect `SiteFooter.tsx` to `Solutions.tsx`, `DiagnosticPlatform.tsx`, `Framework.tsx`, `TableOfContents.tsx`, `AIReadyWebsite.tsx`, `stickyHeader.ts`, `FinancialAdvisors.tsx`, `InsuranceAgencies.tsx`, `PrivacyPolicy.tsx`, `ConversionSystems.tsx`, `TermsConditions.tsx`, `About.tsx`, `Resources.tsx`, `AIVisibilityCall.tsx`, `Contact.tsx`, `HomeServices.tsx`, `Home.tsx`, `AIVisibilityReview.tsx`, `src/App.tsx`, `RevenueDiagnostic.tsx`, `Industries.tsx`, `AIVisibility.tsx`?**
  _High betweenness centrality (0.033) - this node is a cross-community bridge._
- **What connects `pageStyles`, `homeSource`, `hostSource` to the rest of the system?**
  _167 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `sidebar.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05673758865248227 - nodes in this community are weakly interconnected._
- **Should `alert-dialog.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05920444033302498 - nodes in this community are weakly interconnected._
- **Should `cn` be split into smaller, more focused modules?**
  _Cohesion score 0.07536231884057971 - nodes in this community are weakly interconnected._