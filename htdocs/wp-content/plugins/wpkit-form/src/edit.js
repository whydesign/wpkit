import { useBlockProps } from '@wordpress/block-editor';
import { TextControl, TextareaControl, PanelBody } from '@wordpress/components';

export default function Edit({attributes, setAttributes}) {
    return(
        <div {...useBlockProps()}>
            <PanelBody>
                <form class="uk-form-stacked">
                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">Name</label>
                        <div class="uk-form-controls">
                            <input class="uk-input" type="text" placeholder="Name" aria-label="Input" required></input>
                        </div>
                    </div>
                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">E-Mail</label>
                        <div class="uk-form-controls">
                            <input class="uk-input" type="text" placeholder="E-Mail" aria-label="Input" required></input>
                        </div>
                    </div>
                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">Nachricht</label>
                        <div class="uk-form-controls">
                            <textarea class="uk-textarea" rows="5" placeholder="Nachricht" aria-label="Textarea" required></textarea>
                        </div>
                    </div>
                    <div class="uk-margin">
                        <label><input class="uk-checkbox" type="checkbox" required></input> Ich stimme der Verarbeitung meiner Daten lt. Datenschutzerklärung zu.</label>
                    </div>
                    <div class="uk-margin">
                        <button class="uk-button uk-button-primary" type="submit">Submit</button>
                    </div>
                </form>
            </PanelBody>
        </div>
    )
}
