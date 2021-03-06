import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material";
import {Settings} from "../services/settings.service";
import {Translations} from "../../translations/translations.service";

@Injectable()
export class Toast {

    /**
     * ToastService Constructor.
     */
    constructor(private settings: Settings, private i18n: Translations, private snackbar: MatSnackBar) {}

    public open(message: string, config: {duration?: number, action?: string} = {}) {
        if ( ! config.duration && config.duration !== 0) {
            config.duration = this.settings.get('toast.default_timeout', 3000);
        }

        return this.snackbar.open(this.i18n.t(message), config.action, {duration: config.duration});
    }
}