import {Injectable} from '@angular/core';
import merge from 'deepmerge'
import {VebtoConfigStructure} from "./types/vebto-config-structure";
import {colors, customCode, general, menus, seo} from "../admin/appearance/config/index";

@Injectable()
export class VebtoConfig {

    constructor() {
        //TODO: figure out why compilation errors out without this
        const temp = [colors, customCode, general, menus, seo];
    }

    private config: VebtoConfigStructure = {
        environment: 'production',
        admin: {
            pages: [],
            appearance: {
                defaultRoute: '/',
                navigationRoutes: [
                    'account/settings',
                    'admin',
                ],
                menus: {
                    availableRoutes: [
                        'login',
                        'register',
                        'account-settings',
                        'admin/appearance',
                        'admin/users',
                        'admin/settings/authentication',
                        'admin/settings/branding',
                        'admin/settings/cache',
                        'admin/settings/providers',
                        'admin/groups',
                    ],
                },
                fields: {
                    general,
                    menus,
                    colors,
                    customCode,
                    seo,
                }
            }
        }
    };

    public get(): VebtoConfigStructure {
        return this.config;
    }

    public merge(config: object) {
        this.config = merge(this.config, config);
    }
}
