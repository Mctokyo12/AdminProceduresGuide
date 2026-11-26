# Task: implement the DémarchesCM mobile screens from Figma

You are working inside an existing, already-organized Expo (React Native) project.
Implement the UI of the Figma design below as production-quality code, screen by screen.

## 0. Before writing any code

1. Read the project first: app/ (routes), components/, features/, lib/, locales/, types/,
   global.css, tailwind.config.js, package.json. Follow the existing structure and naming.
   Do NOT reorganize folders or rename files.
2. Make sure the Figma MCP tools are available. If they are not, tell me and stop.
3. Load the figma-design-to-code skill/guidance before calling get_design_context.

## 1. Stack and constraints

- Expo + Expo Router, TypeScript (strict), NativeWind v4 (Tailwind classes), Public Sans font.
- Design width: 390 px, mobile first. French is the default language; English is secondary.
- The app must work offline: never block rendering on network calls. Use mock data for now.
- No backend, no auth screens (they are not in Figma), no real AI calls.

## 2. Figma source

- File key: TpXsKviJH8CZaSILHRO7te (DémarchesCM – Cameroon Citizen Portal)
- For each screen: call get_design_context and get_screenshot with the node id below.
- The design context returns React + Tailwind for the WEB. It is a reference only: adapt it.

| Screen                                    | Light node              | Dark node | Route (use the existing file if named differently) |
| ----------------------------------------- | ----------------------- | --------- | -------------------------------------------------- |
| Bienvenue (onboarding)                    | 1:2003                  | 2:2843    | app/onboarding.tsx                                 |
| Accueil                                   | 1:893                   | 2:2546    | app/(tabs)/index.tsx                               |
| Accueil, 2nd frame (pôles administratifs) | 1:2177                  | none      | see note below                                     |
| Résultats : passeport                     | 1:1191                  | 2:3352    | app/search.tsx                                     |
| Démarche : Obtenir un passeport           | 1:1678                  | 2:3025    | app/procedure/[id].tsx                             |
| Assistant démarches                       | 1:1463                  | 2:4188    | app/(tabs)/assistant.tsx                           |
| Mes fiches                                | 1:247                   | 2:3927    | app/(tabs)/saved.tsx                               |
| Paramètres                                | 1:2                     | 2:3653    | app/(tabs)/settings.tsx                            |
| Signaler une erreur (bottom sheet)        | 1:508 (+ overlay 1:833) | none      | app/report-issue.tsx (modal)                       |

Note: frame 1:2177 is named "Accueil" like 1:893 but shows "Pôles administratifs" content.
Do not create a new route for it. Implement it as a section or state of the Accueil screen,
and tell me in your report what you decided.

## 3. Colors: use tokens only (critical)

Figma has NO color variables: colors are hard-coded hex values. global.css already defines
light and dark values as CSS variables, and tailwind.config.js exposes them.

- Use semantic classes only (bg-background, bg-card, text-foreground, text-muted, border-border...).
- NEVER write hex values, rgb() or dark: variants in components. Dark mode switches automatically.
- Build each screen once. The dark Figma frames are only used to check the result.
- Do not edit values in global.css. If a color has no token, stop and ask me.

Map Figma hex values to tokens like this:

