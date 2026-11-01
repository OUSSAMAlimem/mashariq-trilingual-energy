<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- All FR/AR/EN copy lives in src/lib/content.ts; components read it via useI18n so every language stays in sync.
- Quote requests are inserted into the quote_requests table (insert-only for visitors) so leads are never faked.
- Hero background photos come from the hero_slides table + private hero-photos bucket (signed URLs via a public server fn); with no rows the bundled images are used, and crossfade/zoom keyframes are generated per photo count so timing stays 6s per scene.
- The first account ever created is auto-granted admin (trigger on auth.users); admin rights live only in user_roles and gate the French-only /admin page.