| Figma (light)                                 | Figma (dark)                           | Token                                    |
| --------------------------------------------- | -------------------------------------- | ---------------------------------------- |
| #F6FAF7                                       | #0F1512                                | background                               |
| #FFFFFF                                       | #17201C                                | card                                     |
| #FFFFFF / white 95%                           | #1E2924                                | elevated (bottom nav, modals)            |
| #F0F5F1                                       | #1E2924                                | surface-muted (inset boxes inside cards) |
| #E5E9E6                                       | #26332D                                | track (progress track, neutral pills)    |
| #EAEFEB                                       | #26332D                                | border (1 px dividers)                   |
| #181D1B                                       | #E8EEEA                                | foreground                               |
| #3F4943                                       | #A6B3AC                                | muted                                    |
| #6F7A73                                       | (muted at 70%)                         | subtle                                   |
| #00543B (buttons, active text)                | #3FB68B                                | primary                                  |
| white on primary                              | #07130E                                | primary-foreground                       |
| #0B6E4F (toggle on, progress fill)            | #3FB68B                                | primary-container                        |
| rgba(159,244,204,0.4)                         | rgba(63,182,139,0.15)                  | primary-tint                             |
| #0B6E4F header, white title, #98EDC6 subtitle | #1E2924                                | header, header-foreground, header-muted  |
| #6A4800 text                                  | #F5B83D                                | accent                                   |
| rgba(254,179,22,0.2)                          | rgba(245,184,61,0.15)                  | accent-surface                           |
| #FEB316                                       | rgba(245,184,61,0.3)                   | accent-border                            |
| #BA1A1A                                       | #FF6B6B (Figma also uses #FF8577 once) | error                                    |
| #E5E9E6                                       | #2A3631                                | offline / offline-foreground             |

If a value does not match this table, pick the closest token and list it in your report.
For icons, StatusBar and placeholderTextColor (no className), use lib/colors.ts with useColorScheme.

## 4. Design rules to respect

- Radii: 4 px (badges, chips, checkboxes), 8 px (buttons, inputs, cards), 12 px (bottom sheets, banners, large buttons). Circles only for avatars, step numbers, radio buttons and toggles.
- Depth comes from tone + 1 px border. Light Figma cards have a very faint shadow: skip it unless I ask.
- Numbers (prices, dates, reference numbers): fontVariant ["tabular-nums"].
- Uppercase only for small status labels (11 to 12 px, letter-spacing 0.04em).
- Touch targets at least 44 px. Add accessibilityLabel / accessibilityRole to every Pressable and icon button.
- Text with long French content must wrap, never truncate important information.

## 5. Translating the Figma output to React Native

- div -> View, p/span/h1-h3 -> Text, img -> expo-image, button/a -> Pressable, scroll areas -> ScrollView or FlatList.
- Drop absolute positioning from the export. Rebuild layouts with flex, gap and padding.
- px values -> Tailwind scale (p-4 = 16 px). Use arbitrary values only when nothing fits.
- Icons: reuse the project's icon library if one exists; otherwise react-native-svg or lucide-react-native. Do not paste Figma asset URLs in the final code.
- Remove web-only things: backdrop-blur, CSS gradients, hover states. Use active: states for pressed feedback.
- All visible strings go in locales/fr.json (and en.json with the same keys, English text if obvious, otherwise the French text marked TODO). No hard-coded strings in components.

## 6. Order of work

1. Shared components first (check components/ before creating anything): AppHeader, BottomNav, OfflineBanner, Button (primary / secondary / destructive), Badge (including "Vérifié le"), Chip, Card, Toggle, Input, ProcedureCard, MetricCard, RequirementItem, StepTimeline, ChecklistProgress, SourceItem, BottomSheet.
2. Then screens in this order: Accueil, Procedure details, Mes fiches, Résultats, Paramètres, Assistant, Bienvenue, Signaler une erreur.
3. Typed mock data in types/ and features/ (a procedure has: title, category, cost, duration, location, requirements, steps, sources, verifiedAt, version).

## 7. Workflow for EACH screen

1. get_design_context + get_screenshot for the light node, and the dark node when it exists.
2. List which existing components you will reuse and which new ones you need.
3. Implement.
4. Run the type check and lint, and fix all errors.
5. Compare with the screenshot in light AND dark mode (toggle with setColorScheme). Fix spacing, sizes, colors and text.
6. Report in 5 lines: files created or changed, components reused, deviations from Figma, open questions.
   Then wait for my "next" before starting the following screen.

## 8. Definition of done

- Visually matches Figma in light and dark at 390 px width, and holds up at 360 px and 430 px.
- Zero hex values and zero dark: classes in components.
- Type check and lint pass. No unused code, no console.log.
- Every screen works with the network off (mock data only).
- Do not commit, push or install new dependencies without asking me first.
